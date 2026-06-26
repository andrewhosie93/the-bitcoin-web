# Batch 1 Review: Existing Money Core

This is a planning-review document only. It does not approve Batch 1, does not change `reviewStatus` or `gateStatus`, and does not implement public bubbles.

## 1. Batch Purpose

Batch 1 strengthens the existing Money core before wider depth-four expansion. It contains live draft nodes that already shape the public Money route, plus shared concepts that later strands will need for payment networks, computation, government power and philosophy.

The batch should resolve the source backlog and graph semantics around the current Money foundation before adding more historical or technical nodes. Its main editorial job is to make the first layer of shared concepts trustworthy: Bitcoin as money, scarcity, settlement, custody, ledgers, trust, blockchain, central banks and legal tender.

## 2. Node Review Table

| Node | Existing/live? | Proposed role | Current status | Review status | Source status | Main risk |
| --- | --- | --- | --- | --- | --- | --- |
| Bitcoin as Money | Live | Money route entry and organising concept | Existing draft; source review | provisional | source-needed; has sourceIds | Becoming a promotional claim rather than a careful framing of monetary use. |
| Scarcity | Live | Money concept under Bitcoin as Money; Energy relation should stay preview-only | Existing draft; downgrade Energy link | provisional | source-needed; has sourceIds | Treating scarcity alone as value, or using Bitcoin-centric hindsight. |
| Settlement | Live; shared candidate | Money mechanism and shared payment-network concept | Existing draft; keep; Networks placement confirms coverage depth 2 | provisional | source-needed; no sourceIds | Conflating legal, technical and practical finality. |
| Custody | Live; shared candidate | Money control practice; later key-management and property bridge | Existing draft; keep | provisional | source-needed; no sourceIds | Collapsing self-custody, institutional custody and legal custody into one claim. |
| Ledgers | Live; shared candidate | Money record system; bridge to computation and history | Existing draft; keep | provisional | source-needed; no sourceIds | Making blockchain look like the inevitable endpoint of all ledger history. |
| Trust | Live; shared candidate | Cross-route concept about reliance, verification and institutions | Existing draft; keep | provisional | source-needed; no sourceIds | Becoming too broad or implying Bitcoin removes trust entirely. |
| Blockchain | Live; shared candidate | Ledger implementation and computation bridge | Existing draft; keep | provisional | source-needed; no sourceIds | Generic blockchain hype or under-explaining Bitcoin's specific chain design. |
| Central Banks | Live; shared candidate | Institutional node for fiat, reserves, settlement and state money | Existing shared; keep | provisional | source-needed; no sourceIds | Treating all central banks as identical or as a simple anti-Bitcoin foil. |
| Legal Tender | Live; shared candidate | Narrow legal settlement concept | Existing draft; keep narrow | provisional | source-needed; no sourceIds | Overstating legal tender as all state money or all monetary legitimacy. |

## 3. Bubble Review

### Bitcoin as Money

- Canonical case: deserves a bubble because it is the entry point for the Money route and frames Bitcoin as a monetary object without claiming it is universally accepted as money.
- Size: correctly sized if it stays a route organiser rather than trying to cover every monetary function, policy debate and adoption claim.
- Duplication: overlaps with Money Functions, Store of Value, Medium of Exchange and Unit of Account; those should remain subtopics or later nodes, not duplicates.
- Shared status: should not be treated as a general shared node; it is the Money route's contextual entry.
- Recommended decision: keep, with source review and tighter limits around monetary claims.

### Scarcity

- Canonical case: deserves a bubble because credible issuance limits are central to Bitcoin's monetary comparison and to many historical money debates.
- Size: correctly sized if it distinguishes scarcity from value, rarity and costly production.
- Duplication: overlaps with Costly Production, Monetary Metals, Gold and Store of Value; those should not be collapsed into Scarcity.
- Shared status: should remain Money-first; Energy should stay Also touches unless a specific reviewed edge is later justified.
- Recommended decision: keep, with Energy relationship downgraded to preview-only as already planned.

### Settlement

