# Depth-Four Map

This is a planning map for eventual depth-four coverage. It does not add public nodes, edges, prose or sources.

The map follows [AGENTS.md](../../AGENTS.md) and the [Bubble Charter](bubble-charter.md): one canonical concept per node, no filler for numerical depth, shared nodes preferred over duplicates, and every navigable edge given an approved edge type plus a brief rationale.

## Scope And Purpose

Use this document to plan coherent coverage across the atlas before implementing public nodes. The map compares route shape, candidate strength, duplicate risks, source needs and shared-node opportunities across all seven main strands:

- Money
- Energy
- Cryptography
- Computation
- Networks
- Government & Power
- Philosophy & Time

This is a map-before-prose document. The edge rationales below are planning notes, not Surface or Deeper copy.

## Depth And Time Measures

Time provides the backbone. Causality and explanation provide the branches.

Path depth is the number of edges travelled from Bitcoin in the route the visitor actually followed. It is used in the interface. A shared canonical node may appear at several Path depths.

Coverage depth is the shortest proposed approved route from Bitcoin to a canonical node. It is an editorial planning measure, not a public claim about where a node truly belongs.

Historical era is the period in which a node emerged, operated or became important. It orients the retrospective history but must not be treated as another intrinsic graph depth.

Temporal kind is planning metadata for editorial review: event, period, persistent, recurring or atemporal. It should guide source needs and chronology warnings without changing the graph schema.

## Proposed Node Budget

Initial planning range:

- approximately 120-180 canonical nodes across the eventual depth-four atlas
- subject to human pruning
- not a target that justifies filler

This revised map proposes 148 canonical nodes excluding the root Bitcoin node. That is deliberately near the lower-middle of the planning range so later review can remove weak candidates before any public implementation.

## Count Summary

| Strand | Depth 1 | Depth 2 | Depth 3 | Depth 4 | Total |
| --- | ---: | ---: | ---: | ---: | ---: |
| Money | 1 | 7 | 16 | 6 | 30 |
| Energy | 1 | 5 | 9 | 6 | 21 |
| Cryptography | 1 | 6 | 7 | 5 | 19 |
| Computation | 1 | 6 | 8 | 4 | 19 |
| Networks | 1 | 6 | 7 | 5 | 19 |
| Government & Power | 1 | 5 | 8 | 8 | 22 |
| Philosophy & Time | 1 | 6 | 7 | 4 | 18 |
| Total | 7 | 41 | 62 | 38 | 148 |

## Table Conventions

- Existing node: already present in `content/nodes.json`; do not duplicate it.
- Candidate: proposed future canonical node; requires a bubble proposal before implementation.
- Shared status: "Existing shared" means the current atlas already gives the node multiple parents; "Proposed shared" means the map recommends shared route contexts later.
- Source categories name kinds of sources only. They are not citations.
- Historical era and temporal kind must be recorded in bubble proposals even where the table below keeps them implicit.

## Historical Backbone By Strand

The backbone below is not a timeline to be implemented as navigation. It is an editorial pressure check: each strand should feel like a reverse movement from Bitcoin into older conditions, without turning every older condition into a parent.

| Strand | Retrospective movement to preserve | Strong reverse routes | Temporal guardrail |
| --- | --- | --- | --- |
| Money | From Bitcoin settlement and custody back through ledgers, social memory, metal, paper claims and state money. | Bitcoin as Money -> Ledgers -> Social Memory -> Tally Sticks; Bitcoin as Money -> Political Control -> Central Banks -> Legal Tender. | Do not revive barter-to-Bitcoin as a single ladder. |
| Energy | From proof-of-work mining back through electricity, grids, industrial power and earlier costly production. | Energy -> Bitcoin Mining -> Mining Hardware -> ASICs; Energy -> Industrial Power -> Steam Power; Energy -> Electricity -> Electric Grids. | Do not imply energy history exists to justify mining. |
| Cryptography | From signatures and hashes back through public-key systems, ciphers, privacy practice and digital-cash experiments. | Cryptography -> Digital Signatures -> Private Keys -> Address Derivation; Cryptography -> Digital Cash -> Chaumian E-Cash -> Blind Signatures. | Do not make secrecy, signatures and money one unbroken invention chain. |
| Computation | From validation and programmable rules back through data structures, databases, algorithms and mechanical rule-following. | Computation -> Distributed Systems -> Consensus Protocols -> Byzantine Fault Tolerance; Computation -> Algorithms -> Mechanical Calculation. | Do not suggest Bitcoin invented distributed computation. |
| Networks | From peer relay and payment channels back through internet protocols, telegraphy, routing and institutional payment networks. | Networks -> Peer-to-Peer Networks -> Nodes -> Gossip Propagation; Networks -> Payment Networks -> Bank Transfers; Networks -> Internet Protocol Suite -> Packet Switching. | Do not equate every network with decentralisation. |
| Government & Power | From contemporary monetary control back through tax, coinage, mints, central banking, convertibility and capital controls. | Government & Power -> Monetary Sovereignty -> State Coinage -> Mints; Government & Power -> Public Finance -> Taxation. | Do not flatten states into a single anti-Bitcoin actor. |
| Philosophy & Time | From finality, incentives and property back through memory, possession, timekeeping and coordination. | Philosophy & Time -> Trust -> Social Memory; Philosophy & Time -> Property Rights -> Ownership -> Possession; Philosophy & Time -> Finality -> Settlement Finality. | Do not present philosophical ideas as proved by Bitcoin. |

## Temporal Revision Notes

These revisions make time a major organising principle without changing public graph data:

- add a small number of historical anchor candidates where an existing route was too mechanism-heavy
- prefer predecessor routes only where the earlier form genuinely explains the current concept
- keep mechanisms such as hash functions, validation and difficulty adjustment in causal branches rather than forcing them into chronology
- keep "Also touches" for contrasts, analogies and debates that should not become navigable routes
- require future bubble proposals to record historical era, temporal kind and any uncertainty about origins or regional variation

## Shared-Node Register

