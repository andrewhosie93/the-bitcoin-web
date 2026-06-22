"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { AtlasData, AtlasNode, AtlasSource, ExplanationMode } from "@/types/atlas";

type AtlasClientProps = {
  atlas: AtlasData;
};

type AtlasView = "home" | "strand" | "node";
type SelectIntent = "default" | "toward" | "deeper" | "related" | "center";
type HistoryMode = "push" | "replace" | "none";

type Point = {
  x: number;
  y: number;
};

type StrandModel = {
  id: string;
  node: AtlasNode;
  angle: number;
  end: Point;
  satellites: Array<Point & { delay: number }>;
};

type BranchModel = {
  id: string;
  node: AtlasNode;
  angle: number;
  point: Point;
};

type CameraState = {
  x: number;
  y: number;
  scale: number;
};

type Bounds = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
};

type ViewportSize = {
  width: number;
  height: number;
};

type SafeRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
};

type ChildNodeModel = {
  id: string;
  node: AtlasNode;
  parentPoint: Point;
  point: Point;
};

type AtlasSnapshot = {
  view: AtlasView;
  selectedId: string;
  selectedStrandId: string | null;
  pathIds: string[];
};

type AtlasHistoryState = {
  __bitcoinAtlas: true;
  index: number;
  snapshot: AtlasSnapshot;
};

const WORLD = {
  width: 1400,
  height: 1000,
  center: { x: 700, y: 520 },
  mainRadius: 360,
  moneyHub: { x: 700, y: 210 },
  moneyBranchRadius: 280
};

const NODE_RADIUS = {
  moneyHub: 56,
  branch: 56,
  child: 40,
  focus: 44
};

const MONEY_BRANCH_ANGLES: Record<string, number> = {
  scarcity: -34,
  settlement: 18,
  custody: 74,
  ledgers: 126,
  trust: 182,
  "political-control": 234
};

const HOME_STRAND_GEOMETRY: Record<string, { radius?: number; angleOffset?: number }> = {
  energy: { radius: 340 },
  cryptography: { radius: 328, angleOffset: -2 },
  computation: { radius: 306, angleOffset: -4 },
  networks: { radius: 306, angleOffset: 4 },
  "government-power": { radius: 328, angleOffset: 2 },
  "philosophy-time": { radius: 340 }
};

const HOME_LABEL_OFFSETS: Record<string, { radial?: number; tangent?: number; width?: number }> = {
  cryptography: { radial: 24, tangent: -12 },
  computation: { radial: 26, tangent: -4 },
  networks: { radial: 26, tangent: 4 },
  "government-power": { radial: 22, tangent: 12, width: 136 },
  "philosophy-time": { radial: 26 }
};

const explanationModes: Array<{ id: ExplanationMode; label: string }> = [
  { id: "surface", label: "Surface" },
  { id: "curious", label: "Deeper" },
  { id: "studious", label: "Sources" }
];

const SVG_COORD_PRECISION = 1_000_000;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function svgNumber(value: number) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  const rounded = Math.round(value * SVG_COORD_PRECISION) / SVG_COORD_PRECISION;
  return Object.is(rounded, -0) ? 0 : rounded;
}

function svgPoint(point: Point): Point {
  return {
    x: svgNumber(point.x),
    y: svgNumber(point.y)
  };
}

function formatSvgNumber(value: number) {
  return svgNumber(value).toString();
}

function formatTransformOrigin(point: Point) {
  return `${formatSvgNumber(point.x)}px ${formatSvgNumber(point.y)}px`;
}

function polar(cxValue: number, cyValue: number, radius: number, angleDeg: number) {
  const angle = (angleDeg * Math.PI) / 180;
  return svgPoint({
    x: cxValue + radius * Math.cos(angle),
    y: cyValue + radius * Math.sin(angle)
  });
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function trimConnector(from: Point, to: Point, fromRadius: number, toRadius: number) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.max(Math.hypot(dx, dy), 1);
  const ux = dx / length;
  const uy = dy / length;

  return {
    from: svgPoint({
      x: from.x + ux * fromRadius,
      y: from.y + uy * fromRadius
    }),
    to: svgPoint({
      x: to.x - ux * toRadius,
      y: to.y - uy * toRadius
    })
  };
}

function connectorPath(from: Point, to: Point, fromRadius: number, toRadius: number, bend = 0) {
  const trimmed = trimConnector(from, to, fromRadius, toRadius);
  return curvePath(trimmed.from, trimmed.to, bend);
}

function getVisibleViewBoxRect(viewport: ViewportSize) {
  if (!viewport.width || !viewport.height) {
    return { x: 0, y: 0, width: WORLD.width, height: WORLD.height };
  }

  const viewportAspect = viewport.width / viewport.height;
  const worldAspect = WORLD.width / WORLD.height;

  if (viewportAspect > worldAspect) {
    const height = WORLD.width / viewportAspect;
    return {
      x: 0,
      y: (WORLD.height - height) / 2,
      width: WORLD.width,
      height
    };
  }

  const width = WORLD.height * viewportAspect;
  return {
    x: (WORLD.width - width) / 2,
    y: 0,
    width,
    height: WORLD.height
  };
}

function getSafeRect(viewport: ViewportSize, view: AtlasView, isCompact: boolean): SafeRect {
  const visible = getVisibleViewBoxRect(viewport);
  const pxToWorldX = viewport.width ? visible.width / viewport.width : 1;
  const pxToWorldY = viewport.height ? visible.height / viewport.height : 1;

  if (view === "home") {
    const homeInset = isCompact ? 20 : viewport.width <= 960 ? 36 : 60;

    return {
      ...visible,
      paddingTop: (isCompact ? 48 : 60) * pxToWorldY,
      paddingRight: homeInset * pxToWorldX,
      paddingBottom: (isCompact ? 92 : 110) * pxToWorldY,
      paddingLeft: homeInset * pxToWorldX
    };
  }

  const useDetailDrawer = view === "node" && (isCompact || viewport.width <= 1100);

  if (view === "node" && !useDetailDrawer) {
    const panelWidth = Math.min(576, Math.max(0, viewport.width - 40));
    const rightReserve = (panelWidth + 40) * pxToWorldX;

    return {
      ...visible,
      width: Math.max(visible.width * 0.36, visible.width - rightReserve),
      paddingTop: 116 * pxToWorldY,
      paddingRight: 36 * pxToWorldX,
      paddingBottom: 48 * pxToWorldY,
      paddingLeft: 64 * pxToWorldX
    };
  }

  if (useDetailDrawer) {
    const bottomDrawerReserve = viewport.height * 0.42 * pxToWorldY;

    return {
      ...visible,
      paddingTop: 104 * pxToWorldY,
      paddingRight: 28 * pxToWorldX,
      paddingBottom: bottomDrawerReserve,
      paddingLeft: 28 * pxToWorldX
    };
  }

  return {
    ...visible,
    paddingTop: (isCompact ? 98 : 112) * pxToWorldY,
    paddingRight: (isCompact ? 28 : 84) * pxToWorldX,
    paddingBottom: (isCompact ? 96 : 76) * pxToWorldY,
    paddingLeft: (isCompact ? 28 : 84) * pxToWorldX
  };
}

function boundsFromCircles(items: Array<{ point: Point; radius: number; padding?: number }>): Bounds {
  if (!items.length) {
    return {
      minX: WORLD.center.x - 1,
      minY: WORLD.center.y - 1,
      maxX: WORLD.center.x + 1,
      maxY: WORLD.center.y + 1
    };
  }

  return items.reduce<Bounds>(
    (bounds, item) => {
      const radius = item.radius + (item.padding ?? 0);
      return {
        minX: Math.min(bounds.minX, item.point.x - radius),
        minY: Math.min(bounds.minY, item.point.y - radius),
        maxX: Math.max(bounds.maxX, item.point.x + radius),
        maxY: Math.max(bounds.maxY, item.point.y + radius)
      };
    },
    {
      minX: Number.POSITIVE_INFINITY,
      minY: Number.POSITIVE_INFINITY,
      maxX: Number.NEGATIVE_INFINITY,
      maxY: Number.NEGATIVE_INFINITY
    }
  );
}

function fitBoundsToSafeRect(bounds: Bounds, safeRect: SafeRect, minScale: number, maxScale: number): CameraState {
  const innerWidth = Math.max(1, safeRect.width - safeRect.paddingLeft - safeRect.paddingRight);
  const innerHeight = Math.max(1, safeRect.height - safeRect.paddingTop - safeRect.paddingBottom);
  const boundsWidth = Math.max(1, bounds.maxX - bounds.minX);
  const boundsHeight = Math.max(1, bounds.maxY - bounds.minY);
  const scale = clamp(Math.min(innerWidth / boundsWidth, innerHeight / boundsHeight), minScale, maxScale);
  const boundsCenter = {
    x: (bounds.minX + bounds.maxX) / 2,
    y: (bounds.minY + bounds.maxY) / 2
  };
  const safeCenter = {
    x: safeRect.x + safeRect.paddingLeft + innerWidth / 2,
    y: safeRect.y + safeRect.paddingTop + innerHeight / 2
  };

  return {
    x: safeCenter.x - boundsCenter.x * scale,
    y: safeCenter.y - boundsCenter.y * scale,
    scale: Number.isFinite(scale) ? scale : 1
  };
}

