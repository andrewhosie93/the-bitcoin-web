# Batch 1 Source Inventory

This is a source-inventory document only. It does not mark Batch 1 approved, does not change `reviewStatus`, does not change `gateStatus`, and does not implement public bubbles.

The source records added in this pass are review candidates. A `sourceIds` link means a source appears relevant enough for human inspection; it does not mean the node is sourced, reviewed, or ready for public expansion.

## 1. Scope

Batch 1 covers the existing Money core:

- Bitcoin as Money
- Scarcity
- Settlement
- Custody
- Ledgers
- Trust
- Blockchain
- Central Banks
- Legal Tender

The purpose of this pass is to move from source categories to a concrete bibliography inventory so editors can review claims against identifiable sources before any depth-four implementation begins.

## 2. Source Records Added

| Source ID | Source type | Main use | Confidence as candidate | Review caution |
| --- | --- | --- | --- | --- |
| `bitcoin-devguide-block-chain` | Technical documentation | Blockchain mechanics, confirmations, UTXOs, validation and scarcity mechanics | High | Needs line-level claim mapping before final use. |
| `bitcoin-devguide-wallets` | Technical documentation | Wallets, private keys, backups and spending control | High | Supports technical custody, not legal custody by itself. |
| `bitcoin-secure-your-wallet` | Technical guidance | Operational self-custody risk | High | User guidance, not a legal or institutional authority. |
| `cpmi-payment-systems-glossary` | Institutional publication | Settlement, payment-system terminology, clearing and finality distinctions | High | Institutional definitions need careful translation into public prose. |
| `cpmi-iosco-pfmi` | Institutional publication | Financial market infrastructure, settlement finality, custody risk and oversight | High | Mostly institutional finance; avoid overextending to all payments. |
| `occ-il1170-crypto-custody` | Institutional publication | U.S. national-bank crypto custody authority | Medium | Jurisdiction-specific and not a general custody theory. |
| `princeton-bitcoin-technologies` | Academic technical book | Bitcoin mechanics, consensus, wallets, incentives and security assumptions | High | Useful synthesis, but primary claims still need primary sources where possible. |
| `mastering-bitcoin-third-edition` | Technical book | Transactions, keys, wallets, blocks, mining and network operation | High | Good technical synthesis; check edition-specific wording before quoting. |
| `schmandt-besserat-writing-came-about` | Academic book | Historical accounting, tokens and record systems | Medium | Needs human inspection before any broad ledger-history claim. |
| `ingham-nature-of-money` | Academic book | Money as social relation, trust, credit and institutions | Medium | Competing interpretation; use alongside other monetary histories. |
| `federal-reserve-fed-explained` | Institutional publication | Central-bank functions in the U.S. system | High | U.S.-specific; do not generalise to all central banks. |
| `bank-of-england-legal-tender` | Institutional publication | Narrow UK legal-tender explanation | High | UK-specific; useful to correct common overstatements. |
| `royal-mint-legal-tender-guidelines` | Institutional publication | UK legal-tender limits and coin guidance | High | UK-specific and operational, not a universal legal doctrine. |
| `us-code-legal-tender` | Legislation | U.S. statutory legal-tender rule | High | Jurisdiction-specific; do not treat as global law. |

## 3. Node Inventory

### Bitcoin as Money

Current sourceIds:

- `bitcoin-whitepaper`
- `bitcoin-core-repo`
- `jevons-money-mechanism`
- `menger-origin-money`
- `graeber-debt`
- `princeton-bitcoin-technologies`
- `ingham-nature-of-money`

Candidate support:

| Source | Category | Why relevant | Confidence |
| --- | --- | --- | --- |
| `bitcoin-whitepaper` | Primary Bitcoin material | Anchors Bitcoin's peer-to-peer cash design and issuerless transfer model. | High |
| `bitcoin-core-repo` | Primary implementation | Supports rule-enforcement and implementation claims after pinning to a release or commit. | Medium |
| `jevons-money-mechanism` | Academic or historical book | Supplies a classic monetary-functions frame. | Medium |
| `menger-origin-money` | Original monetary theory article | Supplies a commodity/emergent-money interpretation to compare carefully. | Medium |
| `graeber-debt` | Serious competing interpretation | Counters simple barter-origin and commodity-only stories. | Medium |
| `princeton-bitcoin-technologies` | Academic technical book | Explains Bitcoin mechanics without relying only on the white paper. | High |
| `ingham-nature-of-money` | Serious competing interpretation | Helps prevent Bitcoin-as-money from becoming narrowly commodity-theory shaped. | Medium |

