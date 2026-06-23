import Link from "next/link";
import { getAtlas } from "@/lib/atlas";
import type { AtlasNode } from "@/types/atlas";

function isAtlasNode(node: AtlasNode | undefined): node is AtlasNode {
  return Boolean(node);
}

export default function AboutPage() {
  const atlas = getAtlas();
  const nodeMap = new Map(atlas.nodes.map((node) => [node.id, node]));
  const root = nodeMap.get(atlas.config.rootId);
  const strands = atlas.config.mainLegIds.map((id) => nodeMap.get(id)).filter(isAtlasNode);

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link href="/" className="text-sm text-pewter transition hover:text-vellum">
            Return to centre
          </Link>
          <p className="text-xs uppercase tracking-[0.28em] text-gold/70">About</p>
        </div>

        <header className="border-b border-white/10 pb-8">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-pewter">Reverse historical atlas</p>
          <h1 className="font-serif text-4xl text-vellum sm:text-5xl">The Bitcoin Web</h1>
          <p className="mt-5 text-base leading-8 text-[#d4ccbd]">{atlas.config.homepageIntro}</p>
          {root ? <p className="mt-4 text-base leading-8 text-[#bdb5a6]">{root.summary}</p> : null}
        </header>

        <div className="space-y-9 py-9">
          <section>
            <h2 className="font-serif text-2xl text-vellum">How Reverse Navigation Works</h2>
            <p className="mt-3 text-sm leading-7 text-[#c8c0b2]">
              Start at Bitcoin and move backwards through the ideas, technologies, institutions, and discoveries that made it possible. The atlas keeps your current path visible, then offers nearby ways to move towards Bitcoin, go deeper, or inspect related concepts.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-vellum">The Seven Strands</h2>
            <div className="mt-4 grid gap-3">
              {strands.map((strand) => (
                <div key={strand.id} className="border-b border-white/10 pb-3">
                  <h3 className="text-sm text-vellum">{strand.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-pewter">{strand.summary}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-vellum">How To Explore</h2>
            <p className="mt-3 text-sm leading-7 text-[#c8c0b2]">
              Choose a strand from the centre, then follow the visible path one step at a time. The atlas deliberately shows the current route and immediate next options first; cross-strand links appear separately so the web stays readable.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