| Canonical node | Proposed incoming parent relationships | Route contexts | Reason for sharing | Status |
| --- | --- | --- | --- | --- |
| Scarcity | Bitcoin as Money -> Scarcity; Energy -> Scarcity; Philosophy & Time -> Scarcity | Money, Energy, Philosophy & Time | Scarcity is a monetary concept, an energy/cost constraint and a philosophical problem of limits. | Existing node; proposed shared review |
| Gold | Scarcity -> Gold; Energy -> Gold; State Coinage -> Gold | Money, Energy, Government & Power | Gold joins monetary scarcity, extraction cost and state coinage history. | Existing node; proposed shared review |
| Costly Production | Scarcity -> Costly Production; Commodity Money -> Costly Production; Energy -> Costly Production | Money, Energy, Computation | Costly production explains commodity constraints, proof-of-work costs and attack-cost analogies. | Existing node; route review needed |
| Settlement | Bitcoin as Money -> Settlement; Networks -> Settlement; Central Bank Settlement -> Settlement | Money, Networks, Government & Power | Settlement links monetary finality, payment rails and network coordination. | Existing node; proposed shared review |
| Digital Payments | Settlement -> Digital Payments; Payment Networks -> Digital Payments; Computation -> Digital Payments | Money, Networks, Computation | Digital payments are both monetary UX and computer-mediated account updates. | Existing node; proposed shared review |
| Banking Rails | Settlement -> Banking Rails; Payment Networks -> Banking Rails; Central Bank Settlement -> Banking Rails | Money, Networks, Government & Power | Banking rails connect payment messages, bank settlement and regulated infrastructure. | Existing node; proposed shared review |
| Custody | Bitcoin as Money -> Custody; Private Keys -> Custody; Property Rights -> Custody | Money, Cryptography, Philosophy & Time | Custody is a monetary control problem, a key-management problem and an ownership problem. | Existing node; proposed shared review |
| Bearer Assets | Custody -> Bearer Assets; Digital Signatures -> Bearer Assets; Property Rights -> Bearer Assets | Money, Cryptography, Philosophy & Time | Bearer control links physical possession, signature authority and ownership norms. | Existing node; proposed shared review |
| Banks | Custody -> Banks; Banking Regulation -> Banks; Payment Networks -> Banks | Money, Government & Power, Networks | Banks are custodians, regulated institutions and payment-network participants. | Existing node; proposed shared review |
| Paper Claims | Custody -> Paper Claims; Banks -> Paper Claims; Legal Tender -> Paper Claims | Money, Government & Power, Trust | Paper claims connect custody, banking promises and legal enforceability. | Existing node; proposed shared review |
| Ledgers | Bitcoin as Money -> Ledgers; Computation -> Ledgers; Social Memory -> Ledgers | Money, Computation, Philosophy & Time | Ledgers are monetary memory, data structures and institutional records. | Existing node; proposed shared review |
| Blockchain | Ledgers -> Blockchain; Hash Functions -> Blockchain; Distributed Systems -> Blockchain | Money, Cryptography, Computation, Networks | Blockchain joins ledger history, hash commitments, replication and network propagation. | Existing node; proposed shared review |
| Social Memory | Ledgers -> Social Memory; Trust -> Social Memory; Philosophy & Time -> Social Memory | Money, Philosophy & Time | Social memory explains pre-formal records and the trust problem behind ledgers. | Existing shared node |
| Trust | Bitcoin as Money -> Trust; Philosophy & Time -> Trust; Cryptography -> Trust | Money, Philosophy & Time, Cryptography | Trust is reduced, shifted or formalised across institutions, code and social practice. | Existing node; proposed shared review |
| Political Control | Bitcoin as Money -> Political Control; Government & Power -> Political Control | Money, Government & Power | Political control is both a money-route question and the entry point to state power. | Existing node; proposed shared review |
| Fiat Money | Political Control -> Fiat Money; Monetary Sovereignty -> Fiat Money | Money, Government & Power | Fiat money requires both monetary explanation and state-institution framing. | Existing node; proposed shared review |
| Central Banks | Political Control -> Central Banks; Fiat Money -> Central Banks; Banking Regulation -> Central Banks | Money, Government & Power, Networks | Central banks manage monetary policy, bank reserves and settlement infrastructure. | Existing shared node |
| Legal Tender | Central Banks -> Legal Tender; Monetary Sovereignty -> Legal Tender; Trust -> Legal Tender | Money, Government & Power, Philosophy & Time | Legal tender links monetary law, state authority and trust in enforceable settlement. | Existing node; proposed shared review |
| Proof of Work | Energy -> Proof of Work; Hash Functions -> Proof of Work; Computation -> Proof of Work | Energy, Cryptography, Computation | Proof of work is energy expenditure, a hash puzzle and a computational coordination mechanism. | Candidate shared |
| Hashcash | Hash Functions -> Hashcash; Proof of Work -> Hashcash; Digital Cash -> Hashcash | Cryptography, Energy, Computation | Hashcash is a predecessor connecting anti-spam work to Bitcoin proof of work. | Candidate shared |
| Public-Key Cryptography | Cryptography -> Public-Key Cryptography; Custody -> Public-Key Cryptography | Cryptography, Money | Public-key systems explain how control can be proven without a central account keeper. | Candidate shared |
| Digital Signatures | Public-Key Cryptography -> Digital Signatures; Custody -> Digital Signatures | Cryptography, Money | Digital signatures connect authorisation, ownership proofs and spend authority. | Candidate shared |
| Private Keys | Digital Signatures -> Private Keys; Custody -> Private Keys; Property Rights -> Private Keys | Cryptography, Money, Philosophy & Time | Private keys are the practical bridge between cryptographic control and economic custody. | Candidate shared |
| UTXO Model | Data Structures -> UTXO Model; Ledgers -> UTXO Model; Validation -> UTXO Model | Computation, Money | UTXOs are a computational record design and a monetary ownership model. | Candidate shared |
| Consensus Protocols | Distributed Systems -> Consensus Protocols; Networks -> Consensus Protocols | Computation, Networks | Consensus protocols connect replicated computation with network agreement. | Candidate shared |
| Open-Source Software | Computation -> Open-Source Software; Cypherpunk Practice -> Open-Source Software; Governance -> Open-Source Software | Computation, Cryptography, Government & Power | Open-source software shapes inspection, governance and social legitimacy. | Candidate shared |
| Peer-to-Peer Networks | Networks -> Peer-to-Peer Networks; Computation -> Peer-to-Peer Networks | Networks, Computation | Peer-to-peer architecture explains both message flow and decentralised system design. | Candidate shared |
| Censorship Resistance | Networks -> Censorship Resistance; Capital Controls -> Censorship Resistance; Privacy -> Censorship Resistance | Networks, Government & Power, Cryptography | Censorship resistance is a network property, a political question and a privacy concern. | Candidate shared |
| Network Effects | Networks -> Network Effects; Money Functions -> Network Effects; Coordination Problems -> Network Effects | Networks, Money, Philosophy & Time | Network effects explain why acceptance, liquidity and coordination reinforce each other. | Candidate shared |
| Monetary Sovereignty | Government & Power -> Monetary Sovereignty; Political Control -> Monetary Sovereignty | Government & Power, Money | Monetary sovereignty anchors state power over units, taxes, settlement and law. | Candidate shared |
| Property Rights | Philosophy & Time -> Property Rights; Government & Power -> Property Rights; Custody -> Property Rights | Philosophy & Time, Government & Power, Money | Property rights connect ownership philosophy, legal enforcement and custody. | Candidate shared |
| Finality | Philosophy & Time -> Finality; Settlement -> Finality; Blockchain -> Finality | Philosophy & Time, Money, Computation | Finality links time, settlement confidence and ledger reorganisation risk. | Candidate shared |
| Incentives | Philosophy & Time -> Incentives; Proof of Work -> Incentives; Mining -> Incentives | Philosophy & Time, Energy, Computation | Incentives explain why participants follow costly rules without central command. | Candidate shared |
| Settlement Finality | Finality -> Settlement Finality; Settlement -> Settlement Finality; Central Bank Settlement -> Settlement Finality | Philosophy & Time, Money, Government & Power | Settlement finality joins legal, technical and practical irreversibility. | Candidate shared |
| Energy Markets | Electricity -> Energy Markets; Bitcoin Mining -> Energy Markets; Government & Power -> Energy Markets | Energy, Government & Power | Energy markets shape mining economics and are politically regulated infrastructure. | Candidate shared |

Shared-node count in this register: 36.

## Duplicate-Node Register

| Candidate duplicate | Canonical handling | Decision | Notes |
| --- | --- | --- | --- |
| Digital Gold | Gold plus Scarcity | Reject as standalone | Use as analogy inside Gold or Scarcity, not a node. |
| Money Printing | Monetary Policy, Seigniorage, Inflation and Debasement | Reject phrase | The phrase is politically loaded and conflates mechanisms. |
| Censorship | Censorship Resistance plus Capital Controls or Sanctions | Merge into narrower contexts | Use the precise mechanism rather than a broad slogan. |
| Cypherpunks | Cypherpunk Practice | Keep practice, not people list | People normally belong in Deeper or Sources. |
| Satoshi Nakamoto | Bitcoin primary sources | Reject as structural bubble | Person/source context, not a route node for depth-four coverage. |
| Gold Standard | Gold Convertibility, Bretton Woods, Central Banks | Review split | The phrase covers several institutional arrangements. |
| Blockchain Consensus | Blockchain plus Consensus Protocols | Avoid duplicate | Keep ledger structure and agreement mechanism separate. |
| Store of Value Premium | Store of Value plus Purchasing Power | Reject for now | Likely too specialised and speculative for early route structure. |
| Regulation | Banking Regulation, Capital Controls, KYC/AML, Sanctions | Split | "Regulation" is too broad to be a useful bubble. |
| Privacy Coins | Privacy, Pseudonymity, Mix Networks | Reject for current scope | Specific altcoin examples are not needed for Bitcoin's base route. |
| Internet | Internet Protocol Suite plus Peer-to-Peer Networks | Split | "Internet" is too broad unless framed through specific layers. |
| Sound Money | Scarcity, Monetary Sovereignty, Inflation and Debasement | Reject phrase | Too ideological unless carefully decomposed into sourceable claims. |
| Ancient Money | Social Memory, Tally Sticks, Commodity Money, State Coinage | Split | The phrase hides different record, object and institution histories. |
| Industrial Revolution | Industrial Power plus Steam Power | Reject broad era label | Use narrower mechanisms and systems rather than a period as a catch-all node. |
| Ciphers | Classical Ciphers plus Encryption | Split | Older secrecy practices and modern encryption should not be collapsed. |
| Telegraph | Telegraph Networks | Keep network system | The route needs communications infrastructure, not a single device or inventor story. |

