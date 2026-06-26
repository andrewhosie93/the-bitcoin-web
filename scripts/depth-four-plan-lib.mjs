import fs from "node:fs";

export const PLAN_PATH = "docs/editorial/depth-four-plan.json";

export const EDGE_TYPES = new Set([
  "Foundation",
  "Mechanism",
  "Predecessor",
  "Implementation",
  "Institution",
  "Example",
]);

export const TEMPORAL_KINDS = new Set([
  "event",
  "period",
  "persistent",
  "recurring",
  "atemporal",
]);

export const TIME_CONFIDENCE = new Set([
  "High",
  "Medium",
  "Low",
  "Contested",
  "Not applicable",
]);

export const SHARED_STATUSES = new Set([
  "No",
  "Approved shared candidate",
  "Also touches only",
]);

export const PLAN_STATUSES = new Set([
  "draft-not-approved-for-live-implementation",
  "approved-for-batch-implementation",
]);

export const REVIEW_STATUSES = new Set([
  "provisional",
  "reviewed-for-batch",
  "approved-for-implementation",
]);

export const BATCH_GATE_STATUSES = new Set([
  "blocked-pending-human-review",
  "ready-for-implementation",
  "implemented",
]);

export const REVIEWED_STATUSES = new Set([
  "reviewed-for-batch",
  "approved-for-implementation",
]);

const MAX_DIRECT_CHILDREN = 6;

export function readPlan(path = PLAN_PATH) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

export function titleCaseTemporalKind(kind) {
  return kind ? kind[0].toUpperCase() + kind.slice(1) : "";
}

export function markdownCell(value) {
  if (Array.isArray(value)) return markdownCell(value.join("; "));
  if (value === undefined || value === null || value === "") return "";
  return String(value).replace(/\n/g, " ").replace(/\|/g, "\\|");
}

export function approvedSharedCandidates(plan) {
  return plan.approvedSharedCandidates ?? [];
}