Claims requiring support:

- Bitcoin can be analysed as a monetary object without being declared universally accepted money.
- Bitcoin has no central monetary issuer at the base layer.
- Monetary use depends on social coordination, liquidity, institutions and judgement beyond code.

Unsupported or restricted claims:

- Do not claim Bitcoin has already fulfilled every monetary function.
- Do not claim monetary status follows automatically from protocol design.
- Do not imply anthropology, economics and technical Bitcoin sources agree on one origin story for money.

Human-review notes:

- This node still needs claim-level mapping across technical, economic and anthropological sources.
- It should remain `source-needed` until the public wording is checked against specific source passages.

### Scarcity

Current sourceIds:

- `bitcoin-whitepaper`
- `bitcoin-core-repo`
- `jevons-money-mechanism`
- `menger-origin-money`
- `bitcoin-devguide-block-chain`
- `mastering-bitcoin-third-edition`

Candidate support:

| Source | Category | Why relevant | Confidence |
| --- | --- | --- | --- |
| `bitcoin-whitepaper` | Primary Bitcoin material | Supports the original issuance analogy and proof-of-work minting frame. | High |
| `bitcoin-core-repo` | Primary implementation | Supports consensus-rule claims after pinning to release or commit. | Medium |
| `jevons-money-mechanism` | Academic or historical book | Helps distinguish scarcity from wider monetary usefulness. | Medium |
| `menger-origin-money` | Original monetary theory article | Supplies saleability and commodity-money context. | Medium |
| `bitcoin-devguide-block-chain` | Technical documentation | Supports confirmation, validation and block-chain mechanics connected to issuance discipline. | High |
| `mastering-bitcoin-third-edition` | Technical book | Supports technical explanation of issuance, mining and validation. | High |

Claims requiring support:

- Bitcoin issuance is governed by consensus rules that validating nodes can reject when violated.
- Scarcity differs from rarity and does not alone create value.
- Bitcoin scarcity is technical and social, not identical to commodity scarcity.

Unsupported or restricted claims:

- Do not claim scarcity alone causes monetary value.
- Do not present stock-to-flow or deterministic price claims without separate critical sources.
- Do not promote an Energy navigable edge merely because mining has costs.

Human-review notes:

- Further competing interpretations of value and artificial scarcity may be needed before final prose.

### Settlement

Current sourceIds:

- `cpmi-payment-systems-glossary`
- `cpmi-iosco-pfmi`
- `bitcoin-devguide-block-chain`

Candidate support:

| Source | Category | Why relevant | Confidence |
| --- | --- | --- | --- |
| `cpmi-payment-systems-glossary` | Institutional publication | Defines payment, clearing, settlement and finality terminology. | High |
| `cpmi-iosco-pfmi` | Institutional publication | Gives formal financial-market-infrastructure treatment of settlement finality and risk. | High |
| `bitcoin-devguide-block-chain` | Technical documentation | Supports Bitcoin confirmation and chain-reorganisation mechanics. | High |

Claims requiring support:

- Settlement, clearing and payment messaging are distinct.
- Bitcoin confirmations provide technical evidence of increasing reversal difficulty.
- Technical confirmation is not automatically legal finality.

Unsupported or restricted claims:

- Do not equate Bitcoin confirmations with court-recognised final settlement.
- Do not imply card authorisation, bank settlement and Bitcoin confirmation are the same kind of event.
- Do not claim settlement is irreversible in every Bitcoin context.

Human-review notes:

- This node needs legal scholarship or jurisdictional legal materials before making legal-finality claims.
- Networks and Money contexts should stay separate in the review notes.

### Custody

Current sourceIds:

- `bitcoin-devguide-wallets`
- `bitcoin-secure-your-wallet`
- `occ-il1170-crypto-custody`
- `cpmi-iosco-pfmi`

Candidate support:

| Source | Category | Why relevant | Confidence |
| --- | --- | --- | --- |
| `bitcoin-devguide-wallets` | Technical documentation | Supports private-key and wallet-control mechanics. | High |
| `bitcoin-secure-your-wallet` | Technical guidance | Supports operational risks around backups, theft and user responsibility. | High |
| `occ-il1170-crypto-custody` | Institutional publication | Supports an institutional custody example for crypto assets in U.S. national banking. | Medium |
| `cpmi-iosco-pfmi` | Institutional publication | Supports custody risk and safekeeping in financial infrastructure. | Medium |