Duplicate candidates avoided in this register: 16.

## Source Backlog

| Topic | Source categories needed | Priority | Notes |
| --- | --- | --- | --- |
| Current Money route | Primary Bitcoin materials; academic books; peer-reviewed monetary history; institutional payment publications | High | Existing draft nodes need inspected sources before status promotion. |
| Temporal anchor nodes | Archive or museum sources; peer-reviewed history; academic books; serious competing interpretations | High | Needed for Tally Sticks, Steam Power, Classical Ciphers, Mechanical Calculation, Telegraph Networks, Mints, and Calendars and Timekeeping. |
| Proof of work and mining | Primary technical documentation; original papers; electricity-market publications; serious competing interpretations | High | Needed by Energy, Computation and Cryptography. |
| Cryptographic custody | Original papers; primary technical documentation; standards; high-quality technical synthesis | High | Needed before Private Keys, Signatures and Address Derivation are populated. |
| Central banking and state money | Legislation; central-bank publications; academic books; peer-reviewed history; serious competing interpretations | High | Needed by Money and Government & Power shared nodes. |
| Distributed systems | Original papers; technical documentation; academic books; serious technical synthesis | Medium | Needed before consensus and validation nodes are written. |
| Network infrastructure | Technical standards; institutional publications; peer-reviewed network history; high-quality synthesis | Medium | Needed by Networks and Payment Networks. |
| Philosophy and social theory | Academic books; peer-reviewed research; serious competing interpretations | Medium | Needed to avoid flattening trust, property and value claims. |

## Editorial Risks By Strand

| Strand | Contested claims | Misleading linear histories | Political framing risk | Bitcoin-centric hindsight | Overlap requiring care | Terminology requiring care |
| --- | --- | --- | --- | --- | --- | --- |
| Money | Origins and functions of money, fiat value, scarcity and trust. | Barter -> commodity -> fiat -> Bitcoin is too simple. | "Hard money" or "fake money" language can distort trade-offs. | Avoid treating Bitcoin as the inevitable endpoint of monetary history. | Energy, Government & Power, Networks, Philosophy & Time. | Money, settlement, finality, bearer, fiat, trust. |
| Energy | Whether energy use is waste, security, production cost or externality. | Do not imply energy technology naturally leads to proof of work. | Environmental claims can become advocacy or dismissal. | Avoid treating all energy history as preparation for mining. | Computation, Government & Power, Money. | Cost, work, security, externality, stranded energy. |
| Cryptography | Privacy, anonymity, trustlessness and digital-cash lineage. | Do not make cryptography look like a straight line to Bitcoin. | Privacy tools can be framed carelessly as evasion or liberation. | Avoid overstating Bitcoin's privacy or novelty. | Money, Computation, Networks, Philosophy & Time. | Signature, key, hash, encryption, pseudonymity, anonymity. |
| Computation | Consensus, validation, decentralisation and software governance. | Computer science history is not a single chain of inventions. | Protocol governance can invite oversimplified "code is law" framing. | Avoid pretending Bitcoin invented distributed systems. | Cryptography, Networks, Money. | Consensus, node, validation, state, fork, protocol. |
| Networks | Censorship resistance, network effects and payment rails. | Do not present networks as inherently decentralising. | Censorship and surveillance language can become slogan-heavy. | Avoid treating every network as a Bitcoin-like peer network. | Money, Computation, Government & Power. | Network, rail, routing, censorship, liquidity, peer. |
| Government & Power | State money, legal tender, central banking and capital controls. | State involvement in money is varied by place and period. | High risk of anti-government or pro-institutional flattening. | Avoid reducing the strand to "government versus Bitcoin". | Money, Networks, Philosophy & Time. | Sovereignty, legal tender, regulation, policy, debasement. |
| Philosophy & Time | Property, value, incentives, trust and finality are contested. | Philosophical ideas should not become a grand origin story. | Property and freedom language can become ideological too quickly. | Avoid making philosophical traditions appear validated by Bitcoin. | Money, Government & Power, Cryptography. | Trust, property, value, finality, consensus, incentives. |

## Temporal Risks By Strand

| Strand | Temporal risk | Planning response |
| --- | --- | --- |
| Money | Treating record-keeping, commodity media, banking and Bitcoin as a single upward sequence. | Keep Social Memory, Tally Sticks, Gold, Paper Claims, Fiat Money and Settlement as different explanatory routes. |
| Energy | Turning industrialisation into a moral preface for mining. | Use Industrial Power and Steam Power as historical context, while keeping mining claims source-dependent. |
| Cryptography | Collapsing secrecy, signatures, hashes and privacy into one chronological story. | Use Classical Ciphers as an older secrecy anchor; keep signatures, hashes and digital cash on distinct branches. |
| Computation | Making digital validation appear to descend directly from every earlier calculating device. | Use Mechanical Calculation only as an anchor for rule-following machines, not as a direct Bitcoin predecessor. |
| Networks | Treating communications networks as naturally decentralising over time. | Keep Telegraph Networks, Internet Protocol Suite, Payment Networks and Peer-to-Peer Networks separate. |
| Government & Power | Presenting monetary sovereignty as the same institution across all eras and states. | Split State Coinage, Mints, Taxation, Central Banks, Legal Tender and Capital Controls by function. |
| Philosophy & Time | Turning time, property and finality into timeless slogans. | Require historical era and temporal kind notes even for persistent or atemporal concepts. |

## Review Status

| Area | Reviewer | Status | Notes |
| --- | --- | --- | --- |
| Overall depth-four map | Human editor needed | Planning draft | Requires pruning before any public nodes are added. |
| Shared-node register | Human editor needed | Planning draft | Confirm which proposed shared parents should become navigable. |
| Duplicate-node register | Human editor needed | Planning draft | Confirm merges and rejected terms before route proposals. |
| Temporal Doctrine application | Human editor needed | Planning draft | Confirm temporal kind and historical-era notes before implementing candidate batches. |
| Money existing nodes | Human editor needed | Planning draft | Existing public nodes need source and breadth review. |
| Technical strands | Human editor plus technical reviewer | Planning draft | Cryptography, Computation and Networks need technical source inventory. |
| Government & Power | Human editor plus source reviewer | Planning draft | Requires jurisdiction-specific care and primary/institutional sources. |
| Philosophy & Time | Human editor | Planning draft | Requires careful handling of contested abstractions. |

## Money

Existing Money nodes are mapped rather than replaced. Several are strong shared-node candidates, especially Settlement, Custody, Ledgers, Trust, Political Control, Blockchain, Central Banks and Legal Tender. Costly Production is already public but currently sits beyond depth four through Commodity Money; the planning map treats it as a shared mechanism that may deserve a shorter route through Scarcity or Energy after review.

Proposed "Also touches" relationships: Scarcity also touches Energy and Philosophy & Time; Settlement also touches Networks; Custody also touches Property Rights and Private Keys; Political Control also touches Government & Power; Blockchain also touches Cryptography, Computation and Networks.

