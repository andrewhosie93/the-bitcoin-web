export type ExplanationMode = "surface" | "curious" | "studious";

export type NodeStatus = {
  draft: string;
  review: string;
  source: string;
};

export type AtlasSourceType = "primary" | "book" | "paper" | "institutional" | "article" | "lecture";

export type AtlasSource = {
  id: string;
  title: string;
  author?: string;
  year?: string | number;
  publisher?: string;
  type: AtlasSourceType;
  url?: string;
  note?: string;
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
  sourceIds?: string[];
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
  sources: AtlasSource[];
};