- Canonical case: deserves a bubble because final-enough payment is a core monetary, legal and network concept.
- Size: correctly sized, but must explicitly separate technical confirmation, legal settlement, clearing and practical irreversibility.
- Duplication: overlaps with Finality, Central Bank Settlement and Payment Networks; keep Settlement broad but do not duplicate finality.
- Shared status: should be shared between Money and Networks now; Government & Power should remain planned until a concrete reviewed route is added.
- Recommended decision: keep and revise source plan before approval.

### Custody

- Canonical case: deserves a bubble because control over assets is one of Bitcoin's strongest connections to institutions, keys and ownership.
- Size: correctly sized if it defines custody as control and responsibility, not only third-party custodians.
- Duplication: overlaps with Private Keys, Self-Custody, Bearer Assets and Property Rights; keep Custody as the broader control practice.
- Shared status: should remain a shared candidate, but non-Money contexts need separate human review before becoming navigable.
- Recommended decision: keep.

### Ledgers

- Canonical case: deserves a bubble because durable records of balances, claims and transfers are a real historical condition for Bitcoin.
- Size: correctly sized if it covers record systems without becoming a full accounting history.
- Duplication: overlaps with Social Memory, Double-entry Bookkeeping, Data Structures and Blockchain; keep Ledgers as the broader record-system node.
- Shared status: should remain shared in principle, but the computation and philosophy contexts need clearer route rationales later.
- Recommended decision: keep, with careful guardrail against linear ledger-to-blockchain history.

### Trust

- Canonical case: deserves a bubble because monetary systems depend on what users must rely on, and Bitcoin shifts trust rather than eliminating it.
- Size: at risk of being too broad; acceptable only if the bubble defines trust operationally within money, verification and institutions.
- Duplication: overlaps with Verification, Common Knowledge, Legal Tender, Custody and Property Rights; do not make it a catch-all.
- Shared status: should remain shared, but each route must say what kind of reliance is being discussed.
- Recommended decision: revise before approval.

### Blockchain

- Canonical case: deserves a bubble because Bitcoin's ordered, verifiable chain is a core implementation of ledger history and data structure design.
- Size: correctly sized if scoped to blockchains as ordered append-only records, with Bitcoin's design as the anchor.
- Duplication: overlaps with Ledgers, Data Structures, Hash Functions, Merkle Trees and Peer-to-Peer Networks; avoid generic blockchain abstraction.
- Shared status: should remain shared between Money and Computation now; Cryptography and Networks contexts need later reviewed edges.
- Recommended decision: keep, with hype-resistant framing.

### Central Banks

- Canonical case: deserves a bubble because central banks are major institutions in modern fiat, bank reserves, settlement and liquidity systems.
- Size: correctly sized if it handles institutional variety and avoids pretending there is one central-bank model.
- Duplication: overlaps with Modern Fiat and Credit Systems, Monetary Sovereignty, Central Bank Settlement and Monetary Policy; keep as the institution node.
- Shared status: should remain shared between Money and Government & Power; Networks should wait for a settlement-infrastructure route.
- Recommended decision: keep, with source-heavy institutional and historical review.

### Legal Tender

- Canonical case: deserves a bubble because legal tender is a narrow but important legal mechanism for debt settlement and state money.
- Size: correctly sized only if it stays narrow; it must not absorb fiat money, tax obligation or monetary sovereignty.
- Duplication: overlaps with Law, Monetary Sovereignty, Political Control and Settlement; keep as a legal mechanism.
- Shared status: should remain shared between Money and Government & Power.
- Recommended decision: keep narrow.

## 4. Edge Review