| Candidate node | Type | Coverage depth | Parent edge rationale(s) | Shared? | Score | Source categories | Status |
| --- | --- | ---: | --- | --- | ---: | --- | --- |
| Bitcoin as Money | Concept | 1 | Bitcoin - Foundation: this strand asks whether Bitcoin can function as money and which older monetary problems it inherits. | Existing | 12 | Primary Bitcoin materials; academic books; serious competing interpretations | Existing draft; source review |
| Money Functions | Concept | 2 | Bitcoin as Money - Foundation: monetary functions organise the basic questions of measurement, exchange, saving and settlement. | Proposed shared | 10 | Academic books; serious competing interpretations; institutional explainers | Candidate; proposal needed |
| Scarcity | Concept | 2 | Bitcoin as Money - Foundation: scarcity explains why credible limits on new units matter to monetary claims. | Existing shared | 12 | Academic books; primary Bitcoin materials; peer-reviewed monetary history | Existing draft; keep shared |
| Settlement | Concept | 2 | Bitcoin as Money - Mechanism: settlement explains when a payment becomes reliable enough to count as final. | Existing shared | 12 | Institutional payment publications; legislation; academic books | Existing draft; keep shared |
| Custody | Practice | 2 | Bitcoin as Money - Mechanism: custody explains who controls an asset and what must be trusted. | Existing shared | 12 | Legal materials; primary Bitcoin materials; institutional publications | Existing draft; keep shared |
| Ledgers | System | 2 | Bitcoin as Money - Mechanism: ledgers explain how monetary memory is recorded and checked. | Existing shared | 12 | Archive or museum sources; academic books; technical documentation | Existing draft; keep shared |
| Trust | Concept | 2 | Bitcoin as Money - Foundation: trust identifies what users rely on in any monetary system. | Existing shared | 12 | Academic books; serious competing interpretations; primary Bitcoin materials | Existing draft; keep shared |
| Political Control | Concept | 2 | Bitcoin as Money - Institution: political control explains how law and institutions shape monetary systems. | Existing shared | 12 | Legislation; institutional publications; academic books; serious competing interpretations | Existing draft; keep shared |
| Unit of Account | Concept | 3 | Money Functions - Example: unit of account is a core monetary function that explains pricing and accounting. | Proposed shared | 9 | Academic books; institutional explainers; serious competing interpretations | Candidate; proposal needed |
| Medium of Exchange | Concept | 3 | Money Functions - Example: medium of exchange explains how money reduces transaction frictions. | Proposed shared | 9 | Academic books; peer-reviewed economic history; serious competing interpretations | Candidate; proposal needed |
| Store of Value | Concept | 3 | Money Functions - Example: store of value explains the saving claim without collapsing money into investment. | Proposed shared | 8 | Academic books; serious competing interpretations; peer-reviewed history | Candidate; review carefully |
| Gold | Artefact | 3 | Scarcity - Example: gold is a durable historical example of monetary scarcity and costly verification. | Existing shared | 12 | Academic books; archive or museum sources; peer-reviewed history | Existing draft; keep shared |
| Costly Production | Mechanism | 3 | Scarcity - Mechanism: costly production explains one way new supply can be constrained. | Existing shared | 11 | Primary Bitcoin materials; academic books; energy-market publications | Existing draft; route review |
| Digital Payments | System | 3 | Settlement - Implementation: digital payments show how payment instructions can precede final settlement. | Existing shared | 11 | Institutional payment publications; technical documentation; academic books | Existing draft; keep shared |
| Banking Rails | System | 3 | Settlement - Implementation: banking rails explain how account systems move and settle claims between institutions. | Existing shared | 11 | Institutional payment publications; legislation; academic books | Existing draft; keep shared |
| Physical Settlement | Practice | 3 | Settlement - Predecessor: physical settlement shows finality through delivery of the asset itself. | Existing | 10 | Archive or museum sources; academic books; legal materials | Existing draft; source review |
| Bearer Assets | Concept | 3 | Custody - Mechanism: bearer assets explain control through possession or signing authority rather than account permission. | Existing shared | 11 | Legal materials; academic books; primary Bitcoin materials | Existing draft; keep shared |
| Banks | Institution | 3 | Custody - Institution: banks show how custody, credit and payments are delegated to institutions. | Existing shared | 11 | Institutional publications; academic books; peer-reviewed history | Existing draft; keep shared |
| Paper Claims | Artefact | 3 | Custody - Predecessor: paper claims explain transferable promises on underlying assets. | Existing shared | 10 | Archive or museum sources; academic books; legal materials | Existing draft; source review |
| Blockchain | Technology | 3 | Ledgers - Implementation: blockchain shows one public way to order and verify a shared transaction history. | Existing shared | 12 | Primary technical documentation; original papers; technical synthesis | Existing draft; keep shared |
| Double-entry Bookkeeping | Practice | 3 | Ledgers - Predecessor: double-entry bookkeeping shows disciplined monetary records before public validation. | Existing shared | 10 | Academic books; archive or museum sources; accounting history | Existing draft; source review |
| Social Memory | Concept | 3 | Ledgers - Foundation: social memory explains why communities need shared records of obligations. | Existing shared | 11 | Academic books; peer-reviewed anthropology; serious competing interpretations | Existing shared; source review |
| Tally Sticks | Artefact | 4 | Social Memory - Example: tally sticks show durable split records of obligation before modern bookkeeping and account systems. | No | 9 | Archive or museum sources; academic books; peer-reviewed monetary history | Candidate; temporal anchor |
| Fiat Money | System | 3 | Political Control - Implementation: fiat money shows money managed through law and institutions without commodity redemption. | Existing shared | 11 | Legislation; central-bank publications; academic books; serious competing interpretations | Existing draft; keep shared |
| Central Banks | Institution | 3 | Political Control - Institution: central banks show concentrated authority over base money, reserves and emergency liquidity. | Existing shared | 12 | Central-bank publications; academic books; peer-reviewed history | Existing shared; keep shared |
| Liquidity | Concept | 4 | Medium of Exchange - Mechanism: liquidity explains why acceptability and market depth matter to exchange. | Proposed shared | 9 | Academic books; institutional publications; serious competing interpretations | Candidate; proposal needed |
| Purchasing Power | Concept | 4 | Store of Value - Mechanism: purchasing power distinguishes supply limits from what money can actually buy. | Proposed shared | 9 | Institutional publications; academic books; peer-reviewed economic history | Candidate; proposal needed |
| Commodity Money | System | 4 | Gold - Example: commodity money broadens the gold example into accepted goods with monetary use. | Existing | 11 | Academic books; peer-reviewed anthropology; serious competing interpretations | Existing draft; source review |
| Legal Tender | Concept | 4 | Central Banks - Institution: legal tender explains the legal rules around settling certain debts. | Existing shared | 12 | Legislation; institutional explainers; legal scholarship | Existing draft; keep shared |
| Clearing Houses | Institution | 4 | Banking Rails - Institution: clearing houses explain how banks reduce and settle obligations among themselves. | Proposed shared | 9 | Institutional payment publications; academic books; legal materials | Candidate; proposal needed |

## Energy

The Energy strand should avoid becoming a defence or attack on mining. It should show how cost, power, electricity systems and proof of work interact, while keeping environmental and market claims source-dependent.

Proposed "Also touches" relationships: Proof of Work also touches Cryptography and Computation; Costly Production and Gold also touch Money; Energy Markets also touches Government & Power; Hashrate also touches Networks and Computation.

