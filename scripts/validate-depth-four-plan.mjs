import {
  PLAN_PATH,
  nodeTitle,
  readPlan,
  titleCaseTemporalKind,
  validatePlan,
} from "./depth-four-plan-lib.mjs";

const batchFlagIndex = process.argv.indexOf("--batch");
const batchId = batchFlagIndex >= 0 ? process.argv[batchFlagIndex + 1] : undefined;
const planPath = process.argv.find((arg, index) => index > 1 && arg !== "--batch" && process.argv[index - 1] !== "--batch") ?? PLAN_PATH;
const plan = readPlan(planPath);
const result = validatePlan(plan);

console.log("Depth-four planning validation");
console.log("");
console.log(`Planning status: ${plan.planningStatus}`);
console.log(`Errors: ${result.errors.length}`);
console.log(`Warnings: ${result.warnings.length}`);
console.log(`Canonical nodes: ${result.metrics.canonicalNodes}`);
console.log(`Navigable edges: ${result.metrics.navigableEdges}`);
console.log(`Strand placements: ${result.metrics.strandPlacements}`);
console.log(`Approved shared candidates: ${result.metrics.approvedSharedCandidates}`);
console.log(`Realised multi-parent nodes: ${result.metrics.realisedMultiParentNodes.length}`);
console.log(`Multi-strand placement nodes: ${result.metrics.multiStrandPlacementNodes.length}`);
console.log(`Preview-only Also touches: ${result.metrics.alsoTouches}`);
console.log(`Blocked implementation batches: ${result.metrics.blockedImplementationBatches}`);
console.log("");

console.log("Coverage depth counts");
for (const depth of [1, 2, 3, 4]) {
  console.log(`  ${depth}: ${result.metrics.byDepth.get(depth) ?? 0}`);
}

console.log("");
console.log("Temporal kind counts");
for (const kind of ["persistent", "period", "atemporal", "recurring", "event"]) {
  console.log(`  ${titleCaseTemporalKind(kind)}: ${result.metrics.byTemporalKind.get(kind) ?? 0}`);
}

console.log("");
console.log("Realised multi-parent nodes");
for (const item of result.metrics.realisedMultiParentNodes) {
  console.log(`  ${item.nodeId}: ${item.parentIds.join(", ")}`);
}

console.log("");
console.log("Multi-strand placement nodes");
for (const item of result.metrics.multiStrandPlacementNodes) {
  console.log(`  ${item.nodeId}: ${item.strandIds.join(", ")}`);
}

console.log("");
console.log("Review status counts");
for (const [scope, metric] of Object.entries(result.metrics.reviewMetrics)) {
  console.log(`  ${scope}: ${metric.reviewed} reviewed, ${metric.provisional} provisional, ${metric.total} total`);
}

console.log("");
console.log("Implementation batch gates");
for (const gate of result.metrics.batchGates) {
  console.log(`  ${gate.id}: ${gate.gateStatus}; blockers=${gate.blockerCount}; review=${gate.reviewBlockerCount}; explicit=${gate.explicitBlockers.length}`);
}

if (batchId) {
  const gate = result.metrics.batchGates.find((item) => item.id === batchId);
  console.log("");
  console.log(`Batch gate: ${batchId}`);
  if (!gate) {
    console.log("  not found");
    process.exitCode = 1;
  } else {
    console.log(`  status: ${gate.gateStatus}`);
    console.log(`  ready: ${gate.ready ? "yes" : "no"}`);
    console.log(`  blocker counts: ${gate.blockerCount} total; ${gate.reviewBlockerCount} review; ${gate.explicitBlockers.length} explicit`);
    console.log(`  node blockers: ${gate.nodeBlockers.map((nodeId) => nodeTitle(plan, nodeId)).join(", ") || "none"}`);
    console.log(`  edge blockers: ${gate.edgeBlockers.join(", ") || "none"}`);
    console.log(`  placement blockers: ${gate.placementBlockers.join(", ") || "none"}`);
    console.log(`  shared-context blockers: ${gate.sharedContextBlockers.map((nodeId) => nodeTitle(plan, nodeId)).join(", ") || "none"}`);
    if (gate.explicitBlockers.length) {
      console.log("  explicit blockers:");
      for (const blocker of gate.explicitBlockers) {
        console.log(`    - ${blocker.type}: ${blocker.item} - ${blocker.detail}`);
      }
    } else {
      console.log("  explicit blockers: none");
    }
    if (!gate.ready) process.exitCode = 1;
  }
}

if (result.warnings.length) {
  console.log("");
  for (const warning of result.warnings) console.log(`WARN ${warning}`);
}

if (result.errors.length) {
  console.log("");
  for (const error of result.errors) console.log(`ERROR ${error}`);
  process.exitCode = 1;
}