| Parent | Child | Edge type | Current rationale | Semantically correct? | Proposed improved rationale | Risk | Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bitcoin | Bitcoin as Money | Foundation | Bitcoin as Money belongs under Bitcoin because it supplies a foundation the Money route needs before narrower mechanisms or examples can make sense. | Yes | Bitcoin as Money opens the Money route by asking how Bitcoin can function as a monetary object before the route turns to scarcity, settlement, custody and records. | Could imply the atlas endorses Bitcoin as money rather than examining the claim. | approve after edit |
| Bitcoin as Money | Scarcity | Foundation | Scarcity belongs under Bitcoin as Money because it supplies a foundation the Money route needs before narrower mechanisms or examples can make sense. | Yes, with limits | Scarcity belongs under Bitcoin as Money because Bitcoin's fixed issuance rules make credible supply limits a central monetary question. | Could imply scarcity alone creates value. | approve after edit |
| Bitcoin as Money | Settlement | Mechanism | Settlement belongs under Bitcoin as Money because it explains a mechanism by which the Money route works, is constrained or becomes verifiable. | Yes | Settlement belongs under Bitcoin as Money because Bitcoin payments become usable money only when recipients can decide that a transfer is final enough to rely on. | Could blur technical confirmation, legal settlement and practical finality. | approve after edit |
| Bitcoin as Money | Custody | Mechanism | Custody belongs under Bitcoin as Money because it explains a mechanism by which the Money route works, is constrained or becomes verifiable. | Yes | Custody belongs under Bitcoin as Money because control of keys or custodial claims determines who can actually hold and spend the asset. | Could reduce custody to self-custody or ignore legal/institutional custody. | approve after edit |
| Bitcoin as Money | Ledgers | Mechanism | Ledgers belongs under Bitcoin as Money because it explains a mechanism by which the Money route works, is constrained or becomes verifiable. | Yes, if framed as records | Ledgers belong under Bitcoin as Money because Bitcoin ownership is represented through a shared record of spendable outputs and transaction history. | Could imply all money is ledger money or all ledgers are Bitcoin-like. | approve after edit |
| Bitcoin as Money | Trust | Foundation | Trust belongs under Bitcoin as Money because it supplies a foundation the Money route needs before narrower mechanisms or examples can make sense. | Partly | Trust belongs under Bitcoin as Money because Bitcoin changes what users must rely on, shifting confidence from issuers and payment intermediaries toward rules, software and verification. | Could imply Bitcoin eliminates trust or that trust is a simple substance. | revise |
| Ledgers | Blockchain | Implementation | Blockchain belongs under Ledgers because it shows the broader Money concept put into practice in a concrete system, tool or institutional setting. | Yes | Blockchain belongs under Ledgers because Bitcoin implements a ledger as an ordered chain of blocks that users can independently verify. | Could make blockchain look like the inevitable endpoint of ledger history. | approve after edit |
| Modern Fiat and Credit Systems | Central Banks | Institution | Central Banks belongs under Modern Fiat and Credit Systems because it names an institution that administers, standardises or shapes the relevant Money system. | Yes | Central Banks belong under Modern Fiat and Credit Systems because they shape reserves, settlement, liquidity and monetary policy in many modern money systems. | Could imply all fiat systems work identically or only through central banks. | approve after edit |
| Modern Fiat and Credit Systems | Legal Tender | Mechanism | Legal Tender belongs under Modern Fiat and Credit Systems because it explains a mechanism by which the Money route works, is constrained or becomes verifiable. | Yes | Legal Tender belongs under Modern Fiat and Credit Systems because legal rules can define what must be accepted for settling certain debts. | Could overstate legal tender as the source of all monetary value. | approve after edit |
| Data Structures | Blockchain | Implementation | Blockchain belongs under Data Structures because it shows the broader Computation concept put into practice in a concrete system, tool or institutional setting. | Yes | Blockchain belongs under Data Structures because it arranges transactions into linked, verifiable blocks whose ordering matters to consensus. | Could treat blockchain as merely a data structure and understate protocol context. | approve after edit |
| Payment Networks | Settlement | Mechanism | Settlement belongs under Payment Networks because it explains a mechanism by which the Networks route works, is constrained or becomes verifiable. | Yes | Settlement belongs under Payment Networks because networks for moving payment messages ultimately need rules for when obligations are final enough to rely on. | Could collapse messaging, clearing and settlement into one step. | approve after edit |
| Monetary Sovereignty | Central Banks | Institution | Central Banks belongs under Monetary Sovereignty because it names an institution that administers, standardises or shapes the relevant Government & Power system. | Yes | Central Banks belong under Monetary Sovereignty because they are major institutions through which states and currency areas manage money, reserves and lender-of-last-resort capacity. | Could imply every monetary sovereign uses the same institutional form. | approve after edit |
| Monetary Sovereignty | Legal Tender | Mechanism | Legal Tender belongs under Monetary Sovereignty because it explains a mechanism by which the Government & Power route works, is constrained or becomes verifiable. | Yes | Legal Tender belongs under Monetary Sovereignty because states can use law to define recognised means for settling debts within a jurisdiction. | Could conflate legal tender, taxation and monetary sovereignty. | approve after edit |
| Philosophy & Time | Trust | Foundation | Trust belongs under Philosophy & Time because it supplies a foundation the Philosophy & Time route needs before narrower mechanisms or examples can make sense. | Partly | Trust belongs under Philosophy & Time because questions of reliance, verification and shared expectations underlie later claims about finality, rules and social coordination. | Could be too abstract and make Trust a universal parent. | revise |