| Candidate node | Type | Coverage depth | Parent edge rationale(s) | Shared? | Score | Source categories | Status |
| --- | --- | ---: | --- | --- | ---: | --- | --- |
| Energy | Concept | 1 | Bitcoin - Foundation: energy frames proof of work as costly expenditure rather than abstract computation alone. | Existing | 10 | Academic books; technical documentation; energy publications | Existing placeholder; expand later |
| Proof of Work | Mechanism | 2 | Energy - Mechanism: proof of work explains how energy-backed computation secures block production. | Proposed shared | 12 | Original papers; primary Bitcoin materials; technical synthesis | Candidate; high priority |
| Bitcoin Mining | Practice | 2 | Energy - Implementation: mining is the practical process where proof of work, hardware and electricity meet. | Proposed shared | 11 | Primary Bitcoin materials; industry data; institutional publications | Candidate; high priority |
| Electricity | Technology | 2 | Energy - Foundation: electricity is the energy carrier that makes modern proof-of-work mining possible. | No | 9 | Academic books; institutional publications; technical history | Candidate; proposal needed |
| Industrial Power | System | 2 | Energy - Predecessor: industrial power explains the older history of disciplined mechanical and electrical work. | Proposed shared | 8 | Academic books; archive or museum sources; peer-reviewed history | Candidate; review scope |
| Thermodynamic Cost | Concept | 2 | Energy - Foundation: thermodynamic cost distinguishes physical expenditure from symbolic accounting. | Proposed shared | 8 | Academic books; original papers; serious competing interpretations | Candidate; review wording |
| Steam Power | Technology | 3 | Industrial Power - Implementation: steam power shows disciplined conversion of heat into mechanical work before electrified industry. | No | 8 | Academic books; archive or museum sources; peer-reviewed industrial history | Candidate; temporal anchor |
| Difficulty Adjustment | Mechanism | 3 | Proof of Work - Mechanism: difficulty adjustment explains how Bitcoin regulates block intervals as hashrate changes. | Proposed shared | 12 | Primary technical documentation; primary Bitcoin materials; technical synthesis | Candidate; high priority |
| Hashrate | Mechanism | 3 | Proof of Work - Mechanism: hashrate measures aggregate mining work and helps explain attack cost. | Proposed shared | 11 | Primary technical documentation; industry data; technical synthesis | Candidate; high priority |
| Security Budget | Mechanism | 3 | Proof of Work - Mechanism: security budget links miner revenue, incentives and the cost of attacking history. | Proposed shared | 10 | Primary Bitcoin materials; peer-reviewed research; serious competing interpretations | Candidate; source-sensitive |
| Mining Hardware | Technology | 3 | Bitcoin Mining - Mechanism: mining hardware explains how specialised machines changed who can produce blocks. | Proposed shared | 10 | Technical documentation; industry history; archive or museum sources | Candidate; proposal needed |
| Electric Grids | System | 3 | Electricity - Implementation: electric grids explain the infrastructure through which mining draws power. | Proposed shared | 9 | Institutional publications; academic books; technical history | Candidate; proposal needed |
| Energy Markets | System | 3 | Electricity - Institution: energy markets explain how prices, regulation and grid constraints shape mining incentives. | Proposed shared | 9 | Institutional publications; market reports; serious competing interpretations | Candidate; source-sensitive |
| Gold Mining | Practice | 3 | Industrial Power - Predecessor: gold mining gives a material predecessor for costly monetary production. | Proposed shared | 9 | Academic books; archive or museum sources; peer-reviewed history | Candidate; proposal needed |
| Energy Externalities | Concept | 3 | Energy - Mechanism: externalities explain why private energy expenditure can impose wider costs or benefits. | Proposed shared | 9 | Peer-reviewed research; institutional publications; serious competing interpretations | Candidate; source-sensitive |
| Block Subsidy | Mechanism | 4 | Security Budget - Mechanism: the block subsidy explains one source of miner revenue and its scheduled decline. | Proposed shared | 11 | Primary Bitcoin materials; primary technical documentation; technical synthesis | Candidate; high priority |
| Transaction Fees | Mechanism | 4 | Security Budget - Mechanism: transaction fees explain the revenue source that becomes more important as subsidy declines. | Proposed shared | 11 | Primary Bitcoin materials; primary technical documentation; peer-reviewed research | Candidate; high priority |
| ASICs | Technology | 4 | Mining Hardware - Implementation: ASICs show how mining moved from general computation to specialised hardware. | Proposed shared | 10 | Technical documentation; industry history; archive or museum sources | Candidate; proposal needed |
| Mining Pools | System | 4 | Bitcoin Mining - Institution: mining pools explain why block production can be coordinated without changing protocol issuance. | Proposed shared | 10 | Primary technical documentation; industry data; peer-reviewed research | Candidate; source-sensitive |
| Demand Response | Practice | 4 | Energy Markets - Implementation: demand response explains how flexible loads can interact with grid conditions. | Proposed shared | 8 | Institutional publications; energy-market research; serious competing interpretations | Candidate; review carefully |
| Stranded Energy | Concept | 4 | Energy Markets - Example: stranded energy explains a claimed mining use case that needs careful source review. | Proposed shared | 7 | Energy-market publications; peer-reviewed research; serious competing interpretations | Candidate; human pruning |

## Cryptography

The Cryptography strand should explain proof, secrecy, signatures and digital cash without implying that cryptography alone creates money. It should distinguish privacy, pseudonymity and anonymity carefully.

Proposed "Also touches" relationships: Private Keys also touches Custody and Property Rights; Hash Functions also touches Computation; Digital Cash also touches Money and Networks; Privacy also touches Government & Power.

| Candidate node | Type | Coverage depth | Parent edge rationale(s) | Shared? | Score | Source categories | Status |
| --- | --- | ---: | --- | --- | ---: | --- | --- |
| Cryptography | Technology | 1 | Bitcoin - Foundation: cryptography explains how Bitcoin proves control and links data without private account keepers. | Existing | 10 | Original papers; technical documentation; academic books | Existing placeholder; expand later |
| Public-Key Cryptography | Technology | 2 | Cryptography - Foundation: public-key cryptography explains asymmetric proof of control. | Proposed shared | 12 | Original papers; technical standards; academic books | Candidate; high priority |
| Hash Functions | Technology | 2 | Cryptography - Foundation: hash functions explain commitments, linking and proof-of-work puzzles. | Proposed shared | 12 | Original papers; technical standards; primary technical documentation | Candidate; high priority |
| Digital Signatures | Mechanism | 2 | Cryptography - Mechanism: digital signatures explain how a spender proves authorisation. | Proposed shared | 12 | Original papers; technical standards; primary Bitcoin materials | Candidate; high priority |
| Digital Cash | System | 2 | Cryptography - Predecessor: digital cash projects show earlier attempts to make electronic money work. | Proposed shared | 11 | Original papers; academic books; serious technical synthesis | Candidate; high priority |
| Privacy | Concept | 2 | Cryptography - Foundation: privacy explains what cryptographic systems can hide, reveal or prove. | Proposed shared | 9 | Academic books; original papers; serious competing interpretations | Candidate; source-sensitive |
| Classical Ciphers | Technology | 2 | Cryptography - Predecessor: classical ciphers supply older secrecy practices without collapsing them into Bitcoin's signature use. | No | 8 | Archive or museum sources; academic books; serious technical synthesis | Candidate; temporal anchor |
| Private Keys | Artefact | 3 | Digital Signatures - Mechanism: private keys explain the secret material that authorises spending. | Proposed shared | 12 | Primary Bitcoin materials; technical documentation; security guidance | Candidate; high priority |
| Elliptic Curve Cryptography | Technology | 3 | Public-Key Cryptography - Implementation: elliptic curves explain the signature family used by Bitcoin. | Proposed shared | 10 | Technical standards; primary Bitcoin materials; technical synthesis | Candidate; proposal needed |
| SHA-256 | Technology | 3 | Hash Functions - Implementation: SHA-256 is the hash function Bitcoin uses for proof of work and commitments. | Proposed shared | 10 | Technical standards; primary Bitcoin materials; technical documentation | Candidate; proposal needed |
| Hash Commitments | Mechanism | 3 | Hash Functions - Mechanism: commitments explain how data can be fixed without revealing all of it at once. | Proposed shared | 10 | Original papers; technical synthesis; primary technical documentation | Candidate; proposal needed |
| Chaumian E-Cash | System | 3 | Digital Cash - Predecessor: Chaumian e-cash shows an earlier privacy-preserving issuer-based design. | Proposed shared | 10 | Original papers; academic books; serious technical synthesis | Candidate; proposal needed |
| Pseudonymity | Concept | 3 | Privacy - Mechanism: pseudonymity explains why Bitcoin addresses are not the same as names or anonymity. | Proposed shared | 9 | Academic research; primary Bitcoin materials; serious competing interpretations | Candidate; source-sensitive |
| Cypherpunk Practice | Practice | 3 | Cryptography - Institution: cypherpunk practice explains the social setting where privacy tools became political software. | Proposed shared | 8 | Archives; academic books; serious competing interpretations | Candidate; human pruning |
| Address Derivation | Mechanism | 4 | Private Keys - Implementation: address derivation explains how spend authority is represented for receiving payments. | Proposed shared | 10 | Primary technical documentation; primary Bitcoin materials; technical synthesis | Candidate; proposal needed |
| Merkle Trees | Technology | 4 | Hash Commitments - Implementation: Merkle trees explain compact commitment to many transactions. | Proposed shared | 10 | Original papers; primary technical documentation; technical synthesis | Candidate; proposal needed |
| Blind Signatures | Mechanism | 4 | Chaumian E-Cash - Mechanism: blind signatures explain how issuer-backed digital cash can preserve privacy. | Proposed shared | 9 | Original papers; academic books; serious technical synthesis | Candidate; proposal needed |
| Encryption | Technology | 4 | Privacy - Mechanism: encryption explains secrecy but must be distinguished from Bitcoin's signature and hash use. | Proposed shared | 8 | Original papers; academic books; technical standards | Candidate; review scope |
| Hashcash | Historical hinge | 4 | Hash Functions - Predecessor: Hashcash connects hash-based work to anti-spam and proof-of-work lineage. | Proposed shared | 11 | Original papers; technical synthesis; primary Bitcoin materials | Candidate; high priority |