export function validatePlan(plan) {
  const errors = [];
  const warnings = [];

  const fail = (message) => errors.push(message);
  const warn = (message) => warnings.push(message);

  if (plan.version !== 1) fail("Plan version must be 1.");
  if (!plan.rootNodeId) fail("rootNodeId is required.");
  if (!PLAN_STATUSES.has(plan.planningStatus)) {
    fail(`Plan has invalid planningStatus "${plan.planningStatus}".`);
  }
  if (plan.planningStatus === "draft-not-approved-for-live-implementation") {
    warn("Plan status is draft-not-approved-for-live-implementation; do not use this inventory for live implementation without a batch gate.");
  }
  if (Object.hasOwn(plan, "retainedSharedNodes")) {
    fail("Use approvedSharedCandidates instead of retainedSharedNodes.");
  }
  if (Object.hasOwn(plan, "retainedSharedSummary")) {
    fail("Use sharedAccountingSummary instead of retainedSharedSummary.");
  }

  const strandIds = new Set();
  for (const strand of plan.strands ?? []) {
    if (!strand.id) fail("Every strand needs an id.");
    if (!strand.title) fail(`Strand ${strand.id ?? "(missing id)"} needs a title.`);
    if (strandIds.has(strand.id)) fail(`Duplicate strand id "${strand.id}".`);
    strandIds.add(strand.id);
  }

  const nodeIds = new Set();
  const titleToId = new Map();
  for (const node of plan.nodes ?? []) {
    if (!node.id) fail(`Node "${node.title ?? "(missing title)"}" is missing an id.`);
    if (!node.title) fail(`Node "${node.id ?? "(missing id)"}" is missing a title.`);
    if (nodeIds.has(node.id)) fail(`Duplicate node id "${node.id}".`);
    nodeIds.add(node.id);
    if (titleToId.has(node.title)) {
      fail(`Duplicate canonical title "${node.title}" on ${titleToId.get(node.title)} and ${node.id}.`);
    }
    titleToId.set(node.title, node.id);
    if (!node.type) fail(`Node "${node.id}" is missing a type.`);
    if (!REVIEW_STATUSES.has(node.reviewStatus)) {
      fail(`Node "${node.id}" has invalid reviewStatus "${node.reviewStatus}".`);
    }
    if (!TEMPORAL_KINDS.has(node.temporalKind)) {
      fail(`Node "${node.id}" has invalid temporalKind "${node.temporalKind}".`);
    }
    if (!node.broadEra) fail(`Node "${node.id}" is missing broadEra.`);
    if (!TIME_CONFIDENCE.has(node.timeConfidence)) {
      fail(`Node "${node.id}" has invalid timeConfidence "${node.timeConfidence}".`);
    }
    if (Object.hasOwn(node, "coverageDepth")) {
      fail(`Node "${node.id}" must not store coverageDepth; it is calculated from navigable edges.`);
    }
    if (node.temporalKind === "atemporal" && node.timeConfidence !== "Not applicable") {
      fail(`Node "${node.id}" is atemporal but has timeConfidence "${node.timeConfidence}".`);
    }
    if (["period", "event"].includes(node.temporalKind) && node.timeConfidence === "Not applicable") {
      fail(`Node "${node.id}" is ${node.temporalKind} but has Not applicable time confidence.`);
    }
    if (node.broadEra === "Atemporal / recurring concepts" && !["atemporal", "recurring"].includes(node.temporalKind)) {
      fail(`Node "${node.id}" uses the atemporal/recurring era but has temporalKind "${node.temporalKind}".`);
    }
  }

  const knownIds = new Set([plan.rootNodeId, ...nodeIds]);
  const edgeKeys = new Set();
  const directChildren = new Map();
  for (const edge of plan.edges ?? []) {
    if (!edge.id) fail("Every edge needs an id.");
    if (!knownIds.has(edge.parentId)) fail(`Edge "${edge.id}" has unknown parentId "${edge.parentId}".`);
    if (!knownIds.has(edge.childId)) fail(`Edge "${edge.id}" has unknown childId "${edge.childId}".`);
    if (edge.parentId === edge.childId) fail(`Edge "${edge.id}" points a node at itself.`);
    if (!EDGE_TYPES.has(edge.type)) fail(`Edge "${edge.id}" has invalid type "${edge.type}".`);
    if (!strandIds.has(edge.strandId)) fail(`Edge "${edge.id}" has unknown strandId "${edge.strandId}".`);
    if (!edge.rationale) fail(`Edge "${edge.id}" is missing a rationale.`);
    if (!REVIEW_STATUSES.has(edge.reviewStatus)) {
      fail(`Edge "${edge.id}" has invalid reviewStatus "${edge.reviewStatus}".`);
    }
    if (/^In the .* strand, .* follows .* as a .* relationship for planning purposes\.$/.test(edge.rationale)) {
      fail(`Edge "${edge.id}" still uses generic boilerplate rationale.`);
    }
    if (edge.rationale && edge.rationale.length < 80) {
      warn(`Edge "${edge.id}" rationale may be too thin for editorial review.`);
    }
    if (edge.type === "Institution") {
      const child = plan.nodes?.find((node) => node.id === edge.childId);
      if (child?.type !== "Institution") {
        fail(`Edge "${edge.id}" uses Institution but child "${edge.childId}" is type "${child?.type}".`);
      }
    }
    const key = `${edge.parentId}|${edge.childId}|${edge.strandId}|${edge.type}`;
    if (edgeKeys.has(key)) fail(`Duplicate edge relationship "${key}".`);
    edgeKeys.add(key);
    const children = directChildren.get(edge.parentId) ?? new Set();
    children.add(edge.childId);
    directChildren.set(edge.parentId, children);
  }

  for (const [parentId, childIds] of directChildren.entries()) {
    if (parentId === plan.rootNodeId) continue;
    if (childIds.size > MAX_DIRECT_CHILDREN) {
      fail(
        `Parent "${parentId}" has ${childIds.size} direct navigable children; introduce a hub or reparent to stay at ${MAX_DIRECT_CHILDREN} or fewer.`,
      );
    }
  }

  const depths = calculateCoverageDepths(plan);
  for (const node of plan.nodes ?? []) {
    const depth = depths.get(node.id);
    if (depth === undefined) fail(`Node "${node.id}" is not reachable from "${plan.rootNodeId}".`);
    if (depth !== undefined && depth > 4) {
      fail(`Node "${node.id}" has calculated coverage depth ${depth}, which exceeds depth four.`);
    }
  }

  const approvedShared = approvedSharedCandidates(plan);
  const approvedSharedIds = new Set(approvedShared.map((shared) => shared.nodeId));
  const placementKeys = new Set();
  for (const placement of plan.placements ?? []) {
    if (!strandIds.has(placement.strandId)) fail(`Placement has unknown strandId "${placement.strandId}".`);
    if (!nodeIds.has(placement.nodeId)) fail(`Placement has unknown nodeId "${placement.nodeId}".`);
    if (!["spine", "branch"].includes(placement.role)) {
      fail(`Placement "${placement.strandId}:${placement.nodeId}" has invalid role "${placement.role}".`);
    }
    if (!SHARED_STATUSES.has(placement.sharedStatus)) {
      fail(`Placement "${placement.strandId}:${placement.nodeId}" has invalid sharedStatus "${placement.sharedStatus}".`);
    }
    if (!REVIEW_STATUSES.has(placement.reviewStatus)) {
      fail(`Placement "${placement.strandId}:${placement.nodeId}" has invalid reviewStatus "${placement.reviewStatus}".`);
    }
    if (placement.sharedStatus === "Approved shared candidate" && !approvedSharedIds.has(placement.nodeId)) {
      fail(`Placement "${placement.strandId}:${placement.nodeId}" is marked approved shared but is not in approvedSharedCandidates.`);
    }
    if (Object.hasOwn(placement, "coverageDepth")) {
      fail(`Placement "${placement.strandId}:${placement.nodeId}" must not store coverageDepth.`);
    }
    const key = `${placement.strandId}|${placement.nodeId}`;
    if (placementKeys.has(key)) fail(`Duplicate placement "${key}".`);
    placementKeys.add(key);
    const hasContextEdge = (plan.edges ?? []).some(
      (edge) => edge.strandId === placement.strandId && edge.childId === placement.nodeId,
    );
    if (!hasContextEdge) {
      warn(`Placement "${key}" has no navigable edge in the same strand.`);
    }
  }

  for (const strand of plan.strands ?? []) {
    const depthOne = (plan.placements ?? []).filter(
      (placement) => placement.strandId === strand.id && depths.get(placement.nodeId) === 1,
    );
    if (depthOne.length !== 1) {
      fail(`Strand "${strand.id}" should have exactly one calculated depth-one placement; found ${depthOne.length}.`);
    }
    const spine = plan.historicalSpines?.[strand.id];
    if (!spine) fail(`Strand "${strand.id}" is missing a historical spine.`);
    if (spine && (!Array.isArray(spine.nodes) || spine.nodes.length === 0)) {
      fail(`Historical spine "${strand.id}" must list spine nodes.`);
    }
  }

  for (const [strandId, spine] of Object.entries(plan.historicalSpines ?? {})) {
    if (!strandIds.has(strandId)) fail(`Historical spine has unknown strandId "${strandId}".`);
    if (!REVIEW_STATUSES.has(spine.reviewStatus)) {
      fail(`Historical spine "${strandId}" has invalid reviewStatus "${spine.reviewStatus}".`);
    }
    const seen = new Set();
    for (const item of spine.nodes ?? []) {
      if (!knownIds.has(item.nodeId)) fail(`Historical spine "${strandId}" has unknown nodeId "${item.nodeId}".`);
      if (seen.has(item.nodeId)) fail(`Historical spine "${strandId}" repeats nodeId "${item.nodeId}".`);
      seen.add(item.nodeId);
      if (!item.rationale) fail(`Historical spine "${strandId}:${item.nodeId}" is missing a rationale.`);
      if (!item.risks) fail(`Historical spine "${strandId}:${item.nodeId}" is missing risks.`);
    }
  }

  for (const shared of approvedShared) {
    if (!nodeIds.has(shared.nodeId)) fail(`Approved shared candidate has unknown nodeId "${shared.nodeId}".`);
    if (!REVIEW_STATUSES.has(shared.reviewStatus)) {
      fail(`Approved shared candidate "${shared.nodeId}" has invalid reviewStatus "${shared.reviewStatus}".`);
    }
    if (!Array.isArray(shared.contexts) || shared.contexts.length < 2) {
      fail(`Approved shared candidate "${shared.nodeId}" needs at least two route contexts.`);
    }
    if (!shared.rationale) fail(`Approved shared candidate "${shared.nodeId}" is missing a rationale.`);
  }

  for (const touch of plan.alsoTouches ?? []) {
    if (!REVIEW_STATUSES.has(touch.reviewStatus)) {
      fail(`Also touches "${touch.sourceTitle} -> ${touch.targetTitle}" has invalid reviewStatus "${touch.reviewStatus}".`);
    }
    if (touch.sourceNodeId && !nodeIds.has(touch.sourceNodeId)) {
      fail(`Also touches sourceNodeId "${touch.sourceNodeId}" is not canonical.`);
    }
    if (touch.targetNodeId && !nodeIds.has(touch.targetNodeId)) {
      fail(`Also touches targetNodeId "${touch.targetNodeId}" is not canonical.`);
    }
    if (!touch.sourceNodeId || !touch.targetNodeId) {
      fail(`Also touches "${touch.sourceTitle} -> ${touch.targetTitle}" must use canonical endpoints.`);
    }
    if (!touch.sourceTitle || !touch.targetTitle) fail("Also touches entries need sourceTitle and targetTitle.");
    if (!touch.reason) fail(`Also touches "${touch.sourceTitle} -> ${touch.targetTitle}" is missing a reason.`);
    if (touch.sourceNodeId && touch.targetNodeId) {
      const hasNavigableEdge = (plan.edges ?? []).some(
        (edge) =>
          (edge.parentId === touch.sourceNodeId && edge.childId === touch.targetNodeId) ||
          (edge.parentId === touch.targetNodeId && edge.childId === touch.sourceNodeId),
      );
      if (hasNavigableEdge) {
        fail(`Also touches "${touch.sourceTitle} -> ${touch.targetTitle}" duplicates a navigable edge.`);
      }
    }
  }

  for (const batch of plan.implementationBatches ?? []) {
    if (!batch.id || !batch.title) fail("Implementation batches need id and title.");
    if (!BATCH_GATE_STATUSES.has(batch.gateStatus)) {
      fail(`Implementation batch "${batch.id ?? "(missing id)"}" has invalid gateStatus "${batch.gateStatus}".`);
    }
    if (!Array.isArray(batch.nodeIds) || batch.nodeIds.length === 0) {
      fail(`Implementation batch "${batch.id ?? "(missing id)"}" must include nodeIds.`);
    }
    for (const nodeId of batch.nodeIds ?? []) {
      if (!nodeIds.has(nodeId)) fail(`Implementation batch "${batch.id}" has unknown nodeId "${nodeId}".`);
    }
  }

  const reviewMetrics = calculateReviewMetrics(plan);
  for (const [scope, metric] of Object.entries(reviewMetrics)) {
    if (metric.provisional > 0) {
      warn(`${metric.provisional} ${scope} remain provisional.`);
    }
  }

  const batchGates = calculateBatchGates(plan);
  for (const gate of batchGates) {
    if (gate.blockerCount > 0 && ["ready-for-implementation", "implemented"].includes(gate.gateStatus)) {
      fail(`Implementation batch "${gate.id}" is marked ${gate.gateStatus} but has ${gate.blockerCount} review blockers.`);
    }
    if (gate.blockerCount === 0 && gate.gateStatus === "blocked-pending-human-review") {
      warn(`Implementation batch "${gate.id}" has no computed blockers but is still marked blocked-pending-human-review.`);
    }
    if (gate.blockerCount > 0) {
      warn(`Implementation batch "${gate.id}" is blocked by ${gate.blockerCount} unreviewed nodes, edges or contexts.`);
    }
  }

  return {
    errors,
    warnings,
    depths,
    metrics: calculateMetrics(plan, depths, reviewMetrics, batchGates),
  };
}

