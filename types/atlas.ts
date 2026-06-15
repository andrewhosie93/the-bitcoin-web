export type ExplanationMode = "surface" | "curious" | "studious";

export type NodeStatus = {
  draft: string;
  review: string;
  source: string;
};

export type AtlasNode = {
  id: string;
  title: string;
  shortTitle?: string;
  summary: string;
  surface: string;
  curious: string;
  studious: string;
  bitcoinConnection: string;
  parentIds: string[];
  childIds: string[];
  relatedIds: string[];
  legTags: string[];
  status: NodeStatus;
};

export type AtlasConfig = {
  rootId: string;
  moneyEntryId: string;
  mainLegIds: string[];
  homepageIntro: string;
};

export type AtlasData = {
  config: AtlasConfig;
  nodes: AtlasNode[];
};