## 5. Shared-Context Review

### Settlement

- Realised parent edges: Bitcoin as Money -> Settlement; Payment Networks -> Settlement.
- Realised strand placements: Money; Networks.
- Planned or missing contexts: Government & Power is planned in the shared-candidate register but has no realised placement or parent edge in this plan.
- Navigable recommendation: retain Money and Networks as navigable after rationale rewrite.
- Also touches recommendation: keep Government & Power as planned only, or preview-only, until Central Bank Settlement, Legal Tender or courts are reviewed as a concrete route.

### Trust

- Realised parent edges: Bitcoin as Money -> Trust; Philosophy & Time -> Trust.
- Realised strand placements: Money; Philosophy & Time.
- Planned or missing contexts: Cryptography is planned in the shared-candidate register but has no realised placement or parent edge in this plan.
- Navigable recommendation: retain Money and Philosophy & Time if both rationales are narrowed.
- Also touches recommendation: keep Cryptography as planned or preview-only until a reviewed edge explains whether the route is about signatures, verification, assumptions or key custody.

### Blockchain

- Realised parent edges: Ledgers -> Blockchain; Data Structures -> Blockchain.
- Realised strand placements: Money; Computation.
- Planned or missing contexts: Cryptography and Networks are planned in the shared-candidate register but have no realised placements or parent edges in this plan.
- Navigable recommendation: retain Money and Computation as navigable after rationale rewrite.
- Also touches recommendation: keep Cryptography and Networks as planned only until reviewed edges from Hash Functions, Merkle Trees, Peer-to-Peer Networks or propagation are proposed.

### Central Banks

- Realised parent edges: Modern Fiat and Credit Systems -> Central Banks; Monetary Sovereignty -> Central Banks.
- Realised strand placements: Money; Government & Power.
- Planned or missing contexts: Networks is planned in the shared-candidate register but has no realised placement or parent edge in this plan.
- Navigable recommendation: retain Money and Government & Power as navigable.
- Also touches recommendation: keep Networks as planned or preview-only until the route is specifically about reserve settlement, payment-system operation or central-bank settlement.

### Legal Tender

- Realised parent edges: Modern Fiat and Credit Systems -> Legal Tender; Monetary Sovereignty -> Legal Tender.
- Realised strand placements: Money; Government & Power.
- Planned or missing contexts: none beyond the realised Money and Government & Power contexts.
- Navigable recommendation: retain both contexts if the bubble remains legally narrow.
- Also touches recommendation: no downgrade needed now, but Legal Tender -> Paper Claims and Trust -> Legal Tender should remain preview-only unless a later proposal proves a navigable relation.

## 6. Source Review