function mergeBounds(bounds: Bounds[]): Bounds {
  return bounds.reduce<Bounds>(
    (merged, current) => ({
      minX: Math.min(merged.minX, current.minX),
      minY: Math.min(merged.minY, current.minY),
      maxX: Math.max(merged.maxX, current.maxX),
      maxY: Math.max(merged.maxY, current.maxY)
    }),
    {
      minX: Number.POSITIVE_INFINITY,
      minY: Number.POSITIVE_INFINITY,
      maxX: Number.NEGATIVE_INFINITY,
      maxY: Number.NEGATIVE_INFINITY
    }
  );
}

function getHomeStrandPoint(id: string, baseAngle: number, moneyEntryId: string) {
  if (id === moneyEntryId) {
    return { angle: baseAngle, end: WORLD.moneyHub };
  }

  const layout = HOME_STRAND_GEOMETRY[id] ?? {};
  const angle = baseAngle + (layout.angleOffset ?? 0);
  return {
    angle,
    end: polar(WORLD.center.x, WORLD.center.y, layout.radius ?? WORLD.mainRadius, angle)
  };
}

function getStrandLabelGeometry(strand: StrandModel, compact: boolean) {
  const angle = (strand.angle * Math.PI) / 180;
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);
  const width = compact ? Math.min(HOME_LABEL_OFFSETS[strand.id]?.width ?? 144, 144) : (HOME_LABEL_OFFSETS[strand.id]?.width ?? 176);
  const height = 60;
  const tangent = { x: -dy, y: dx };
  const offset = HOME_LABEL_OFFSETS[strand.id] ?? {};
  const radial = compact ? Math.min(offset.radial ?? 34, 30) : (offset.radial ?? 38);
  const side = compact ? (offset.tangent ?? 0) * 0.68 : (offset.tangent ?? 0);
  const anchor = {
    x: strand.end.x + dx * radial + tangent.x * side,
    y: strand.end.y + dy * radial + tangent.y * side
  };
  const align = (dx > 0.34 ? "left" : dx < -0.34 ? "right" : "center") as "left" | "right" | "center";
  const x = align === "left" ? anchor.x : align === "right" ? anchor.x - width : anchor.x - width / 2;
  const y = anchor.y - height / 2;

  return {
    align,
    height,
    width,
    x: svgNumber(x),
    y: svgNumber(y)
  };
}

function StrandLabel({
  strand,
  active,
  dimmed,
  actionVisible,
  compact,
  onHoverChange,
  onSelect
}: {
  strand: StrandModel;
  active: boolean;
  dimmed: boolean;
  actionVisible: boolean;
  compact: boolean;
  onHoverChange: (id: string | null) => void;
  onSelect: (id: string) => void;
}) {
  const { align, height, width, x, y } = getStrandLabelGeometry(strand, compact);
  const items = align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center";
  const opacity = active ? 1 : dimmed ? 0.16 : 0.64;

  return (
    <motion.g animate={{ opacity, y: active ? 0 : 3 }} transition={{ duration: 0.22 }} pointerEvents="auto" className="cursor-pointer">
      <foreignObject x={x} y={y} width={width} height={height}>
        <div
          className={cx("home-strand-label", active && "is-active")}
          style={{ alignItems: items, textAlign: align }}
          onClick={(event) => {
            event.stopPropagation();
            onSelect(strand.id);
          }}
          onMouseEnter={() => onHoverChange(strand.id)}
          onMouseLeave={() => onHoverChange(null)}
        >
          <span>{strand.id === "government-power" ? <>Government<br />&amp; Power</> : getStrandLabel(strand.node)}</span>
          <small style={{ opacity: actionVisible ? 1 : 0 }}>Enter strand</small>
        </div>
      </foreignObject>
    </motion.g>
  );
}

function curvePath(from: Point, to: Point, bend = 0) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.max(Math.hypot(dx, dy), 1);
  const control = {
    x: midX + (-dy / length) * bend,
    y: midY + (dx / length) * bend
  };

  return `M ${formatSvgNumber(from.x)} ${formatSvgNumber(from.y)} Q ${formatSvgNumber(control.x)} ${formatSvgNumber(control.y)} ${formatSvgNumber(to.x)} ${formatSvgNumber(to.y)}`;
}

function makeNodeMap(nodes: AtlasNode[]) {
  return new Map(nodes.map((node) => [node.id, node]));
}

function getNodeLabel(node: AtlasNode) {
  return node.shortTitle ?? node.title;
}

function getStrandLabel(node: AtlasNode) {
  return node.id === "bitcoin-as-money" ? "Money" : node.title;
}

function getAtlasHash(snapshot: AtlasSnapshot) {
  if (snapshot.view === "home") {
    return "";
  }

  if (snapshot.view === "node") {
    return `node=${encodeURIComponent(snapshot.selectedId)}`;
  }

  return `strand=${encodeURIComponent(snapshot.selectedStrandId ?? snapshot.selectedId)}`;
}

function readAtlasSnapshotFromLocation(rootId: string): AtlasSnapshot | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawHash = window.location.hash.replace(/^#/, "");
  if (!rawHash) {
    return null;
  }

  const params = new URLSearchParams(rawHash);
  const nodeId = params.get("node");
  const strandId = params.get("strand");

  if (nodeId) {
    return {
      view: "node",
      selectedId: nodeId,
      selectedStrandId: null,
      pathIds: [rootId, nodeId]
    };
  }

  if (strandId) {
    return {
      view: "strand",
      selectedId: strandId,
      selectedStrandId: strandId,
      pathIds: [rootId, strandId]
    };
  }

  return null;
}

function isAtlasNode(node: AtlasNode | undefined): node is AtlasNode {
  return Boolean(node);
}

function isAtlasSource(source: AtlasSource | undefined): source is AtlasSource {
  return Boolean(source);
}

function isPresent<T>(value: T | null | undefined): value is T {
  return value != null;
}

function getCanonicalBreadcrumbIds(node: AtlasNode, nodeMap: Map<string, AtlasNode>, rootId: string) {
  const trail: string[] = [];
  const seen = new Set<string>();
  let current: AtlasNode | undefined = node;

  while (current && !seen.has(current.id)) {
    trail.unshift(current.id);
    seen.add(current.id);

    if (current.id === rootId) {
      break;
    }

    current = current.parentIds.map((id) => nodeMap.get(id)).find(isAtlasNode);
  }

  return trail.length ? trail : [rootId];
}

function getBranchChildPoint(branch: BranchModel, childIndex: number, totalChildren: number, distance = 210): Point {
  return getChildPointFromParent(branch.point, branch.angle, childIndex, totalChildren, distance);
}

function getChildPointFromParent(parentPoint: Point, baseAngle: number, childIndex: number, totalChildren: number, distance = 210): Point {
  const spread = totalChildren <= 1 ? 0 : -36 + (childIndex * 72) / (totalChildren - 1);
  return polar(parentPoint.x, parentPoint.y, distance, baseAngle + spread);
}

