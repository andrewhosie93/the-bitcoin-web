import atlasConfig from "@/content/atlas.json";
import nodes from "@/content/nodes.json";
import sources from "@/content/sources.json";
import type { AtlasConfig, AtlasData, AtlasNode, AtlasSource } from "@/types/atlas";

export function getAtlas(): AtlasData {
  return {
    config: atlasConfig as AtlasConfig,
    nodes: nodes as AtlasNode[],
    sources: sources as AtlasSource[]
  };
}
