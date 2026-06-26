# The Bitcoin Web Agent Brief

The Bitcoin Web is a reverse historical atlas showing how ideas, technologies, institutions and discoveries converge into Bitcoin.

The atlas is:
- a contextual knowledge graph
- not a linear timeline
- not a strict tree
- not a Bitcoin marketing page

Use this file as the compact operational brief. For detailed editorial rules, read:
- [Editorial style guide](docs/editorial/style-guide.md)
- [Bubble Charter](docs/editorial/bubble-charter.md)
- [Bubble proposal template](docs/editorial/templates/bubble-proposal.md)
- [Depth-four map](docs/editorial/depth-four-map.md)

## Non-Negotiable Principles

- British English throughout public copy.
- One canonical concept per node.
- A canonical node may appear through several contextual routes.
- Breadcrumbs and Path depth follow the route travelled.
- Shared nodes must not be forced into one canonical visual host.
- Navigable edges must have a clear explanatory meaning.
- "Also touches" relationships are informational and preview-only.
- Do not add filler merely to achieve a numerical depth target.
- Do not mass-generate public nodes or prose.
- Do not invent citations or quotations.
- Do not mark nodes reviewed or sourced without human review.
- Surface explains the concept.
- Deeper explains mechanisms, trade-offs and relevant Bitcoin connections.
- Sources provide evidence and further reading.

## Temporal Planning Rules

- Every main strand requires an approved historical spine before public expansion.
- Distinguish Path depth, Coverage depth and Historical era in planning notes.
- Time guides placement, but causal and explanatory meaning determines edges.
- Predecessor edges should normally move backwards in time; exceptions need rationale.
- Never invent exact dates for disputed origins, broad practices or contested concepts.
- Persistent, recurring and atemporal concepts must not be forced into chronology.
- Do not implement public nodes before the temporal map passes human review.

## Required Workflow Before Adding Nodes

1. Map candidate bubbles.
2. Complete a bubble proposal.
3. Check for duplicates and shared-node opportunities.
4. Define every proposed edge and its rationale.
5. Identify source categories.
6. Obtain human approval of the route map.
7. Add nodes in small batches.
8. Run validation, checks and build.
9. Conduct manual editorial review.
10. Commit the approved batch.

## Protected Implementation

Unless explicitly instructed:
- do not redesign the homepage
- do not change camera movement
- do not alter contextual shared-node navigation
- do not change Back, Centre, Escape or browser-history behaviour
- do not make related previews navigational
- do not change the source architecture
- do not change the atlas schema merely for convenience

## Required Commands

Before reporting completion, run:

```bash
npm run validate:atlas
npm run check
npm run build
git diff --check
```