export function calculateCoverageDepths(plan) {
  const depths = new Map([[plan.rootNodeId, 0]]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const edge of plan.edges ?? []) {
      const parentDepth = depths.get(edge.parentId);
      if (parentDepth === undefined) continue;
      const nextDepth = parentDepth + 1;
      const currentDepth = depths.get(edge.childId);
      if (currentDepth === undefined || nextDepth < currentDepth) {
        depths.set(edge.childId, nextDepth);
        changed = true;
      }
    }
  }
  return depths;
}

export function calculateReviewMetrics(plan) {
  const metricFor = (items) => {
    const metric = { total: items.length, provisional: 0, reviewed: 0 };
    for (const item of items) {
      if (REVIEWED_STATUSES.has(item.reviewStatus)) metric.reviewed += 1;
      else metric.provisional += 1;
    }
    return metric;
  };

  return {
    nodes: metricFor(plan.nodes ?? []),
    edges: metricFor(plan.edges ?? []),
    placements: metricFor(plan.placements ?? []),
    approvedSharedCandidates: metricFor(approvedSharedCandidates(plan)),
    alsoTouches: metricFor(plan.alsoTouches ?? []),
    historicalSpines: metricFor(Object.values(plan.historicalSpines ?? {})),
  };
}

export function calculateBatchGates(plan) {
  const nodeById = new Map((plan.nodes ?? []).map((node) => [node.id, node]));
  const approvedSharedByNode = new Map(approvedSharedCandidates(plan).map((shared) => [shared.nodeId, shared]));

  return (plan.implementationBatches ?? []).map((batch) => {
    const nodeIds = new Set(batch.nodeIds ?? []);
    const nodeBlockers = (batch.nodeIds ?? [])
      .map((nodeId) => nodeById.get(nodeId))
      .filter((node) => node && !REVIEWED_STATUSES.has(node.reviewStatus))
      .map((node) => node.id);
    const edgeBlockers = (plan.edges ?? [])
      .filter((edge) => nodeIds.has(edge.childId) && !REVIEWED_STATUSES.has(edge.reviewStatus))
      .map((edge) => edge.id);
    const placementBlockers = (plan.placements ?? [])
      .filter((placement) => nodeIds.has(placement.nodeId) && !REVIEWED_STATUSES.has(placement.reviewStatus))
      .map((placement) => `${placement.strandId}:${placement.nodeId}`);
    const sharedContextBlockers = [...nodeIds]
      .map((nodeId) => approvedSharedByNode.get(nodeId))
      .filter((shared) => shared && !REVIEWED_STATUSES.has(shared.reviewStatus))
      .map((shared) => shared.nodeId);

    const blockerCount =
      nodeBlockers.length +
      edgeBlockers.length +
      placementBlockers.length +
      sharedContextBlockers.length;

    return {
      id: batch.id,
      title: batch.title,
      gateStatus: batch.gateStatus,
      nodeBlockers,
      edgeBlockers,
      placementBlockers,
      sharedContextBlockers,
      blockerCount,
      ready: blockerCount === 0 && batch.gateStatus === "ready-for-implementation",
    };
  });
}