| Node | Existing sourceIds if live | Missing source categories | Likely source types required | Claims that must not be made without stronger sources |
| --- | --- | --- | --- | --- |
| Bitcoin as Money | bitcoin-whitepaper; bitcoin-core-repo; jevons-money-mechanism; menger-origin-money; graeber-debt | primary Bitcoin review; monetary history; competing monetary interpretations | primary technical material, original Bitcoin material, academic monetary history, serious competing interpretations | Do not claim Bitcoin is universally money, solves money, or fulfils every money function without qualification. |
| Scarcity | bitcoin-whitepaper; bitcoin-core-repo; jevons-money-mechanism; menger-origin-money | monetary theory; primary Bitcoin; competing interpretations of value | primary Bitcoin material, monetary theory, economic history, serious competing interpretations | Do not claim scarcity alone creates value or that Bitcoin scarcity is identical to commodity scarcity. |
| Settlement | none | payment systems; legal materials; practical finality | payment-system documentation, legal scholarship, institutional publications, technical Bitcoin material | Do not equate confirmations with legal finality or irreversible settlement in every context. |
| Custody | none | legal materials; primary Bitcoin; security practice | legal materials, technical key-management documentation, institutional custody material, security guidance | Do not claim self-custody removes all trust, legal risk or operational risk. |
| Ledgers | none | archive sources; accounting history; computing context | accounting history, archival or museum sources, academic history, technical Bitcoin material | Do not claim ledgers began as money, evolved linearly, or naturally culminate in blockchains. |
| Trust | none | social theory; monetary history; verification literature | social theory, monetary history, technical verification material, competing interpretations | Do not claim Bitcoin eliminates trust; say it shifts and formalises reliance only where sources support it. |
| Blockchain | none | primary technical docs; technical history | primary Bitcoin documentation, technical protocol documentation, original or standards material where relevant | Do not make generic blockchain claims or imply every blockchain inherits Bitcoin's security properties. |
| Central Banks | none | central-bank publications; academic history; institutional sources | central-bank publications, institutional documents, peer-reviewed history, academic books | Do not treat central banks as uniform, neutral, or simply anti-Bitcoin institutions. |
| Legal Tender | none | legislation; legal scholarship; jurisdictional history | legislation, legal scholarship, institutional legal explainers, historical legal sources | Do not claim legal tender means universal acceptance, all debts, all payments or all state money. |

## 7. Recommended Batch 1 Decisions

### Nodes Recommended To Keep

- Bitcoin as Money
- Scarcity
- Settlement
- Custody
- Ledgers
- Blockchain
- Central Banks
- Legal Tender

### Nodes Recommended To Revise

- Trust: keep the node, but narrow its route role and rewrite edge rationales before approval.
- Bitcoin as Money: keep, but review tone so the entry does not become promotional.
- Settlement: keep, but separate legal settlement, technical confirmation, clearing and practical finality.

### Nodes Recommended To Merge Or Downgrade

- None of the nine Batch 1 nodes should be merged or downgraded at this stage.
- Scarcity's Energy relationship should remain Also touches only, not a navigable shared context.

### Edges Recommended To Approve After Rationale Rewrite

- Bitcoin -> Bitcoin as Money
- Bitcoin as Money -> Scarcity
- Bitcoin as Money -> Settlement
- Bitcoin as Money -> Custody
- Bitcoin as Money -> Ledgers
- Ledgers -> Blockchain
- Modern Fiat and Credit Systems -> Central Banks
- Modern Fiat and Credit Systems -> Legal Tender
- Data Structures -> Blockchain
- Payment Networks -> Settlement
- Monetary Sovereignty -> Central Banks
- Monetary Sovereignty -> Legal Tender

### Edges Recommended For Revision Before Approval

- Bitcoin as Money -> Trust
- Philosophy & Time -> Trust

### Edges Recommended For Removal Or Also Touches

- No Batch 1 realised edge is recommended for removal now.
- Missing planned contexts should not be promoted to navigable edges until reviewed.

### Shared Contexts Recommended To Retain

- Settlement: retain Money and Networks; hold Government & Power as planned or preview-only.
- Trust: retain Money and Philosophy & Time after rationale revision; hold Cryptography as planned or preview-only.
- Blockchain: retain Money and Computation; hold Cryptography and Networks as planned or preview-only.
- Central Banks: retain Money and Government & Power; hold Networks as planned or preview-only.
- Legal Tender: retain Money and Government & Power.

### Source Gaps To Fill First

- Settlement, Custody, Ledgers, Trust, Blockchain, Central Banks and Legal Tender have no sourceIds in the live node data and should be sourced before editorial approval.
- Bitcoin as Money and Scarcity already have sourceIds, but their source status remains source-needed and the sources still require human review.
- Highest-risk source areas are legal settlement, legal tender scope, central-bank institutional variation, trust-minimisation claims and non-linear ledger history.

## 8. Do Not Change Plan Statuses

This review document intentionally leaves every `reviewStatus`, `gateStatus` and approval field unchanged. Batch 1 remains `blocked-pending-human-review` until a human editor reviews the recommendations and explicitly updates the planning source.
