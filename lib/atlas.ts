import atlasConfig from "@/content/atlas.json";
import nodes from "@/content/nodes.json";
import type { AtlasConfig, AtlasData, AtlasNode } from "@/types/atlas";

export function getAtlas(): AtlasData {
  return {
    config: atlasConfig as AtlasConfig,
    nodes: nodes as AtlasNode[]
  };
}