Claims requiring support:

- Control of private keys determines technical spending ability.
- Custody can mean self-control, institutional safekeeping or a legal claim, depending on context.
- Self-custody changes risk rather than removing risk.

Unsupported or restricted claims:

- Do not claim self-custody removes all trust.
- Do not conflate legal ownership, practical control and cryptographic signing ability.
- Do not generalise U.S. custody rules to all jurisdictions.

Human-review notes:

- Needs stronger legal and historical custody sources before final public treatment.

### Ledgers

Current sourceIds:

- `schmandt-besserat-writing-came-about`
- `bitcoin-devguide-block-chain`
- `mastering-bitcoin-third-edition`

Candidate support:

| Source | Category | Why relevant | Confidence |
| --- | --- | --- | --- |
| `schmandt-besserat-writing-came-about` | Academic book | Candidate historical source for tokens, accounting and writing. | Medium |
| `bitcoin-devguide-block-chain` | Technical documentation | Supports Bitcoin's recorded transaction and UTXO mechanics. | High |
| `mastering-bitcoin-third-edition` | Technical book | Supports explanation of Bitcoin as a record of transactions and spendable outputs. | High |

Claims requiring support:

- Ledgers record claims, obligations or transfers across time.
- Bitcoin's ledger is not merely a database; it depends on validation, incentives and rules.
- Historical record systems should be described without a false line to blockchain.

Unsupported or restricted claims:

- Do not claim ledgers began as money.
- Do not claim accounting history culminates naturally in Bitcoin.
- Do not use a single ancient-history source as evidence for all ledger history.

Human-review notes:

- Needs archive, museum or peer-reviewed accounting-history sources before broad civilisational claims.

### Trust

Current sourceIds:

- `ingham-nature-of-money`
- `princeton-bitcoin-technologies`
- `bitcoin-devguide-block-chain`

Candidate support:

| Source | Category | Why relevant | Confidence |
| --- | --- | --- | --- |
| `ingham-nature-of-money` | Academic book | Supports trust, credit and monetary institutions as social relations. | Medium |
| `princeton-bitcoin-technologies` | Academic technical book | Supports Bitcoin security assumptions, incentives and verification. | High |
| `bitcoin-devguide-block-chain` | Technical documentation | Supports technical verification and confirmation mechanics. | High |

Claims requiring support:

- Bitcoin shifts trust rather than eliminating trust.
- Users still rely on software, incentives, network participants, custody choices and social coordination.
- Trust means different things in Money, Philosophy & Time, Cryptography and Government routes.

Unsupported or restricted claims:

- Do not call Bitcoin trustless without qualification.
- Do not turn Trust into a universal parent for unrelated claims.
- Do not conflate social trust, institutional trust and cryptographic verification.

Human-review notes:

- Needs additional social theory or philosophy sources before the Philosophy & Time placement can be approved.

### Blockchain

Current sourceIds:

- `bitcoin-whitepaper`
- `bitcoin-devguide-block-chain`
- `mastering-bitcoin-third-edition`
- `princeton-bitcoin-technologies`

Candidate support:

| Source | Category | Why relevant | Confidence |
| --- | --- | --- | --- |
| `bitcoin-whitepaper` | Primary Bitcoin material | Original design source for proof-of-work chain and peer-to-peer cash context. | High |
| `bitcoin-devguide-block-chain` | Technical documentation | Supports block-chain structure, confirmations, forks and validation. | High |
| `mastering-bitcoin-third-edition` | Technical book | Supports block, transaction, mining and network explanations. | High |
| `princeton-bitcoin-technologies` | Academic technical book | Gives critical technical synthesis of consensus and security assumptions. | High |

Claims requiring support:

- Bitcoin uses an ordered chain of blocks to coordinate transaction history.
- Reorganisation risk and confirmation depth should be explained carefully.
- A blockchain alone does not reproduce Bitcoin's security properties.

Unsupported or restricted claims:

- Do not make generic blockchain claims from Bitcoin-specific sources.
- Do not imply every blockchain is decentralised, secure or useful.
- Do not present blockchain as the inevitable successor to all ledgers.

Human-review notes:

- The Computation placement should stay focused on data structure plus protocol context, not generic blockchain branding.

### Central Banks

Current sourceIds:

- `federal-reserve-fed-explained`
- `cpmi-iosco-pfmi`
- `cpmi-payment-systems-glossary`

