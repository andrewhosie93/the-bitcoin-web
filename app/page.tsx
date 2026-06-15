import AtlasClient from "@/components/AtlasClient";
import { getAtlas } from "@/lib/atlas";

export default function Home() {
  const atlas = getAtlas();

  return <AtlasClient atlas={atlas} />;
}