export function calculateMetrics(plan, depths = calculateCoverageDepths(plan), reviewMetrics = calculateReviewMetrics(plan), batchGates = calculateBatchGates(plan)) {
  const byDepth = new Map();
  const byTemporalKind = new Map();
  const incomingParents = new Map();
  for (const node of plan.nodes ?? []) {
    const depth = depths.get(node.id);
    byDepth.set(depth, (byDepth.get(depth) ?? 0) + 1);
    byTemporalKind.set(node.temporalKind, (byTemporalKind.get(node.temporalKind) ?? 0) + 1);
  }

  for (const edge of plan.edges ?? []) {
    const parents = incomingParents.get(edge.childId) ?? new Set();
    parents.add(edge.parentId);
    incomingParents.set(edge.childId, parents);
  }

  const realisedMultiParentNodes = [...incomingParents.entries()]
    .filter(([, parents]) => parents.size >= 2)
    .map(([nodeId, parents]) => ({ nodeId, parentIds: [...parents].sort() }))
    .sort((a, b) => nodeTitle(plan, a.nodeId).localeCompare(nodeTitle(plan, b.nodeId)));

  const placementsByStrand = new Map();
  const placementStrandsByNode = new Map();
  for (const strand of plan.strands ?? []) {
    placementsByStrand.set(strand.id, { total: 0, byDepth: new Map() });
  }
  for (const placement of plan.placements ?? []) {
    const strand = placementsByStrand.get(placement.strandId);
    if (!strand) continue;
    const depth = depths.get(placement.nodeId);
    strand.total += 1;
    strand.byDepth.set(depth, (strand.byDepth.get(depth) ?? 0) + 1);
    const strandIds = placementStrandsByNode.get(placement.nodeId) ?? new Set();
    strandIds.add(placement.strandId);
    placementStrandsByNode.set(placement.nodeId, strandIds);
  }

  const multiStrandPlacementNodes = [...placementStrandsByNode.entries()]
    .filter(([, strandIds]) => strandIds.size >= 2)
    .map(([nodeId, strandIds]) => ({ nodeId, strandIds: [...strandIds].sort() }))
    .sort((a, b) => nodeTitle(plan, a.nodeId).localeCompare(nodeTitle(plan, b.nodeId)));

  return {
    canonicalNodes: plan.nodes?.length ?? 0,
    navigableEdges: plan.edges?.length ?? 0,
    strandPlacements: plan.placements?.length ?? 0,
    approvedSharedCandidates: approvedSharedCandidates(plan).length,
    realisedMultiParentNodes,
    multiStrandPlacementNodes,
    alsoTouches: plan.alsoTouches?.length ?? 0,
    implementationBatches: plan.implementationBatches?.length ?? 0,
    blockedImplementationBatches: batchGates.filter((gate) => gate.blockerCount > 0 || gate.gateStatus !== "ready-for-implementation").length,
    reviewMetrics,
    batchGates,
    byDepth,
    byTemporalKind,
    placementsByStrand,
  };
}

export function nodeTitle(plan, nodeId) {
  if (nodeId === plan.rootNodeId) return "Bitcoin";
  return plan.nodes.find((node) => node.id === nodeId)?.title ?? nodeId;
}