Candidate support:

| Source | Category | Why relevant | Confidence |
| --- | --- | --- | --- |
| `federal-reserve-fed-explained` | Institutional publication | Supports U.S. central-bank functions and limits. | High |
| `cpmi-iosco-pfmi` | Institutional publication | Supports central-bank oversight and financial-market infrastructure context. | Medium |
| `cpmi-payment-systems-glossary` | Institutional publication | Supports payment and settlement-system terminology. | Medium |

Claims requiring support:

- Central banks influence reserves, liquidity, settlement and monetary policy in many modern systems.
- Central-bank structures, mandates and independence vary by jurisdiction.
- Bitcoin lacks central-bank discretion at the base layer, but not every form of coordination or market dependence.

Unsupported or restricted claims:

- Do not treat all central banks as identical.
- Do not frame central banks simply as villains or neutral technocrats.
- Do not generalise Federal Reserve descriptions to the Bank of England, ECB or other institutions.

Human-review notes:

- Needs peer-reviewed central-bank history and serious competing interpretations before final approval.

### Legal Tender

Current sourceIds:

- `bank-of-england-legal-tender`
- `royal-mint-legal-tender-guidelines`
- `us-code-legal-tender`

Candidate support:

| Source | Category | Why relevant | Confidence |
| --- | --- | --- | --- |
| `bank-of-england-legal-tender` | Institutional publication | Supports the narrow UK meaning of legal tender. | High |
| `royal-mint-legal-tender-guidelines` | Institutional publication | Supports UK legal-tender limits and common misconceptions. | High |
| `us-code-legal-tender` | Legislation | Supports U.S. statutory legal-tender language. | High |

Claims requiring support:

- Legal tender concerns recognised means for settling certain debts within a jurisdiction.
- Legal tender does not necessarily mean universal acceptance for every payment.
- Bitcoin usually depends on voluntary acceptance rather than legal-tender privilege.

Unsupported or restricted claims:

- Do not claim legal tender explains all fiat-money value.
- Do not conflate legal tender, tax receivability, monetary sovereignty and central-bank money.
- Do not universalise UK or U.S. law.

Human-review notes:

- Needs legal scholarship and jurisdictional care before public prose can be treated as sourced.

## 4. Batch Source Status After This Pass

| Node | SourceIds present after this pass? | Source status remains | Review position |
| --- | --- | --- | --- |
| Bitcoin as Money | Yes | `source-needed` | Candidate bibliography expanded; claim mapping still required. |
| Scarcity | Yes | `source-needed` | Candidate technical sources added; value-theory caution remains. |
| Settlement | Yes | `source-needed` | Payment-system sources added; legal-finality sources still needed. |
| Custody | Yes | `source-needed` | Technical and institutional sources added; legal custody still needs care. |
| Ledgers | Yes | `source-needed` | Initial history and technical sources added; broader history still thin. |
| Trust | Yes | `source-needed` | Technical and social-money sources added; philosophy sources still thin. |
| Blockchain | Yes | `source-needed` | Technical sources added; generic blockchain claims remain restricted. |
| Central Banks | Yes | `source-needed` | Institutional sources added; historical and comparative sources still needed. |
| Legal Tender | Yes | `source-needed` | UK and U.S. sources added; legal scholarship still needed. |

Batch 1 now has no node without `sourceIds`, but every node remains `source-needed`.

## 5. Claims Still Requiring Stronger Support

- Settlement: legal finality, court recognition, clearing-house settlement and practical irreversibility need separate treatment.
- Custody: legal custody, property claims and institutional duties need jurisdiction-specific legal sources.
- Ledgers: broad historical claims need archive, museum or peer-reviewed accounting-history sources.
- Trust: Philosophy & Time placement needs social theory or philosophy sources, not only technical Bitcoin material.
- Central Banks: comparative central-bank history and mandate variation need academic or institutional sources beyond the Federal Reserve.
- Legal Tender: claims beyond UK and U.S. examples need jurisdiction-specific law or legal scholarship.
- Bitcoin as Money and Scarcity: monetary theory needs careful balancing between commodity, credit, chartalist and anthropological interpretations.

## 6. Gate Position

Batch 1 should remain `blocked-pending-human-review`.

The source backlog has moved from "missing source records" to "candidate records need human inspection and claim mapping". No node should advance beyond `source-needed` until editors verify the relevant claims against the candidate sources and decide whether additional sources are required.