## Computation

The Computation strand should show how programmable rules, data structures, validation and distributed systems make Bitcoin executable. It should avoid collapsing computation into cryptography or treating software as socially automatic.

Proposed "Also touches" relationships: Blockchain also touches Money and Networks; Hash Functions also touches Cryptography; Full Nodes also touches Networks and Trust; Open-Source Software also touches Government & Power.

| Candidate node | Type | Coverage depth | Parent edge rationale(s) | Shared? | Score | Source categories | Status |
| --- | --- | ---: | --- | --- | ---: | --- | --- |
| Computation | Technology | 1 | Bitcoin - Foundation: computation explains Bitcoin as rules executed and checked by machines. | Existing | 10 | Academic books; technical documentation; original papers | Existing placeholder; expand later |
| Algorithms | Concept | 2 | Computation - Foundation: algorithms explain rule-following procedures before specific Bitcoin mechanisms. | No | 9 | Academic books; original papers; technical synthesis | Candidate; review scope |
| Data Structures | Technology | 2 | Computation - Foundation: data structures explain how information is organised for validation. | Proposed shared | 10 | Academic books; technical documentation; serious technical synthesis | Candidate; proposal needed |
| Databases | System | 2 | Computation - Predecessor: databases explain durable records before distributed public ledgers. | Proposed shared | 9 | Academic books; technical documentation; serious technical synthesis | Candidate; proposal needed |
| Distributed Systems | System | 2 | Computation - Foundation: distributed systems explain coordination among machines without one reliable centre. | Proposed shared | 12 | Original papers; academic books; technical synthesis | Candidate; high priority |
| State Machines | System | 2 | Computation - Foundation: state machines explain rule-bound transitions in digital systems. | Proposed shared | 9 | Academic books; original papers; technical synthesis | Candidate; proposal needed |
| Open-Source Software | Practice | 2 | Computation - Institution: open-source software explains how public code inspection and contribution shape protocol trust. | Proposed shared | 10 | Archives; technical documentation; academic books | Candidate; proposal needed |
| Consensus Protocols | Mechanism | 3 | Distributed Systems - Mechanism: consensus protocols explain how distributed participants can agree on shared state. | Proposed shared | 12 | Original papers; academic books; serious technical synthesis | Candidate; high priority |
| Mechanical Calculation | Technology | 3 | Algorithms - Predecessor: mechanical calculation shows rule-following machines before programmable digital systems. | No | 8 | Archive or museum sources; academic books; peer-reviewed history | Candidate; temporal anchor |
| Append-Only Logs | System | 3 | Databases - Mechanism: append-only logs explain why ordered history matters for auditability and rollback risk. | Proposed shared | 10 | Technical documentation; academic books; serious technical synthesis | Candidate; proposal needed |
| UTXO Model | Mechanism | 3 | Data Structures - Implementation: the UTXO model explains Bitcoin's spendable outputs without ordinary account balances. | Proposed shared | 12 | Primary Bitcoin materials; primary technical documentation; technical synthesis | Candidate; high priority |
| Validation | Practice | 3 | Computation - Mechanism: validation explains how nodes check whether data follows the rules. | Proposed shared | 12 | Primary Bitcoin materials; primary technical documentation; technical synthesis | Candidate; high priority |
| Scripting | Technology | 3 | State Machines - Implementation: scripting explains programmable spending conditions inside constrained transaction rules. | Proposed shared | 9 | Primary Bitcoin materials; technical documentation; serious technical synthesis | Candidate; proposal needed |
| Version Control | Technology | 3 | Open-Source Software - Implementation: version control explains how software changes are recorded and reviewed. | Proposed shared | 8 | Technical documentation; archives; academic books | Candidate; review scope |
| Software Forks | Mechanism | 3 | Open-Source Software - Mechanism: software forks explain how compatible or incompatible rule sets can emerge. | Proposed shared | 10 | Technical documentation; primary Bitcoin materials; serious competing interpretations | Candidate; proposal needed |
| Byzantine Fault Tolerance | Concept | 4 | Consensus Protocols - Predecessor: Byzantine fault tolerance frames the problem of agreement with unreliable participants. | Proposed shared | 10 | Original papers; academic books; serious technical synthesis | Candidate; proposal needed |
| Full Nodes | Practice | 4 | Validation - Implementation: full nodes explain user-side rule checking and rejection of invalid data. | Proposed shared | 12 | Primary Bitcoin materials; primary technical documentation; technical synthesis | Candidate; high priority |
| Mempool | System | 4 | Validation - Mechanism: the mempool explains pending transactions before block inclusion. | Proposed shared | 9 | Primary technical documentation; technical synthesis; primary Bitcoin materials | Candidate; proposal needed |
| Bitcoin Script | Technology | 4 | Scripting - Implementation: Bitcoin Script is the constrained language used for spend conditions. | Proposed shared | 9 | Primary Bitcoin materials; primary technical documentation; technical synthesis | Candidate; proposal needed |

## Networks

The Networks strand should explain propagation, topology, routing, payment networks and censorship resistance without assuming all networks are decentralised or trust-minimising.

Proposed "Also touches" relationships: Settlement also touches Money; Peer-to-Peer Networks also touches Computation; Censorship Resistance also touches Government & Power; Lightning Network also touches Money and Computation.