function getAngleBetween(from: Point, to: Point): number {
  return (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;
}

function getPathToNode(pathIds: string[] | undefined, id: string): string[] | undefined {
  if (!pathIds) {
    return undefined;
  }

  const index = pathIds.lastIndexOf(id);
  return index >= 0 ? pathIds.slice(0, index + 1) : undefined;
}

function getPathParentId(id: string, pathIds: string[] | undefined, nodeMap: Map<string, AtlasNode>): string | null {
  const pathToNode = getPathToNode(pathIds, id);
  if (!pathToNode || pathToNode.length < 2) {
    return null;
  }

  const parentId = pathToNode[pathToNode.length - 2];
  const parent = nodeMap.get(parentId);
  const node = nodeMap.get(id);

  if (!parent || !node) {
    return null;
  }

  return parent.childIds.includes(id) || node.parentIds.includes(parentId) ? parentId : null;
}

function getNodeAxisAngle({
  id,
  point,
  moneyEntryId,
  branchModels,
  nodeMap,
  childDistance,
  pathIds
}: {
  id: string;
  point: Point;
  moneyEntryId: string;
  branchModels: BranchModel[];
  nodeMap: Map<string, AtlasNode>;
  childDistance: number;
  pathIds?: string[];
}): number {
  const branch = branchModels.find((item) => item.id === id);
  if (branch) {
    return branch.angle;
  }

  const pathParentId = getPathParentId(id, pathIds, nodeMap);
  if (pathParentId) {
    const parentPath = getPathToNode(pathIds, pathParentId);
    const parentPoint = getNodePoint({ id: pathParentId, moneyEntryId, branchModels, nodeMap, childDistance, pathIds: parentPath });
    return getAngleBetween(parentPoint, point);
  }

  const node = nodeMap.get(id);
  const parentBranch = node?.parentIds.map((parentId) => branchModels.find((item) => item.id === parentId)).find(Boolean);
  return parentBranch?.angle ?? -90;
}

function getNodePoint({
  id,
  moneyEntryId,
  branchModels,
  nodeMap,
  childDistance = 210,
  pathIds
}: {
  id: string;
  moneyEntryId: string;
  branchModels: BranchModel[];
  nodeMap: Map<string, AtlasNode>;
  childDistance?: number;
  pathIds?: string[];
}): Point {
  if (id === moneyEntryId) {
    return WORLD.moneyHub;
  }

  const directBranch = branchModels.find((branch) => branch.id === id);
  if (directBranch) {
    return directBranch.point;
  }

  const pathParentId = getPathParentId(id, pathIds, nodeMap);
  if (pathParentId) {
    const parent = nodeMap.get(pathParentId);
    const childIndex = parent?.childIds.indexOf(id) ?? -1;

    if (parent && childIndex >= 0) {
      const parentPath = getPathToNode(pathIds, pathParentId);
      const parentPoint = getNodePoint({ id: pathParentId, moneyEntryId, branchModels, nodeMap, childDistance, pathIds: parentPath });
      const parentAngle = getNodeAxisAngle({ id: pathParentId, point: parentPoint, moneyEntryId, branchModels, nodeMap, childDistance, pathIds: parentPath });
      return getChildPointFromParent(parentPoint, parentAngle, childIndex, parent.childIds.length, childDistance);
    }
  }

  for (const branch of branchModels) {
    const children = branch.node.childIds;
    const childIndex = children.indexOf(id);
    if (childIndex >= 0) {
      return getBranchChildPoint(branch, childIndex, children.length, childDistance);
    }
  }

  const node = nodeMap.get(id);
  const parent = node?.parentIds.map((parentId) => branchModels.find((branch) => branch.id === parentId)).find(Boolean);
  if (parent) {
    return polar(parent.point.x, parent.point.y, 160, parent.angle);
  }

  return WORLD.moneyHub;
}

function getCamera({
  view,
  selectedId,
  selectedStrandId,
  atlas,
  strands,
  branchModels,
  nodeMap,
  isCompact,
  viewport,
  childNodes,
  pathIds
}: {
  view: AtlasView;
  selectedId: string;
  selectedStrandId: string | null;
  atlas: AtlasData;
  strands: StrandModel[];
  branchModels: BranchModel[];
  nodeMap: Map<string, AtlasNode>;
  isCompact: boolean;
  viewport: ViewportSize;
  childNodes: ChildNodeModel[];
  pathIds: string[];
}): CameraState {
  if (view === "home") {
    const safeRect = getSafeRect(viewport, view, isCompact);
    const labelBounds = strands.map((strand) => {
      const label = getStrandLabelGeometry(strand, isCompact);
      return {
        minX: label.x,
        minY: label.y,
        maxX: label.x + label.width,
        maxY: label.y + label.height
      };
    });
    const bounds = mergeBounds([
      boundsFromCircles([
        { point: WORLD.center, radius: 180, padding: 6 },
        ...strands.map((strand) => ({ point: strand.end, radius: 34, padding: 10 }))
      ]),
      ...labelBounds
    ]);

    const homeMinScale = isCompact ? 0.44 : viewport.width <= 960 ? 0.62 : 0.92;

    return fitBoundsToSafeRect(bounds, safeRect, homeMinScale, 1);
  }

  const safeRect = getSafeRect(viewport, view, isCompact);
  const childDistance = isCompact ? 160 : 210;

  if (view === "strand" && (selectedStrandId === atlas.config.moneyEntryId || selectedId === atlas.config.moneyEntryId)) {
    const bounds = boundsFromCircles([
      { point: WORLD.moneyHub, radius: NODE_RADIUS.moneyHub, padding: 34 },
      ...branchModels.map((branch) => ({ point: branch.point, radius: NODE_RADIUS.branch, padding: 34 }))
    ]);

    return fitBoundsToSafeRect(bounds, safeRect, isCompact ? 0.58 : 0.95, isCompact ? 1 : 1.48);
  }

  if (view === "node") {
    const selectedPoint = getNodePoint({ id: selectedId, moneyEntryId: atlas.config.moneyEntryId, branchModels, nodeMap, childDistance, pathIds });
    const selectedIsBranch = branchModels.some((branch) => branch.id === selectedId);
    const selectedRadius = selectedIsBranch ? NODE_RADIUS.branch : NODE_RADIUS.focus;
    const bounds = boundsFromCircles([
      { point: selectedPoint, radius: selectedRadius, padding: 46 },
      ...childNodes.map((child) => ({ point: child.point, radius: NODE_RADIUS.child, padding: 56 }))
    ]);

    return fitBoundsToSafeRect(bounds, safeRect, isCompact ? 0.62 : 0.88, isCompact ? 1.05 : 1.36);
  }

  const selectedLegIndex = atlas.config.mainLegIds.indexOf(selectedId);
  const selectedPoint = selectedLegIndex >= 0 ? (strands.find((strand) => strand.id === selectedId)?.end ?? WORLD.center) : WORLD.center;

  return fitBoundsToSafeRect(boundsFromCircles([{ point: selectedPoint, radius: 72, padding: 60 }]), safeRect, 0.75, 1.25);
}

function easeCameraProgress(progress: number) {
  return progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function formatCameraTransform(camera: CameraState) {
  return `translate(${formatSvgNumber(camera.x)} ${formatSvgNumber(camera.y)}) scale(${formatSvgNumber(camera.scale)})`;
}

function CameraLayer({ target, reduceMotion, children }: { target: CameraState; reduceMotion: boolean; children: ReactNode }) {
  const layerRef = useRef<SVGGElement | null>(null);
  const cameraRef = useRef(target);
  const initialTransformRef = useRef(formatCameraTransform(target));

  useEffect(() => {
    const layerElement = layerRef.current;
    if (!layerElement) {
      return;
    }

    if (reduceMotion) {
      cameraRef.current = target;
      layerElement.setAttribute("transform", formatCameraTransform(target));
      return;
    }

    const from = cameraRef.current;
    const distance = Math.hypot(target.x - from.x, target.y - from.y);
    const scaleDistance = Math.abs(target.scale - from.scale);
    if (distance < 0.5 && scaleDistance < 0.002) {
      cameraRef.current = target;
      layerElement.setAttribute("transform", formatCameraTransform(target));
      return;
    }

    const duration = 680;
    const startedAt = performance.now();
    let frame = 0;

    function tick(now: number) {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = easeCameraProgress(progress);
      const next = {
        x: from.x + (target.x - from.x) * eased,
        y: from.y + (target.y - from.y) * eased,
        scale: from.scale + (target.scale - from.scale) * eased
      };

      cameraRef.current = next;
      layerElement!.setAttribute("transform", formatCameraTransform(next));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion, target.scale, target.x, target.y]);

  return (
    <g ref={layerRef} transform={initialTransformRef.current}>
      {children}
    </g>
  );
}

export default function AtlasClient({ atlas }: AtlasClientProps) {
  const shouldReduceMotion = useReducedMotion();
  const nodeMap = useMemo(() => makeNodeMap(atlas.nodes), [atlas.nodes]);
  const sourceMap = useMemo(() => new Map(atlas.sources.map((source) => [source.id, source])), [atlas.sources]);
  const root = nodeMap.get(atlas.config.rootId)!;
  const [view, setView] = useState<AtlasView>("home");
  const [selectedId, setSelectedId] = useState(atlas.config.rootId);
  const [selectedStrandId, setSelectedStrandId] = useState<string | null>(null);
  const [pathIds, setPathIds] = useState<string[]>([atlas.config.rootId]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mode, setMode] = useState<ExplanationMode>("surface");
  const [isCompact, setIsCompact] = useState(false);
  const [viewportSize, setViewportSize] = useState<ViewportSize>({ width: 0, height: 0 });
  const historyIndexRef = useRef(0);

  const selected = nodeMap.get(selectedId) ?? root;
  const moneyEntry = nodeMap.get(atlas.config.moneyEntryId);
  const selectedStrand = selectedStrandId ? nodeMap.get(selectedStrandId) : null;
  const childNodeDistance = isCompact ? 160 : 210;
  const selectedPathIds = useMemo(() => getPathToNode(pathIds, selected.id) ?? pathIds, [pathIds, selected.id]);

  const strands = useMemo<StrandModel[]>(
    () =>
      atlas.config.mainLegIds
        .map((id, index) => {
          const node = nodeMap.get(id);
          if (!node) {
            return null;
          }

          const baseAngle = -90 + (index * 360) / atlas.config.mainLegIds.length;
          const { angle, end } = getHomeStrandPoint(id, baseAngle, atlas.config.moneyEntryId);
          const perpendicular = (angle + 90) * (Math.PI / 180);
          const satellites = [0.28, 0.52, 0.78].map((progress, satelliteIndex) => {
            const offset = ((index + satelliteIndex) % 2 === 0 ? 1 : -1) * (12 + satelliteIndex * 8);
            return {
              x: svgNumber(WORLD.center.x + (end.x - WORLD.center.x) * progress + Math.cos(perpendicular) * offset),
              y: svgNumber(WORLD.center.y + (end.y - WORLD.center.y) * progress + Math.sin(perpendicular) * offset),
              delay: index * 0.16 + satelliteIndex * 0.24
            };
          });

          return { id, node, angle, end, satellites };
        })
        .filter(isPresent),
    [atlas.config.mainLegIds, atlas.config.moneyEntryId, nodeMap]
  );

  const branchModels = useMemo<BranchModel[]>(() => {
    if (!moneyEntry) {
      return [];
    }

    return moneyEntry.childIds
      .map((id, index) => {
        const node = nodeMap.get(id);
        if (!node) {
          return null;
        }

        const angle = MONEY_BRANCH_ANGLES[id] ?? (moneyEntry.childIds.length <= 1 ? 90 : 15 + (index * 150) / (moneyEntry.childIds.length - 1));
        const branchRadius = isCompact ? 150 : WORLD.moneyBranchRadius;
        return {
          id,
          node,
          angle,
          point: polar(WORLD.moneyHub.x, WORLD.moneyHub.y, branchRadius, angle)
        };
      })
      .filter(isPresent);
  }, [isCompact, moneyEntry, nodeMap]);

  const breadcrumbs = useMemo(() => {
    const pathNodes = pathIds.map((id) => nodeMap.get(id)).filter(isAtlasNode);
    const last = pathNodes[pathNodes.length - 1];

    if (last?.id === selected.id) {
      return pathNodes;
    }

    return getCanonicalBreadcrumbIds(selected, nodeMap, atlas.config.rootId)
      .map((id) => nodeMap.get(id))
      .filter(isAtlasNode);
  }, [atlas.config.rootId, nodeMap, pathIds, selected]);

  const visibleChildNodes = useMemo(() => {
    if (view !== "node" || selected.id === atlas.config.moneyEntryId) {
      return [];
    }

    const selectedPoint = getNodePoint({ id: selected.id, moneyEntryId: atlas.config.moneyEntryId, branchModels, nodeMap, childDistance: childNodeDistance, pathIds: selectedPathIds });
    const baseAngle = getNodeAxisAngle({ id: selected.id, point: selectedPoint, moneyEntryId: atlas.config.moneyEntryId, branchModels, nodeMap, childDistance: childNodeDistance, pathIds: selectedPathIds });

    return selected.childIds
      .map((id, index) => {
        const node = nodeMap.get(id);
        if (!node) {
          return null;
        }

        const spread = selected.childIds.length <= 1 ? 0 : -36 + (index * 72) / (selected.childIds.length - 1);
        return {
          id,
          node,
          parentPoint: selectedPoint,
          point: polar(selectedPoint.x, selectedPoint.y, childNodeDistance, baseAngle + spread)
        };
      })
      .filter(isPresent);
  }, [atlas.config.moneyEntryId, branchModels, childNodeDistance, nodeMap, selected, selectedPathIds, view]);

  const targetCamera = getCamera({ view, selectedId, selectedStrandId, atlas, strands, branchModels, nodeMap, isCompact, viewport: viewportSize, childNodes: visibleChildNodes, pathIds: selectedPathIds });
  const showMoneyRegion = selectedStrandId === atlas.config.moneyEntryId || breadcrumbs.some((node) => node.id === atlas.config.moneyEntryId);
  const pathDepth = Math.max(0, selectedPathIds.length - 1);
  const detailNode = view === "node" ? selected : null;
  const selectedIsMoneyBranch = branchModels.some((branch) => branch.id === selected.id);
  const focusNode =
    view === "node" && selected.id !== atlas.config.moneyEntryId && !selectedIsMoneyBranch
      ? {
          id: selected.id,
          node: selected,
          point: getNodePoint({ id: selected.id, moneyEntryId: atlas.config.moneyEntryId, branchModels, nodeMap, childDistance: childNodeDistance, pathIds: selectedPathIds }),
          parentPoint: (() => {
            const parentId = getPathParentId(selected.id, selectedPathIds, nodeMap) ?? selected.parentIds[0];
            const parentPath = parentId ? getPathToNode(selectedPathIds, parentId) : undefined;
            return parentId ? getNodePoint({ id: parentId, moneyEntryId: atlas.config.moneyEntryId, branchModels, nodeMap, childDistance: childNodeDistance, pathIds: parentPath }) : null;
          })()
        }
      : null;
  const pendingStrand = view === "strand" && selectedStrand && selectedStrand.id !== atlas.config.moneyEntryId ? selectedStrand : null;
  const pendingStrandModel = pendingStrand ? (strands.find((strand) => strand.id === pendingStrand.id) ?? null) : null;
  const detailUsesDrawer = view === "node" && viewportSize.width <= 1100;

  const getHomeSnapshot = useCallback(
    (): AtlasSnapshot => ({
      view: "home",
      selectedId: atlas.config.rootId,
      selectedStrandId: null,
      pathIds: [atlas.config.rootId]
    }),
    [atlas.config.rootId]
  );

  const normalizeSnapshot = useCallback(
    (snapshot: AtlasSnapshot): AtlasSnapshot => {
      if (snapshot.view === "home" || snapshot.selectedId === atlas.config.rootId) {
        return getHomeSnapshot();
      }

      const target = nodeMap.get(snapshot.selectedId);
      if (!target) {
        return getHomeSnapshot();
      }

      if (snapshot.view === "strand" || atlas.config.mainLegIds.includes(snapshot.selectedId)) {
        const strandId = atlas.config.mainLegIds.includes(snapshot.selectedId) ? snapshot.selectedId : (snapshot.selectedStrandId ?? snapshot.selectedId);
        const strand = nodeMap.get(strandId);

        if (!strand || !atlas.config.mainLegIds.includes(strandId)) {
          return getHomeSnapshot();
        }

        return {
          view: "strand",
          selectedId: strandId,
          selectedStrandId: strandId,
          pathIds: [atlas.config.rootId, strandId]
        };
      }

      const canonicalPath = getCanonicalBreadcrumbIds(target, nodeMap, atlas.config.rootId);
      const strandId = canonicalPath.find((pathId) => atlas.config.mainLegIds.includes(pathId)) ?? snapshot.selectedStrandId ?? atlas.config.moneyEntryId;

      return {
        view: "node",
        selectedId: target.id,
        selectedStrandId: strandId,
        pathIds: snapshot.pathIds.includes(strandId) && snapshot.pathIds[snapshot.pathIds.length - 1] === target.id ? snapshot.pathIds : canonicalPath
      };
    },
    [atlas.config.mainLegIds, atlas.config.moneyEntryId, atlas.config.rootId, getHomeSnapshot, nodeMap]
  );

  const writeAtlasHistory = useCallback((snapshot: AtlasSnapshot, modeToWrite: Exclude<HistoryMode, "none">) => {
    if (typeof window === "undefined") {
      return;
    }

    const nextIndex = modeToWrite === "push" ? historyIndexRef.current + 1 : historyIndexRef.current;
    const url = new URL(window.location.href);
    url.hash = getAtlasHash(snapshot);
    const state: AtlasHistoryState = {
      __bitcoinAtlas: true,
      index: nextIndex,
      snapshot
    };

    window.history[modeToWrite === "push" ? "pushState" : "replaceState"](state, "", url);
    historyIndexRef.current = nextIndex;
  }, []);

  const applyAtlasSnapshot = useCallback(
    (snapshot: AtlasSnapshot, historyMode: HistoryMode = "push") => {
      const normalized = normalizeSnapshot(snapshot);

      setView(normalized.view);
      setSelectedId(normalized.selectedId);
      setSelectedStrandId(normalized.selectedStrandId);
      setPathIds(normalized.pathIds);
      setHoveredId(null);

      if (historyMode !== "none") {
        writeAtlasHistory(normalized, historyMode);
      }

      return normalized;
    },
    [normalizeSnapshot, writeAtlasHistory]
  );

  const resetToCenter = useCallback(
    (historyMode: HistoryMode = "push") => {
      applyAtlasSnapshot(getHomeSnapshot(), historyMode);
    },
    [applyAtlasSnapshot, getHomeSnapshot]
  );

  const selectStrand = useCallback(
    (id: string, historyMode: HistoryMode = "push") => {
      const node = nodeMap.get(id);
      if (!node) {
        return;
      }

      applyAtlasSnapshot(
        {
          view: "strand",
          selectedId: id,
          selectedStrandId: id,
          pathIds: [atlas.config.rootId, id]
        },
        historyMode
      );
    },
    [applyAtlasSnapshot, atlas.config.rootId, nodeMap]
  );

  const selectNode = useCallback(
    (id: string, intent: SelectIntent = "default", historyMode: HistoryMode = "push") => {
      const target = nodeMap.get(id);
      if (!target) {
        return;
      }

      if (intent === "center" || id === atlas.config.rootId) {
        resetToCenter(historyMode);
        return;
      }

      const existingIndex = pathIds.indexOf(id);
      const currentId = pathIds[pathIds.length - 1] ?? atlas.config.rootId;
      const currentNode = nodeMap.get(currentId);
      const isLocalChild = Boolean(currentNode?.childIds.includes(id) || target.parentIds.includes(currentId));
      const canonicalPath = getCanonicalBreadcrumbIds(target, nodeMap, atlas.config.rootId);
      const nextPath =
        intent !== "related" && existingIndex >= 0
          ? pathIds.slice(0, existingIndex + 1)
          : isLocalChild
            ? [...pathIds, id]
            : canonicalPath;
      const nextStrand = nextPath.find((pathId) => atlas.config.mainLegIds.includes(pathId)) ?? canonicalPath.find((pathId) => atlas.config.mainLegIds.includes(pathId)) ?? selectedStrandId ?? id;

      applyAtlasSnapshot(
        {
          view: atlas.config.mainLegIds.includes(id) ? "strand" : "node",
          selectedId: id,
          selectedStrandId: nextStrand,
          pathIds: nextPath
        },
        historyMode
      );
    },
    [applyAtlasSnapshot, atlas.config.mainLegIds, atlas.config.rootId, nodeMap, pathIds, resetToCenter, selectedStrandId]
  );

  const moveTowardBitcoin = useCallback(() => {
    const parentId = getPathParentId(selected.id, selectedPathIds, nodeMap) ?? selected.parentIds[0];

    if (!parentId) {
      resetToCenter();
      return;
    }

    selectNode(parentId, parentId === atlas.config.rootId ? "center" : "toward");
  }, [atlas.config.rootId, nodeMap, resetToCenter, selectNode, selected.id, selected.parentIds, selectedPathIds]);

  const moveBackOneView = useCallback(() => {
    if (view === "home") {
      return;
    }

    if (historyIndexRef.current > 0 && typeof window !== "undefined") {
      window.history.back();
      return;
    }

    if (view === "node") {
      const parentId = getPathParentId(selected.id, selectedPathIds, nodeMap) ?? selected.parentIds[0];

      if (parentId) {
        selectNode(parentId, parentId === atlas.config.rootId ? "center" : "toward", "replace");
        return;
      }
    }

    resetToCenter("replace");
  }, [atlas.config.rootId, nodeMap, resetToCenter, selectNode, selected.id, selected.parentIds, selectedPathIds, view]);

  useEffect(() => {
    function updateViewport() {
      setIsCompact(window.innerWidth <= 720);
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    }

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    const initialSnapshot = readAtlasSnapshotFromLocation(atlas.config.rootId) ?? getHomeSnapshot();
    applyAtlasSnapshot(initialSnapshot, "replace");

    function onPopState(event: PopStateEvent) {
      const state = event.state as AtlasHistoryState | null;
      if (state?.__bitcoinAtlas) {
        historyIndexRef.current = state.index;
        applyAtlasSnapshot(state.snapshot, "none");
        return;
      }

      historyIndexRef.current = 0;
      applyAtlasSnapshot(readAtlasSnapshotFromLocation(atlas.config.rootId) ?? getHomeSnapshot(), "none");
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [applyAtlasSnapshot, atlas.config.rootId, getHomeSnapshot]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && view !== "home") {
        moveBackOneView();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [moveBackOneView, view]);

  return (
    <main className="atlas-continuous-page relative min-h-screen overflow-hidden">
      <Link
        href="/about"
        className="absolute right-5 top-5 z-30 rounded-full border border-white/[0.06] bg-black/10 px-3 py-1.5 text-xs text-white/34 backdrop-blur transition hover:border-white/15 hover:text-white/68 focus-visible:text-white/80"
      >
        About
      </Link>

      <div className="absolute inset-0">
        <svg className="h-full w-full" viewBox={`0 0 ${WORLD.width} ${WORLD.height}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label="The Bitcoin Web atlas">
          <defs>
            <radialGradient id="bitcoinOrb" cx="50%" cy="42%" r="62%">
              <stop offset="0%" stopColor="rgba(255,232,168,0.98)" />
              <stop offset="34%" stopColor="rgba(218,143,42,0.9)" />
              <stop offset="72%" stopColor="rgba(130,74,23,0.42)" />
              <stop offset="100%" stopColor="rgba(35,22,12,0.08)" />
            </radialGradient>
            <radialGradient id="orbHaze" cx="50%" cy="50%" r="58%">
              <stop offset="0%" stopColor="rgba(232,168,70,0.32)" />
              <stop offset="48%" stopColor="rgba(217,127,38,0.12)" />
              <stop offset="100%" stopColor="rgba(217,127,38,0)" />
            </radialGradient>
            <radialGradient id="orbInnerFire" cx="44%" cy="38%" r="64%">
              <stop offset="0%" stopColor="rgba(255,246,197,0.75)" />
              <stop offset="30%" stopColor="rgba(246,182,75,0.38)" />
              <stop offset="66%" stopColor="rgba(140,73,19,0.1)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
            <radialGradient id="orbGlass" cx="38%" cy="28%" r="48%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.34)" />
              <stop offset="34%" stopColor="rgba(255,228,168,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <filter id="continuousSoftGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width={WORLD.width} height={WORLD.height} fill="transparent" />

          <CameraLayer target={targetCamera} reduceMotion={Boolean(shouldReduceMotion)}>
            <BackgroundWeb strands={strands} view={view} />

            <g pointerEvents={view === "home" ? "auto" : "none"} aria-hidden={view === "home" ? undefined : true}>
              {strands.map((strand) => (
                <MainStrand
                  key={strand.id}
                  strand={strand}
                  active={hoveredId === strand.id || selectedStrandId === strand.id}
                  labelVisible={hoveredId === strand.id}
                  dimmed={Boolean((hoveredId || selectedStrandId) && hoveredId !== strand.id && selectedStrandId !== strand.id)}
                  selected={selectedStrandId === strand.id}
                  view={view}
                  compact={isCompact}
                  reduceMotion={Boolean(shouldReduceMotion)}
                  onHoverChange={setHoveredId}
                  onSelect={selectStrand}
                />
              ))}
            </g>

            <BitcoinOrb
              active={view === "home"}
              view={view}
              reduceMotion={Boolean(shouldReduceMotion)}
              onSelect={resetToCenter}
            />

            {pendingStrandModel ? <ComingSoonMarker strand={pendingStrandModel} reduceMotion={Boolean(shouldReduceMotion)} /> : null}

            <MoneyRegion
              visible={showMoneyRegion}
              view={view}
              activeId={selected.id}
              pathIds={selectedPathIds}
              branchModels={branchModels}
              childNodes={visibleChildNodes}
              focusNode={focusNode}
              reduceMotion={Boolean(shouldReduceMotion)}
              onSelectNode={selectNode}
            />
          </CameraLayer>
        </svg>
      </div>

      <div className="sr-only">
        <h1>The Bitcoin Web</h1>
        <p>{root.summary}</p>
      </div>

      <AnimatePresence>
        {view !== "home" ? (
          <motion.div
            key="atlas-overlay"
            className="pointer-events-none absolute inset-x-4 top-4 z-20 flex flex-col gap-3 pr-20 sm:inset-x-6 lg:inset-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: shouldReduceMotion ? 0.12 : 0.28 }}
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-pewter">
              {breadcrumbs.map((node, index) => (
                <span key={`${node.id}-${index}`} className="flex items-center gap-2">
                  {node.id === selected.id ? (
                    <span className="rounded-full border border-gold/30 bg-black/20 px-2.5 py-1 text-gold backdrop-blur">{getNodeLabel(node)}</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => selectNode(node.id, index === 0 ? "center" : "toward")}
                      className="pointer-events-auto rounded-full border border-white/[0.08] bg-black/20 px-2.5 py-1 backdrop-blur transition hover:border-gold/35 hover:text-vellum"
                    >
                      {getNodeLabel(node)}
                    </button>
                  )}
                  {index < breadcrumbs.length - 1 ? <span className="text-white/25">&rarr;</span> : null}
                </span>
              ))}
              <span className="rounded-full border border-white/[0.08] bg-black/20 px-2.5 py-1 uppercase tracking-[0.16em] backdrop-blur">Path depth {pathDepth}</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {view !== "home" ? (
          <motion.div
            key="return-controls"
            className="fixed left-4 z-40 flex items-center gap-2 sm:left-5"
            style={{ bottom: detailUsesDrawer ? "calc(min(38vh, 24rem) + 1.5rem + env(safe-area-inset-bottom))" : "calc(1.25rem + env(safe-area-inset-bottom))" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: shouldReduceMotion ? 0.12 : 0.25 }}
          >
            <button
              type="button"
              onClick={moveBackOneView}
              className="rounded-full border border-white/[0.08] bg-black/32 px-3 py-1.5 text-xs text-vellum/72 shadow-[0_10px_36px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:border-gold/35 hover:text-gold focus-visible:text-gold"
            >
              Back one level
            </button>
            <button
              type="button"
              onClick={() => resetToCenter()}
              className="rounded-full border border-gold/15 bg-black/32 px-3 py-1.5 text-xs text-gold/68 shadow-[0_10px_36px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:border-gold/38 hover:text-gold focus-visible:text-gold"
            >
              Centre
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {detailNode ? (
          <DetailPanel
            key={detailNode.id}
            node={detailNode}
            selectedStrand={selectedStrand}
            mode={mode}
            onModeChange={setMode}
            nodeMap={nodeMap}
            sourceMap={sourceMap}
            onSelectNode={selectNode}
            onMoveTowardBitcoin={moveTowardBitcoin}
            onReset={resetToCenter}
            reduceMotion={Boolean(shouldReduceMotion)}
          />
        ) : null}
      </AnimatePresence>
    </main>
  );
}

function BackgroundWeb({ strands, view }: { strands: StrandModel[]; view: AtlasView }) {
  const outerPoints = strands.map((strand) => polar(WORLD.center.x, WORLD.center.y, 330, strand.angle));
  const innerPoints = strands.map((strand) => polar(WORLD.center.x, WORLD.center.y, 205, strand.angle));
  const crossPoints = strands.map((strand) => polar(WORLD.center.x, WORLD.center.y, 265, strand.angle + 7));
  const opacity = view === "home" ? 0.42 : view === "strand" ? 0.14 : 0.08;

  return (
    <motion.g animate={{ opacity }} transition={{ duration: 0.35 }} pointerEvents="none" aria-hidden="true">
      {outerPoints.map((point, index) => {
        const next = outerPoints[(index + 1) % outerPoints.length];
        return (
          <path
            key={`outer-${index}`}
            d={curvePath(point, next, index % 2 === 0 ? 34 : -24)}
            fill="none"
            stroke="rgba(156,174,188,0.15)"
            strokeWidth={index % 3 === 0 ? 0.9 : 0.55}
          />
        );
      })}
      {innerPoints.map((point, index) => {
        const next = innerPoints[(index + 1) % innerPoints.length];
        return (
          <path
            key={`inner-${index}`}
            d={curvePath(point, next, index % 2 === 0 ? -20 : 18)}
            fill="none"
            stroke="rgba(229,218,199,0.075)"
            strokeWidth="0.55"
          />
        );
      })}
      {crossPoints.map((point, index) => {
        const target = crossPoints[(index + 2) % crossPoints.length];
        return (
          <path
            key={`cross-${index}`}
            d={curvePath(point, target, index % 2 === 0 ? 46 : -38)}
            fill="none"
            stroke="rgba(129,153,171,0.06)"
            strokeWidth="0.5"
            strokeDasharray={index % 2 === 0 ? "3 12" : "1 10"}
          />
        );
      })}
      {strands.flatMap((strand, strandIndex) =>
        strand.satellites.map((satellite, satelliteIndex) => (
          <circle
            key={`dim-${strand.id}-${satelliteIndex}`}
            cx={svgNumber(satellite.x + (satelliteIndex - 1) * 18)}
            cy={svgNumber(satellite.y + (strandIndex % 2 === 0 ? 12 : -10))}
            r={satelliteIndex === 1 ? 1.9 : 1.2}
            fill="rgba(178,196,209,0.16)"
          />
        ))
      )}
    </motion.g>
  );
}

function MainStrand({
  strand,
  active,
  labelVisible,
  dimmed,
  selected,
  view,
  compact,
  reduceMotion,
  onHoverChange,
  onSelect
}: {
  strand: StrandModel;
  active: boolean;
  labelVisible: boolean;
  dimmed: boolean;
  selected: boolean;
  view: AtlasView;
  compact: boolean;
  reduceMotion: boolean;
  onHoverChange: (id: string | null) => void;
  onSelect: (id: string) => void;
}) {
  const isHome = view === "home";
  const strandOpacity = isHome ? (active ? 0.9 : dimmed ? 0.12 : 0.32) : selected ? (view === "strand" ? 0.12 : 0.06) : 0.025;
  const strandStroke = active && isHome ? "rgba(235,169,62,0.84)" : selected ? "rgba(232,168,72,0.24)" : "rgba(158,178,192,0.16)";
  const bend = strand.id === "bitcoin-as-money" ? -18 : Math.sin((strand.angle * Math.PI) / 180) * 22;
  const path = curvePath(WORLD.center, strand.end, bend);
  const endpointGlowRadius = compact ? 34 : 30;
  const endpointVisibleRadius = active ? 4.4 : 2.8;

  return (
    <g
      role={isHome ? "button" : undefined}
      tabIndex={isHome ? 0 : -1}
      aria-label={isHome ? `Enter ${getStrandLabel(strand.node)} strand` : undefined}
      aria-pressed={isHome ? selected : undefined}
      aria-hidden={isHome ? undefined : true}
      pointerEvents={isHome ? "auto" : "none"}
      onMouseEnter={isHome ? () => onHoverChange(strand.id) : undefined}
      onMouseLeave={isHome ? () => onHoverChange(null) : undefined}
      onFocus={isHome ? () => onHoverChange(strand.id) : undefined}
      onBlur={isHome ? () => onHoverChange(null) : undefined}
      onMouseDown={isHome ? (event) => event.preventDefault() : undefined}
      onClick={isHome ? () => onSelect(strand.id) : undefined}
      onKeyDown={
        isHome
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(strand.id);
              }
            }
          : undefined
      }
      className={cx(isHome && "cursor-pointer", "outline-none")}
    >
      <motion.path
        d={path}
        fill="none"
        stroke={strandStroke}
        strokeWidth={active ? 1.6 : 0.82}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: strandOpacity }}
        transition={{ duration: reduceMotion ? 0.1 : 0.9 }}
      />
      <path d={path} fill="none" stroke="rgba(255,255,255,0.001)" strokeWidth={compact ? 78 : 72} pointerEvents={isHome ? "stroke" : "none"} />

      {strand.satellites.map((satellite, satelliteIndex) => (
        <motion.circle
          key={`${strand.id}-${satelliteIndex}`}
          cx={svgNumber(satellite.x)}
          cy={svgNumber(satellite.y)}
          r={active ? 3.2 : 2.15}
          fill={active ? "rgba(239,184,87,0.78)" : "rgba(187,205,217,0.34)"}
          animate={
            reduceMotion
              ? { opacity: isHome ? (dimmed ? 0.12 : active ? 0.88 : 0.34) : selected ? 0.12 : 0.025 }
              : isHome
                ? {
                    opacity: dimmed ? 0.12 : active ? [0.6, 0.95, 0.6] : [0.22, 0.42, 0.22],
                    scale: active ? [1, 1.18, 1] : [1, 1.08, 1]
                  }
                : {
                    opacity: selected ? 0.12 : 0.025,
                    scale: 1
                  }
          }
          transition={{ duration: 4.6, delay: satellite.delay, repeat: !reduceMotion && isHome ? Infinity : 0, ease: "easeInOut" }}
        />
      ))}

      {isHome ? (
        <>
          <motion.circle
            cx={svgNumber(strand.end.x)}
            cy={svgNumber(strand.end.y)}
            r={endpointGlowRadius}
            fill={active ? "rgba(232,168,72,0.12)" : "rgba(232,168,72,0.025)"}
            stroke={active ? "rgba(232,168,72,0.28)" : "rgba(218,230,239,0.055)"}
            animate={reduceMotion ? { opacity: active ? 0.86 : 0.42 } : { opacity: active ? [0.62, 0.95, 0.62] : [0.2, 0.38, 0.2] }}
            transition={{ duration: 4.8, repeat: !reduceMotion && isHome ? Infinity : 0, ease: "easeInOut" }}
          />
          <circle cx={svgNumber(strand.end.x)} cy={svgNumber(strand.end.y)} r={endpointVisibleRadius} fill={active ? "rgba(239,184,87,0.88)" : "rgba(196,211,222,0.34)"} />
          <circle cx={svgNumber(strand.end.x)} cy={svgNumber(strand.end.y)} r={compact ? 34 : 30} fill="rgba(255,255,255,0.001)" />
        </>
      ) : null}

      {isHome ? (
        <StrandLabel
          strand={strand}
          active={active}
          dimmed={dimmed}
          actionVisible={labelVisible}
          compact={compact}
          onHoverChange={onHoverChange}
          onSelect={onSelect}
        />
      ) : null}
    </g>
  );
}

function BitcoinOrb({
  active,
  view,
  reduceMotion,
  onSelect
}: {
  active: boolean;
  view: AtlasView;
  reduceMotion: boolean;
  onSelect: () => void;
}) {
  const originOpacity = view === "home" ? 1 : view === "strand" ? 0.1 : 0.08;
  const isInteractive = view === "home";

  return (
    <motion.g
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : -1}
      aria-label={isInteractive ? "Bitcoin centre" : undefined}
      aria-hidden={isInteractive ? undefined : true}
      animate={{ opacity: originOpacity }}
      transition={{ duration: reduceMotion ? 0.12 : 0.42 }}
      onClick={isInteractive ? onSelect : undefined}
      onKeyDown={
        isInteractive
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect();
              }
            }
          : undefined
      }
      pointerEvents={isInteractive ? "auto" : "none"}
      className={cx(isInteractive && "cursor-pointer", "outline-none")}
    >
      <g filter="url(#continuousSoftGlow)" pointerEvents="none">
        <motion.circle
          cx={WORLD.center.x}
          cy={WORLD.center.y}
          r="185"
          fill="url(#orbHaze)"
          animate={reduceMotion ? { opacity: active ? 0.72 : 0.42 } : { opacity: active ? [0.45, 0.78, 0.45] : 0.42, scale: active ? [0.96, 1.04, 0.96] : 0.86 }}
          transition={{ duration: 6.2, repeat: !reduceMotion && active ? Infinity : 0, ease: "easeInOut" }}
          style={{ transformOrigin: formatTransformOrigin(WORLD.center) }}
        />
        <motion.circle
          cx={WORLD.center.x}
          cy={WORLD.center.y}
          r="150"
          fill="none"
          stroke="rgba(255,205,116,0.1)"
          strokeWidth="1"
          animate={reduceMotion ? { opacity: 0.18 } : { opacity: active ? [0.08, 0.28, 0.08] : 0.07, scale: active ? [0.92, 1.12, 0.92] : 0.86 }}
          transition={{ duration: 7.4, repeat: !reduceMotion && active ? Infinity : 0, ease: "easeInOut" }}
          style={{ transformOrigin: formatTransformOrigin(WORLD.center) }}
        />
        <motion.circle
          cx={WORLD.center.x}
          cy={WORLD.center.y}
          r="124"
          fill="none"
          stroke="rgba(255,226,164,0.12)"
          strokeWidth="0.8"
          animate={reduceMotion ? { opacity: 0.2 } : { opacity: active ? [0.1, 0.32, 0.1] : 0.08, scale: active ? [1.04, 0.92, 1.04] : 0.9 }}
          transition={{ duration: 5.8, repeat: !reduceMotion && active ? Infinity : 0, ease: "easeInOut" }}
          style={{ transformOrigin: formatTransformOrigin(WORLD.center) }}
        />
        <motion.circle
          cx={WORLD.center.x}
          cy={WORLD.center.y}
          r="86"
          fill="url(#bitcoinOrb)"
          stroke="rgba(255,209,117,0.52)"
          strokeWidth="1.4"
          animate={reduceMotion ? { scale: 1 } : { scale: active ? [1, 1.035, 1] : 0.9 }}
          transition={{ duration: 4.8, repeat: !reduceMotion && active ? Infinity : 0, ease: "easeInOut" }}
          style={{ transformOrigin: formatTransformOrigin(WORLD.center) }}
        />
        <circle cx={WORLD.center.x} cy={WORLD.center.y} r="78" fill="url(#orbInnerFire)" opacity="0.88" />
        <circle cx={WORLD.center.x - 15} cy={WORLD.center.y - 18} r="48" fill="url(#orbGlass)" opacity="0.72" />
        <circle cx={WORLD.center.x} cy={WORLD.center.y} r="104" fill="none" stroke="rgba(255,196,93,0.16)" strokeWidth="1" />
        <circle cx={WORLD.center.x} cy={WORLD.center.y} r="132" fill="none" stroke="rgba(255,196,93,0.08)" strokeWidth="0.8" />
        <text x={WORLD.center.x + 1.8} y={WORLD.center.y + 26.5} textAnchor="middle" className="home-bitcoin-symbol-glow" aria-hidden="true">
          ₿
        </text>
        <text x={WORLD.center.x} y={WORLD.center.y + 25} textAnchor="middle" className="home-bitcoin-symbol" aria-hidden="true">
          ₿
        </text>
      </g>
      <circle cx={WORLD.center.x} cy={WORLD.center.y} r="132" fill="rgba(255,255,255,0.001)" />
    </motion.g>
  );
}

function ComingSoonMarker({ strand, reduceMotion }: { strand: StrandModel; reduceMotion: boolean }) {
  const angle = (strand.angle * Math.PI) / 180;
  const width = strand.id === "government-power" || strand.id === "philosophy-time" ? 172 : 142;
  const height = 58;
  const anchor = svgPoint({
    x: strand.end.x + Math.cos(angle) * 58,
    y: strand.end.y + Math.sin(angle) * 58
  });
  const x = svgNumber(anchor.x - width / 2);
  const y = svgNumber(anchor.y - height / 2);

  return (
    <motion.g
      pointerEvents="none"
      aria-hidden="true"
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.28 }}
      style={{ transformOrigin: formatTransformOrigin(anchor) }}
    >
      <circle cx={svgNumber(strand.end.x)} cy={svgNumber(strand.end.y)} r="32" fill="rgba(232,168,72,0.08)" stroke="rgba(232,168,72,0.24)" strokeWidth="0.8" />
      <circle cx={svgNumber(strand.end.x)} cy={svgNumber(strand.end.y)} r="4.5" fill="rgba(239,184,87,0.82)" />
      <rect x={x} y={y} width={width} height={height} rx="8" fill="rgba(5,8,15,0.78)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x={svgNumber(anchor.x)} y={svgNumber(anchor.y - 6)} textAnchor="middle" className="coming-soon-title">
        {getStrandLabel(strand.node)}
      </text>
      <text x={svgNumber(anchor.x)} y={svgNumber(anchor.y + 14)} textAnchor="middle" className="coming-soon-kicker">
        Coming soon
      </text>
    </motion.g>
  );
}

function MoneyRegion({
  visible,
  view,
  activeId,
  pathIds,
  branchModels,
  childNodes,
  focusNode,
  reduceMotion,
  onSelectNode
}: {
  visible: boolean;
  view: AtlasView;
  activeId: string;
  pathIds: string[];
  branchModels: BranchModel[];
  childNodes: Array<{ id: string; node: AtlasNode; parentPoint: Point; point: Point }>;
  focusNode: { id: string; node: AtlasNode; point: Point; parentPoint: Point | null } | null;
  reduceMotion: boolean;
  onSelectNode: (id: string, intent?: SelectIntent) => void;
}) {
  const isNodeView = view === "node";
  const activeBranchIsSelected = branchModels.some((branch) => branch.id === activeId);
  const childSourceRadius = activeBranchIsSelected ? NODE_RADIUS.branch : NODE_RADIUS.focus;
  const quietOpacity = isNodeView ? 0.1 : 1;

  return (
    <motion.g
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.42 }}
      pointerEvents={visible ? "auto" : "none"}
      aria-hidden={!visible}
    >
      <motion.path
        d={connectorPath(WORLD.center, WORLD.moneyHub, 132, NODE_RADIUS.moneyHub)}
        fill="none"
        stroke="rgba(232,168,72,0.46)"
        strokeWidth="1.2"
        animate={{ opacity: isNodeView ? 0.14 : 0.52 }}
        transition={{ duration: 0.3 }}
        pointerEvents="none"
      />

      {branchModels.map((branch) => {
        const branchActive = activeId === branch.id || pathIds.includes(branch.id);
        const branchQuiet = isNodeView && !branchActive;
        const opacity = branchQuiet ? quietOpacity : 1;

        return (
          <motion.g key={`${branch.id}-line`} animate={{ opacity }} transition={{ duration: 0.28 }} pointerEvents="none">
            <path
              d={connectorPath(WORLD.moneyHub, branch.point, NODE_RADIUS.moneyHub, NODE_RADIUS.branch, branch.angle < 90 ? 10 : -10)}
              fill="none"
              stroke={branchActive ? "rgba(235,169,62,0.78)" : "rgba(164,184,198,0.28)"}
              strokeWidth={branchActive ? 1.5 : 0.85}
            />
          </motion.g>
        );
      })}

      {focusNode ? (
        <g pointerEvents="none">
          {focusNode.parentPoint ? (
            <path
              d={connectorPath(focusNode.parentPoint, focusNode.point, NODE_RADIUS.branch, NODE_RADIUS.focus)}
              fill="none"
              stroke="rgba(235,169,62,0.52)"
              strokeWidth="1.1"
            />
          ) : null}
        </g>
      ) : null}

      {childNodes.map((child) => {
        return (
          <g key={`${child.id}-line`} pointerEvents="none">
            <path
              d={connectorPath(child.parentPoint, child.point, childSourceRadius, NODE_RADIUS.child)}
              fill="none"
              stroke="rgba(235,169,62,0.34)"
              strokeWidth="0.9"
            />
          </g>
        );
      })}

      <AtlasNodeButton
        node={{ title: "Bitcoin as Money", label: "Money" }}
        point={WORLD.moneyHub}
        active={activeId === "bitcoin-as-money"}
        opacity={isNodeView ? 0.22 : 1}
        radius={NODE_RADIUS.moneyHub}
        interactive={visible}
        onSelect={() => onSelectNode("bitcoin-as-money", "toward")}
      />

      {branchModels.map((branch) => {
        const branchActive = activeId === branch.id || pathIds.includes(branch.id);
        const branchQuiet = isNodeView && !branchActive;
        const opacity = branchQuiet ? quietOpacity : 1;

        return (
          <AtlasNodeButton
            key={`${branch.id}-node`}
            node={{ title: branch.node.title, label: getNodeLabel(branch.node) }}
            point={branch.point}
            active={branchActive}
            opacity={opacity}
            radius={NODE_RADIUS.branch}
            interactive={visible}
            onSelect={() => onSelectNode(branch.id, "deeper")}
          />
        );
      })}

      {focusNode ? (
        <AtlasNodeButton node={{ title: focusNode.node.title, label: getNodeLabel(focusNode.node) }} point={focusNode.point} active radius={NODE_RADIUS.focus} interactive={visible} onSelect={() => onSelectNode(focusNode.id, "deeper")} />
      ) : null}

      {childNodes.map((child) => (
        <AtlasNodeButton
          key={`${child.id}-node`}
          node={{ title: child.node.title, label: getNodeLabel(child.node) }}
          point={child.point}
          active={activeId === child.id}
          radius={NODE_RADIUS.child}
          interactive={visible}
          onSelect={() => onSelectNode(child.id, "deeper")}
        />
      ))}
    </motion.g>
  );
}

function AtlasNodeButton({
  node,
  point,
  active,
  opacity = 1,
  radius = 42,
  interactive = true,
  onSelect
}: {
  node: { title: string; label: string };
  point: Point;
  active: boolean;
  opacity?: number;
  radius?: number;
  interactive?: boolean;
  onSelect: () => void;
}) {
  const [isEngaged, setIsEngaged] = useState(false);
  const labelWidth = Math.max(78, radius * 1.78);
  const labelHeight = Math.max(38, radius * 1.08);
  const highlighted = active || (interactive && isEngaged);
  const displayOpacity = highlighted ? Math.max(opacity, 0.86) : opacity;

  return (
    <motion.g
      role="button"
      tabIndex={interactive ? 0 : -1}
      aria-label={node.title}
      aria-pressed={active}
      animate={{ opacity: displayOpacity }}
      transition={{ duration: 0.26 }}
      onMouseEnter={() => {
        if (interactive) {
          setIsEngaged(true);
        }
      }}
      onMouseLeave={() => setIsEngaged(false)}
      onFocus={() => {
        if (interactive) {
          setIsEngaged(true);
        }
      }}
      onBlur={() => setIsEngaged(false)}
      onClick={() => {
        if (interactive) {
          onSelect();
        }
      }}
      onKeyDown={(event) => {
        if (interactive && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onSelect();
        }
      }}
      className={cx(interactive && "cursor-pointer", "outline-none")}
      pointerEvents={interactive ? "auto" : "none"}
    >
      <motion.circle
        cx={svgNumber(point.x)}
        cy={svgNumber(point.y)}
        animate={{
          r: highlighted ? radius + 16 : radius + 12,
          fill: highlighted ? "rgba(232,168,72,0.16)" : "rgba(255,255,255,0.026)",
          stroke: highlighted ? "rgba(232,168,72,0.46)" : "rgba(255,255,255,0.08)"
        }}
        transition={{ duration: 0.18 }}
      />
      <motion.circle
        cx={svgNumber(point.x)}
        cy={svgNumber(point.y)}
        animate={{
          r: highlighted ? radius + 1.5 : radius,
          stroke: highlighted ? "rgba(232,168,72,0.92)" : "rgba(214,225,234,0.18)",
          strokeWidth: highlighted ? 1.8 : 1
        }}
        fill="rgba(5,8,15,0.94)"
        transition={{ duration: 0.18 }}
      />
      <foreignObject x={svgNumber(point.x - labelWidth / 2)} y={svgNumber(point.y - labelHeight / 2)} width={labelWidth} height={labelHeight} pointerEvents="none">
        <div className="continuous-node-label">{node.label}</div>
      </foreignObject>
      <circle cx={svgNumber(point.x)} cy={svgNumber(point.y)} r={Math.max(44, radius + 18)} fill="rgba(255,255,255,0.001)" />
    </motion.g>
  );
}

function FormattedText({ text }: { text?: string }) {
  if (!text) {
    return null;
  }

  const blocks = text
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <>
      {blocks.map((block, index) => {
        const lines = block
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);
        const isList = lines.length > 0 && lines.every((line) => line.startsWith("- ") || line.startsWith("\u2022 "));

        if (isList) {
          return (
            <ul key={index} className="list-disc space-y-1 pl-5">
              {lines.map((line, lineIndex) => (
                <li key={`${index}-${lineIndex}`}>{line.replace(/^[-\u2022]\s*/, "")}</li>
              ))}
            </ul>
          );
        }

        return <p key={index}>{block}</p>;
      })}
    </>
  );
}

function SourceList({ sources }: { sources: AtlasSource[] }) {
  if (!sources.length) {
    return <p>Sources are being assembled for this draft.</p>;
  }

  return (
    <div className="border-t border-white/10 pt-3">
      <h3 className="text-xs uppercase tracking-[0.2em] text-gold/70">Linked sources</h3>
      <div className="mt-3 grid gap-3">
        {sources.map((source) => {
          const meta = [source.author, source.year, source.publisher].filter(isPresent).join(" - ");

          return (
            <article key={source.id} className="rounded-md border border-white/10 bg-black/10 p-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h4 className="text-sm font-medium leading-5 text-vellum">{source.title}</h4>
                <span className="rounded-full border border-gold/25 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-gold/75">{source.type}</span>
              </div>
              {meta ? <p className="mt-1 text-xs leading-5 text-pewter">{meta}</p> : null}
              {source.note ? <p className="mt-2 text-xs leading-5 text-[#cfc7b8]">{source.note}</p> : null}
              {source.url ? (
                <a className="mt-2 inline-flex text-xs text-gold/80 transition hover:text-gold" href={source.url} target="_blank" rel="noreferrer">
                  Open source
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}

function DetailPanel({
  node,
  selectedStrand,
  mode,
  onModeChange,
  nodeMap,
  sourceMap,
  onSelectNode,
  onMoveTowardBitcoin,
  onReset,
  reduceMotion
}: {
  node: AtlasNode;
  selectedStrand?: AtlasNode | null;
  mode: ExplanationMode;
  onModeChange: (mode: ExplanationMode) => void;
  nodeMap: Map<string, AtlasNode>;
  sourceMap: Map<string, AtlasSource>;
  onSelectNode: (id: string, intent?: SelectIntent) => void;
  onMoveTowardBitcoin: () => void;
  onReset: () => void;
  reduceMotion: boolean;
}) {
  const [previewNode, setPreviewNode] = useState<AtlasNode | null>(null);
  const parents = node.parentIds.map((id) => nodeMap.get(id)).filter(isAtlasNode);
  const children = node.childIds.map((id) => nodeMap.get(id)).filter(isAtlasNode);
  const related = node.relatedIds.map((id) => nodeMap.get(id)).filter(isAtlasNode);
  const sources = (node.sourceIds ?? []).map((id) => sourceMap.get(id)).filter(isAtlasSource);

  useEffect(() => {
    setPreviewNode(null);
  }, [node.id]);

  useEffect(() => {
    if (!previewNode) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        setPreviewNode(null);
      }
    }

    window.addEventListener("keydown", onKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", onKeyDown, { capture: true });
  }, [previewNode]);

  return (
    <motion.aside
      className="continuous-detail-panel"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.3 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-gold/70">{selectedStrand ? getNodeLabel(selectedStrand) : "Strand"}</p>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-vellum">{node.title}</h2>
        </div>
        <button type="button" onClick={onReset} className="shrink-0 whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1 text-xs text-pewter transition hover:border-gold/35 hover:text-gold">
          Centre
        </button>
      </div>

      <p className="mt-3 text-sm leading-6 text-[#cfc7b8]">{node.summary}</p>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {explanationModes.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onModeChange(item.id)}
            className={cx(
              "rounded-md border px-2 py-1.5 text-xs transition",
              mode === item.id ? "border-gold/55 bg-gold/[0.14] text-vellum" : "border-white/10 bg-white/[0.03] text-pewter hover:border-white/25 hover:text-vellum"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3 rounded-lg border border-white/10 bg-white/[0.035] p-3 text-sm leading-6 text-[#d9d1c2]">
        {mode === "studious" ? <SourceList sources={sources} /> : <FormattedText text={node[mode]} />}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <NavigationCluster title="Toward Bitcoin" nodes={parents} actionLabel="Move up" emptyLabel="Centre reached." onSelect={(id) => onSelectNode(id, "toward")} fallbackAction={onMoveTowardBitcoin} />
        <NavigationCluster title="Go deeper" nodes={children} actionLabel="Go deeper" emptyLabel="No deeper nodes here yet." onSelect={(id) => onSelectNode(id, "deeper")} />
      </div>

      <NavigationCluster
        title="Also touches"
        nodes={related}
        actionLabel="Preview"
        emptyLabel="No related notes listed."
        onSelect={(id) => {
          const target = nodeMap.get(id);
          if (target) {
            setPreviewNode(target);
          }
        }}
        related
      />

      <AnimatePresence>
        {previewNode ? (
          <RelatedConnectionPreview
            key={previewNode.id}
            node={previewNode}
            reduceMotion={reduceMotion}
            onClose={() => setPreviewNode(null)}
          />
        ) : null}
      </AnimatePresence>
    </motion.aside>
  );
}

function RelatedConnectionPreview({
  node,
  reduceMotion,
  onClose
}: {
  node: AtlasNode;
  reduceMotion: boolean;
  onClose: () => void;
}) {
  return (
    <motion.section
      className="mt-3 rounded-lg border border-verdigris/25 bg-verdigris/[0.075] p-3"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.22 }}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-verdigris">Related connection</p>
      <h3 className="mt-2 text-sm font-medium text-vellum">{node.title}</h3>
      <p className="mt-2 text-xs leading-5 text-[#cfc7b8]">{node.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-white/10 bg-black/10 px-2.5 py-1.5 text-xs text-pewter transition hover:border-white/25 hover:text-vellum"
        >
          Stay here
        </button>
      </div>
    </motion.section>
  );
}

function NavigationCluster({
  title,
  nodes,
  actionLabel,
  emptyLabel,
  onSelect,
  fallbackAction,
  related = false
}: {
  title: string;
  nodes: AtlasNode[];
  actionLabel: string;
  emptyLabel: string;
  onSelect: (id: string) => void;
  fallbackAction?: () => void;
  related?: boolean;
}) {
  return (
    <section className={cx("rounded-lg border p-3", related ? "border-verdigris/20 bg-verdigris/[0.055]" : "border-white/10 bg-black/10")}>
      <h3 className={cx("text-xs uppercase tracking-[0.2em]", related ? "text-verdigris" : "text-pewter")}>{title}</h3>
      {nodes.length ? (
        <div className="mt-2 grid gap-2">
          {nodes.map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() => onSelect(node.id)}
              className="group rounded-md border border-white/10 bg-white/[0.03] p-2 text-left transition hover:border-gold/30 hover:bg-white/[0.055]"
            >
              <span className="flex items-center justify-between gap-3">
                <span className="text-xs text-vellum">{node.title}</span>
                <span className="shrink-0 text-[11px] text-gold/65 group-hover:text-gold">{actionLabel}</span>
              </span>
            </button>
          ))}
        </div>
      ) : (
        <button
          type="button"
          onClick={fallbackAction}
          disabled={!fallbackAction}
          className="mt-2 w-full rounded-md border border-white/10 bg-white/[0.025] p-2 text-left text-xs text-pewter disabled:cursor-default"
        >
          {emptyLabel}
        </button>
      )}
    </section>
  );
}
