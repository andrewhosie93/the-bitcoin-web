import { readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

function readJson(relativePath) {
  return JSON.parse(readFileSync(join(ROOT, relativePath), "utf8"));
}

function listDuplicates(values) {
  const seen = new Set();
  const duplicates = new Set();

  for (const value of values) {
    if (seen.has(value)) {
      duplicates.add(value);
    } else {
      seen.add(value);
    }
  }

  return [...duplicates];
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

const nodes = readJson("content/nodes.json");
const sources = readJson("content/sources.json");
const atlas = readJson("content/atlas.json");

const errors = [];
const warnings = [];

const nodeIds = nodes.map((node) => node.id);
const sourceIds = sources.map((source) => source.id);
const duplicateNodeIds = listDuplicates(nodeIds);
const duplicateSourceIds = listDuplicates(sourceIds);

for (const id of duplicateNodeIds) {
  errors.push(`duplicate node id "${id}"`);
}

for (const id of duplicateSourceIds) {
  errors.push(`duplicate source id "${id}"`);
}

const nodeMap = new Map(nodes.map((node) => [node.id, node]));
const sourceIdSet = new Set(sourceIds);
const referencedSourceIds = new Set();
const childParents = new Map();

for (const node of nodes) {
  const childIds = asArray(node.childIds);
  const relatedIds = asArray(node.relatedIds);
  const nodeSourceIds = asArray(node.sourceIds);

  for (const id of listDuplicates(childIds)) {
    errors.push(`node "${node.id}": duplicate child edge "${id}"`);
  }

  for (const id of listDuplicates(relatedIds)) {
    errors.push(`node "${node.id}": duplicate related edge "${id}"`);
  }

  for (const id of childIds) {
    if (!nodeMap.has(id)) {
      errors.push(`node "${node.id}": childIds references missing node "${id}"`);
      continue;
    }

    if (!childParents.has(id)) {
      childParents.set(id, []);
    }
    childParents.get(id).push(node.id);
  }

  for (const id of relatedIds) {
    if (!nodeMap.has(id)) {
      errors.push(`node "${node.id}": relatedIds references missing node "${id}"`);
    }
  }

  for (const id of nodeSourceIds) {
    referencedSourceIds.add(id);
    if (!sourceIdSet.has(id)) {
      errors.push(`node "${node.id}": sourceIds references missing source "${id}"`);
    }
  }

  if (node.status?.source === "source-needed" && nodeSourceIds.length === 0) {
    warnings.push(`node "${node.id}": status is source-needed but sourceIds is empty`);
  }
}

const moneyEntryId = atlas.moneyEntryId;
const reachableFromMoney = new Set();
const moneyStack = moneyEntryId && nodeMap.has(moneyEntryId) ? [moneyEntryId] : [];

while (moneyStack.length) {
  const id = moneyStack.pop();
  if (!id || reachableFromMoney.has(id)) {
    continue;
  }

  reachableFromMoney.add(id);

  for (const childId of asArray(nodeMap.get(id)?.childIds)) {
    if (nodeMap.has(childId)) {
      moneyStack.push(childId);
    }
  }
}

for (const node of nodes) {
  const isMoneyNode = node.id === moneyEntryId || asArray(node.legTags).includes("money");
  if (isMoneyNode && !reachableFromMoney.has(node.id)) {
    warnings.push(`node "${node.id}": Money-tagged node cannot be reached from Money hub "${moneyEntryId}"`);
  }
}

for (const source of sources) {
  if (!referencedSourceIds.has(source.id)) {
    warnings.push(`source "${source.id}": never referenced by any node`);
  }
}

const sharedChildren = [...childParents.entries()]
  .map(([id, parents]) => [id, [...new Set(parents)]])
  .filter(([, parents]) => parents.length > 1)
  .sort(([a], [b]) => a.localeCompare(b));

const visiting = new Set();
const visited = new Set();
const stack = [];
const cycleKeys = new Set();

function recordCycle(id) {
  const startIndex = stack.indexOf(id);
  const cycle = [...stack.slice(startIndex), id];
  const key = cycle.join(" -> ");

  if (!cycleKeys.has(key)) {
    cycleKeys.add(key);
    errors.push(`child cycle: ${key}`);
  }
}

function visitForCycles(id) {
  if (visiting.has(id)) {
    recordCycle(id);
    return;
  }

  if (visited.has(id)) {
    return;
  }

  const node = nodeMap.get(id);
  if (!node) {
    return;
  }

  visiting.add(id);
  stack.push(id);

  for (const childId of new Set(asArray(node.childIds))) {
    if (nodeMap.has(childId)) {
      visitForCycles(childId);
    }
  }

  stack.pop();
  visiting.delete(id);
  visited.add(id);
}

for (const id of nodeIds) {
  visitForCycles(id);
}

console.log("Atlas validation");
console.log("");
console.log(`Errors: ${errors.length}`);
console.log(`Warnings: ${warnings.length}`);
console.log(`Shared nodes: ${sharedChildren.length}`);

if (sharedChildren.length) {
  console.log("");
  for (const [id, parents] of sharedChildren) {
    console.log(`INFO shared node "${id}":`);
    console.log(`  parents: ${parents.join(", ")}`);
  }
}

if (warnings.length) {
  console.log("");
  for (const warning of warnings) {
    console.log(`WARN ${warning}`);
  }
}

if (errors.length) {
  console.log("");
  for (const error of errors) {
    console.log(`ERROR ${error}`);
  }

  process.exit(1);
}