| Candidate node | Type | Coverage depth | Parent edge rationale(s) | Shared? | Score | Source categories | Status |
| --- | --- | ---: | --- | --- | ---: | --- | --- |
| Networks | System | 1 | Bitcoin - Foundation: networks explain how transactions, blocks and social coordination move at distance. | Existing | 10 | Technical history; academic books; institutional publications | Existing placeholder; expand later |
| Peer-to-Peer Networks | System | 2 | Networks - Foundation: peer-to-peer networks explain communication without a central relay. | Proposed shared | 12 | Original papers; technical documentation; academic books | Candidate; high priority |
| Internet Protocol Suite | Technology | 2 | Networks - Foundation: internet protocols explain the base communication environment Bitcoin uses. | No | 9 | Technical standards; academic books; archive sources | Candidate; proposal needed |
| Payment Networks | System | 2 | Networks - Implementation: payment networks show organised routes for moving value or payment messages. | Proposed shared | 10 | Institutional payment publications; academic books; technical standards | Candidate; proposal needed |
| Network Effects | Concept | 2 | Networks - Mechanism: network effects explain why adoption can reinforce acceptance and liquidity. | Proposed shared | 10 | Academic books; peer-reviewed research; serious competing interpretations | Candidate; proposal needed |
| Censorship Resistance | Concept | 2 | Networks - Mechanism: censorship resistance explains how routing and participation affect attempts to block activity. | Proposed shared | 10 | Academic research; technical documentation; serious competing interpretations | Candidate; source-sensitive |
| Telegraph Networks | System | 2 | Networks - Predecessor: telegraph networks show long-distance message infrastructure before packet-switched digital networks. | No | 8 | Archive or museum sources; academic books; peer-reviewed network history | Candidate; temporal anchor |
| Nodes | System | 3 | Peer-to-Peer Networks - Implementation: nodes explain the participants that relay, validate or serve network data. | Proposed shared | 11 | Primary Bitcoin materials; primary technical documentation; technical synthesis | Candidate; high priority |
| Packet Switching | Mechanism | 3 | Internet Protocol Suite - Predecessor: packet switching explains the older network model behind internet communication. | No | 8 | Technical standards; academic books; archive sources | Candidate; review scope |
| Routing | Mechanism | 3 | Internet Protocol Suite - Mechanism: routing explains how messages find paths across networks. | Proposed shared | 9 | Technical standards; academic books; technical synthesis | Candidate; proposal needed |
| Card Networks | Institution | 3 | Payment Networks - Example: card networks show fast user authorisation with later settlement. | Proposed shared | 8 | Institutional publications; legal materials; academic books | Candidate; proposal needed |
| Bank Transfers | System | 3 | Payment Networks - Example: bank transfers show account-based movement through regulated institutions. | Proposed shared | 9 | Institutional payment publications; legal materials; academic books | Candidate; proposal needed |
| Liquidity Networks | System | 3 | Network Effects - Implementation: liquidity networks explain how acceptance and available counterparties shape movement. | Proposed shared | 8 | Academic books; institutional publications; serious competing interpretations | Candidate; review scope |
| Lightning Network | System | 3 | Payment Networks - Implementation: Lightning shows a Bitcoin payment-channel network built around off-chain updates. | Proposed shared | 9 | Primary technical documentation; original papers; serious technical synthesis | Candidate; source-sensitive |
| Gossip Propagation | Mechanism | 4 | Nodes - Mechanism: gossip propagation explains how transactions and blocks spread without central broadcast. | Proposed shared | 11 | Primary technical documentation; technical synthesis; original papers | Candidate; high priority |
| Peer Discovery | Mechanism | 4 | Nodes - Mechanism: peer discovery explains how nodes find one another before relaying data. | Proposed shared | 9 | Primary technical documentation; technical synthesis; primary Bitcoin materials | Candidate; proposal needed |
| Payment Channels | Mechanism | 4 | Lightning Network - Mechanism: payment channels explain how repeated off-chain updates can settle through on-chain enforcement. | Proposed shared | 10 | Original papers; primary technical documentation; serious technical synthesis | Candidate; proposal needed |
| Channel Liquidity | Concept | 4 | Lightning Network - Mechanism: channel liquidity explains why off-chain payment capacity is directional and limited. | Proposed shared | 8 | Primary technical documentation; technical synthesis; serious competing interpretations | Candidate; review scope |
| Tor | Technology | 4 | Censorship Resistance - Implementation: Tor is a concrete routing technology relevant to privacy and network blocking. | Proposed shared | 8 | Technical documentation; academic research; serious competing interpretations | Candidate; human pruning |

## Government & Power

The Government & Power strand should not become an anti-government slogan or institutional defence. It should explain why states shape money, settlement and banking, which problems institutions try to solve, and which powers Bitcoin reduces, relocates or leaves untouched.

Proposed "Also touches" relationships: Monetary Sovereignty also touches Money; Capital Controls also touches Networks; Property Law also touches Philosophy & Time; Central Bank Settlement also touches Settlement and Banking Rails.

| Candidate node | Type | Coverage depth | Parent edge rationale(s) | Shared? | Score | Source categories | Status |
| --- | --- | ---: | --- | --- | ---: | --- | --- |
| Government & Power | Concept | 1 | Bitcoin - Foundation: this strand explains state capacity, law and institutional control around money and settlement. | Existing | 10 | Legislation; institutional publications; academic books | Existing placeholder; expand later |
| Monetary Sovereignty | Concept | 2 | Government & Power - Foundation: monetary sovereignty explains state authority over units, issuance, taxes and payment law. | Proposed shared | 12 | Legislation; institutional publications; academic books; serious competing interpretations | Candidate; high priority |
| Political Control | Concept | 2 | Government & Power - Foundation: political control frames how authority shapes monetary systems. | Existing shared | 12 | Legislation; institutional publications; academic books; serious competing interpretations | Existing draft; keep shared |
| Public Finance | Practice | 2 | Government & Power - Foundation: public finance explains why states need money, taxes, debt and spending capacity. | Proposed shared | 9 | Academic books; institutional publications; peer-reviewed history | Candidate; proposal needed |
| Banking Regulation | Practice | 2 | Government & Power - Institution: banking regulation explains state rules around institutions that hold and move money. | Proposed shared | 10 | Legislation; institutional publications; academic books | Candidate; proposal needed |
| Capital Controls | Practice | 2 | Government & Power - Institution: capital controls explain state limits on moving money across borders or systems. | Proposed shared | 10 | Legislation; institutional publications; peer-reviewed history | Candidate; source-sensitive |
| State Coinage | Practice | 3 | Monetary Sovereignty - Implementation: state coinage shows how authorities standardised and marked monetary objects. | Proposed shared | 10 | Archive or museum sources; academic books; legislation | Candidate; proposal needed |
| Taxation | Practice | 3 | Public Finance - Mechanism: taxation explains why states specify acceptable units and collect obligations. | Proposed shared | 10 | Legislation; institutional publications; academic books; serious competing interpretations | Candidate; proposal needed |
| Fiat Money | System | 3 | Monetary Sovereignty - Implementation: fiat money shows state-backed money without commodity redemption. | Existing shared | 11 | Legislation; central-bank publications; academic books; serious competing interpretations | Existing draft; keep shared |
| Central Banks | Institution | 3 | Monetary Sovereignty - Institution: central banks administer monetary policy, reserves and liquidity within legal mandates. | Existing shared | 12 | Central-bank publications; academic books; peer-reviewed history | Existing shared; keep shared |
| KYC/AML | Practice | 3 | Banking Regulation - Implementation: KYC/AML explains identity and compliance rules around financial access. | Proposed shared | 9 | Legislation; institutional publications; serious competing interpretations | Candidate; source-sensitive |
| Sanctions | Practice | 3 | Capital Controls - Implementation: sanctions show targeted restrictions on financial access and settlement. | Proposed shared | 9 | Legislation; institutional publications; peer-reviewed history | Candidate; source-sensitive |
| Gold Convertibility | System | 3 | Monetary Sovereignty - Implementation: gold convertibility explains a legal promise linking state money to metal redemption. | Proposed shared | 9 | Legislation; academic books; peer-reviewed history | Candidate; proposal needed |
| Monetary Policy | Practice | 3 | Central Banks - Mechanism: monetary policy explains tools used to influence credit, liquidity and money conditions. | Proposed shared | 10 | Central-bank publications; academic books; serious competing interpretations | Candidate; proposal needed |
| Seigniorage | Mechanism | 4 | State Coinage - Mechanism: seigniorage explains revenue and power from issuing money or controlling coinage. | Proposed shared | 10 | Academic books; peer-reviewed history; institutional publications | Candidate; proposal needed |
| Mints | Institution | 4 | State Coinage - Institution: mints show the administrative infrastructure that standardises, marks and controls coin production. | No | 8 | Archive or museum sources; legislation; academic books | Candidate; temporal anchor |
| Inflation and Debasement | Concept | 4 | Seigniorage - Mechanism: inflation and debasement explain different ways monetary holders can be diluted. | Proposed shared | 9 | Academic books; peer-reviewed history; serious competing interpretations | Candidate; source-sensitive |
| Legal Tender | Concept | 4 | Monetary Sovereignty - Institution: legal tender explains legally recognised settlement of certain debts. | Existing shared | 12 | Legislation; legal scholarship; institutional explainers | Existing draft; keep shared |
| Central Bank Settlement | Mechanism | 4 | Central Banks - Mechanism: central bank settlement explains how reserves finalise obligations between banks. | Proposed shared | 11 | Central-bank publications; payment-system documentation; legal materials | Candidate; high priority |
| Lender of Last Resort | Institution | 4 | Central Banks - Institution: lender of last resort explains emergency liquidity during banking stress. | Proposed shared | 10 | Central-bank publications; academic books; peer-reviewed history | Candidate; proposal needed |
| Financial Surveillance | Practice | 4 | KYC/AML - Mechanism: financial surveillance explains how compliance infrastructure can monitor transactions. | Proposed shared | 8 | Legislation; institutional publications; serious competing interpretations | Candidate; source-sensitive |
| Bretton Woods | Historical hinge | 4 | Gold Convertibility - Example: Bretton Woods is a concrete institutional hinge in modern convertibility history. | Proposed shared | 9 | Primary documents; academic books; peer-reviewed history | Candidate; proposal needed |

## Philosophy & Time

The Philosophy & Time strand should clarify concepts that recur throughout the atlas: time, property, finality, trust, value, coordination and incentives. It should stay concrete enough to serve routes rather than becoming a general philosophy survey.

Proposed "Also touches" relationships: Trust and Social Memory also touch Money; Property Rights also touches Government & Power and Custody; Incentives also touches Mining and Consensus Protocols; Finality also touches Settlement and Blockchain.

| Candidate node | Type | Coverage depth | Parent edge rationale(s) | Shared? | Score | Source categories | Status |
| --- | --- | ---: | --- | --- | ---: | --- | --- |
| Philosophy & Time | Concept | 1 | Bitcoin - Foundation: this strand explains the ideas beneath scarce records, future value and trusted history. | Existing | 10 | Academic books; peer-reviewed research; serious competing interpretations | Existing placeholder; expand later |
| Time Preference | Concept | 2 | Philosophy & Time - Foundation: time preference explains how present and future value are compared. | Proposed shared | 9 | Academic books; serious competing interpretations; peer-reviewed research | Candidate; source-sensitive |
| Property Rights | Concept | 2 | Philosophy & Time - Foundation: property rights explain claims of control, exclusion and transfer. | Proposed shared | 11 | Academic books; legal materials; serious competing interpretations | Candidate; high priority |
| Finality | Concept | 2 | Philosophy & Time - Foundation: finality explains why irreversible or reliable settlement matters over time. | Proposed shared | 11 | Academic books; legal materials; payment-system publications | Candidate; high priority |
| Trust | Concept | 2 | Philosophy & Time - Foundation: trust explains reliance on people, institutions, rules or verification. | Existing shared | 12 | Academic books; peer-reviewed research; serious competing interpretations | Existing draft; keep shared |
| Coordination Problems | Concept | 2 | Philosophy & Time - Foundation: coordination problems explain why shared expectations and rules are needed. | Proposed shared | 10 | Academic books; peer-reviewed research; serious competing interpretations | Candidate; proposal needed |
| Incentives | Concept | 2 | Philosophy & Time - Mechanism: incentives explain why participants may follow or attack a system's rules. | Proposed shared | 10 | Academic books; peer-reviewed research; serious competing interpretations | Candidate; proposal needed |
| Saving | Practice | 3 | Time Preference - Implementation: saving explains the practical act of carrying value into the future. | Proposed shared | 8 | Academic books; institutional publications; serious competing interpretations | Candidate; review scope |
| Calendars and Timekeeping | Practice | 3 | Philosophy & Time - Foundation: calendars and timekeeping explain shared ordering of time before digital timestamps. | No | 8 | Archive or museum sources; academic books; peer-reviewed history | Candidate; temporal anchor |
| Ownership | Concept | 3 | Property Rights - Mechanism: ownership explains the recognised claim behind holding and transferring assets. | Proposed shared | 9 | Legal materials; academic books; serious competing interpretations | Candidate; proposal needed |
| Irreversibility | Concept | 3 | Finality - Mechanism: irreversibility explains why some transfers become practically or legally hard to undo. | Proposed shared | 9 | Legal materials; technical documentation; academic books | Candidate; proposal needed |
| Social Memory | Concept | 3 | Trust - Predecessor: social memory shows how communities record obligation before formal ledgers. | Existing shared | 11 | Academic books; peer-reviewed anthropology; serious competing interpretations | Existing shared; source review |
| Common Knowledge | Concept | 3 | Coordination Problems - Mechanism: common knowledge explains why people need shared expectations to coordinate. | Proposed shared | 9 | Academic books; peer-reviewed research; serious competing interpretations | Candidate; proposal needed |
| Game Theory | Concept | 3 | Incentives - Mechanism: game theory gives tools for analysing strategic behaviour under rules. | Proposed shared | 8 | Academic books; peer-reviewed research; serious competing interpretations | Candidate; review scope |
| Deferred Consumption | Concept | 4 | Saving - Mechanism: deferred consumption explains the time trade-off behind holding value. | Proposed shared | 7 | Academic books; serious competing interpretations; peer-reviewed research | Candidate; human pruning |
| Possession | Concept | 4 | Ownership - Predecessor: possession explains physical control before legal or cryptographic claims are considered. | Proposed shared | 8 | Legal materials; academic books; anthropology | Candidate; proposal needed |
| Settlement Finality | Concept | 4 | Finality - Implementation: settlement finality explains finality in payment and legal contexts. | Proposed shared | 11 | Payment-system publications; legal materials; institutional publications | Candidate; high priority |
| Schelling Points | Concept | 4 | Common Knowledge - Mechanism: Schelling points explain focal choices that help coordination without direct command. | Proposed shared | 8 | Academic books; peer-reviewed research; serious competing interpretations | Candidate; review scope |

## Existing Money Node Review Flags

| Existing node | Review flag | Planning note |
| --- | --- | --- |
| Bitcoin as Money | Broad by design | Keep as the Money strand entry; avoid making it carry all monetary theory. |
| Scarcity | Strong shared node | Connect carefully to Energy and Philosophy & Time without implying scarcity alone creates value. |
| Costly Production | Potentially misplaced by coverage depth | It currently sits after Commodity Money but likely deserves a shorter shared route through Scarcity or Energy. |
| Settlement | Strong shared node | Keep distinct from Digital Payments and Banking Rails. |
| Custody | Strong shared node | Future links to Private Keys and Property Rights should not duplicate the node. |
| Ledgers | Strong shared node | Keep broad enough for money records but not so broad that it absorbs Blockchain and Social Memory. |
| Blockchain | Strong shared node | Avoid duplicating under Computation, Cryptography and Networks. |
| Social Memory | Existing shared node | Good canonical bridge between Ledgers, Trust and Philosophy & Time. |
| Political Control | Strong shared node | Keep tone careful; avoid "government versus Bitcoin" framing. |
| Central Banks | Existing shared node | Good shared node for Fiat Money and Political Control; also likely touches Banking Rails. |
| Legal Tender | Strong shared node | Keep narrow; do not treat legal tender as the whole basis of fiat value. |

## Proposed Implementation Order

These are future implementation batches only. Each batch still requires bubble proposals, source inventory, human approval and small-batch review before public nodes are added.

| Batch | Nodes | Why first |
| --- | --- | --- |
| 1 | Social Memory, Ledgers, Tally Sticks, Double-entry Bookkeeping, Settlement, Physical Settlement, Custody, Bearer Assets, Scarcity, Gold | Establishes the monetary-memory and custody backbone before adding newer mechanism-heavy routes. |
| 2 | Bitcoin as Money, Money Functions, Unit of Account, Medium of Exchange, Store of Value, Liquidity, Purchasing Power, Clearing Houses | Connects the historical money backbone to functional monetary concepts and existing Money nodes. |
| 3 | Monetary Sovereignty, State Coinage, Mints, Taxation, Fiat Money, Central Banks, Legal Tender, Seigniorage, Gold Convertibility, Bretton Woods | Builds state-money history with institutionally sourceable nodes and avoids vague government-versus-Bitcoin framing. |
| 4 | Industrial Power, Steam Power, Electricity, Electric Grids, Energy Markets, Proof of Work, Bitcoin Mining, Difficulty Adjustment, Hashrate, Security Budget | Connects physical and industrial energy history to proof-of-work security without making chronology do all the work. |
| 5 | Classical Ciphers, Public-Key Cryptography, Digital Signatures, Private Keys, Hash Functions, Hashcash, Digital Cash, Telegraph Networks, Peer-to-Peer Networks, Nodes | Establishes older secrecy and communications backbones before the cryptographic and network mechanisms most needed by Bitcoin. |

## Definition Of Planning Done

This map is ready for human pruning when:

- duplicate candidates have been reviewed
- shared-node candidates have approved incoming parent rationales
- historical era and temporal kind have been recorded for candidate proposals
- source categories have been converted into source inventories
- the first implementation batch has bubble proposals
- no route is retained merely to reach depth four
