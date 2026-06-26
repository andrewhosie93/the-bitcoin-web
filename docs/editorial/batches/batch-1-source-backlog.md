# Batch 1 Source Backlog

This is a source-preparation document only. It does not add citations, does not mark any public node sourced or reviewed, and does not approve Batch 1 for implementation.

## Scope

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

The goal is to turn source categories into reviewable source inventories before any public implementation or status promotion.

## Source Backlog Table

| Node | Current sourceIds | Missing source categories | Candidate source types | Claims requiring support | Primary sources needed? | Institutional sources needed? | Competing interpretations needed? | Human-review notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bitcoin as Money | bitcoin-whitepaper; bitcoin-core-repo; jevons-money-mechanism; menger-origin-money; graeber-debt | Bitcoin primary materials; monetary functions; monetary history; serious competing interpretations | Bitcoin primary materials; Bitcoin Core documentation; monetary history; peer-reviewed economic history; serious competing interpretations | Bitcoin can be analysed as a monetary object; Bitcoin has no central issuer; monetary use depends on social use, valuation and institutional context. | Yes | No, except where discussing regulated money or payment infrastructure. | Yes | Must not read as adoption certainty or universal money status. Existing sourceIds need human claim mapping before the node can advance. |
| Scarcity | bitcoin-whitepaper; bitcoin-core-repo; jevons-money-mechanism; menger-origin-money | Monetary theory; issuance rules; commodity-money comparison; value theory cautions | Bitcoin primary materials; Bitcoin Core documentation; monetary history; peer-reviewed economic history; serious competing interpretations | Bitcoin issuance rules create a credible supply limit; scarcity differs from rarity; scarcity alone does not create value. | Yes | No | Yes | Keep Energy as Also touches only unless a later reviewed edge justifies navigation. Avoid claiming Bitcoin scarcity is the same as commodity scarcity. |
| Settlement | none | Payment-system documentation; legal settlement; clearing; practical finality; Bitcoin confirmation mechanics | Payment-system documentation; legal scholarship; legislation or institutional legal explainers; technical protocol documentation; Bitcoin primary materials | A payment can be final enough to rely on; Bitcoin confirmations are technical evidence, not automatic legal finality; clearing and settlement are distinct. | Yes | Yes | Yes, especially around finality and reversibility. | Source scope is not clear enough for approval. Separate technical confirmation, clearing, legal settlement and practical irreversibility before adding sourceIds. |
| Custody | none | Legal custody; self-custody; key control; institutional custody; operational risk | Legal scholarship; institutional custody materials; Bitcoin primary materials; Bitcoin Core documentation; technical security documentation | Control of keys or custodial claims determines who can spend; self-custody changes risk rather than removing it; custodians recreate trust relationships. | Yes | Yes | Yes, where custody rights and practical control diverge. | Needs sources that distinguish technical control, legal claim and institutional custody. Do not imply self-custody removes all trust or risk. |
| Ledgers | none | Accounting history; archive or museum sources; social records; technical ledger comparison | Accounting history; archive or museum sources; peer-reviewed economic history; technical protocol documentation | Ledgers record claims and transfers over time; ledger history is not a simple line toward blockchain; Bitcoin records spendable outputs and transaction history. | Yes, for Bitcoin-specific ledger mechanics. | No, except for institutional record systems. | Yes, for historical interpretation. | Avoid linear histories and claims that all money is ledger money. Source historical examples before making broad claims. |
| Trust | none | Social theory; monetary trust; technical verification; institutional reliance; trust-minimisation critique | Social theory; monetary history; technical protocol documentation; serious competing interpretations | Bitcoin shifts trust rather than eliminating it; users still rely on software, incentives, peers, institutions and their own behaviour; trust differs by route. | Yes, for Bitcoin mechanism claims. | Yes, where institutions are discussed. | Yes | Must distinguish trust in issuers, custodians, software, incentives, users and institutions. Money and Philosophy & Time may require separate treatment. |
| Blockchain | none | Bitcoin technical documentation; data-structure explanation; consensus context; history of term and use | Bitcoin primary materials; Bitcoin Core documentation; technical protocol documentation; serious technical synthesis | Bitcoin uses an ordered chain of blocks; independent verification matters; a blockchain alone does not reproduce Bitcoin security properties. | Yes | No | Yes, where generic blockchain claims are discussed. | Avoid generic blockchain hype. Do not imply every blockchain inherits Bitcoin's security, decentralisation or settlement properties. |
| Central Banks | none | Central-bank functions; reserves; settlement; liquidity; monetary policy; institutional variation | Central-bank publications; institutional publications; academic books; peer-reviewed economic history; monetary history | Central banks shape reserves, settlement, liquidity and monetary policy in many modern systems; central-bank mandates and structures vary. | No, unless quoting statutes or foundational documents. | Yes | Yes | Needs institutional and historical sources. Do not present central banks as uniform, neutral, complete or simply anti-Bitcoin. |
| Legal Tender | none | Legal tender law; debt settlement; jurisdictional limits; relation to fiat and monetary sovereignty | Legislation; legal scholarship; institutional legal explainers; monetary history; serious competing interpretations | Legal tender concerns recognised means for settling certain debts; it does not mean universal acceptance for every payment; it does not explain all monetary value. | No, unless primary legislation is used. | Yes | Yes | Keep narrow. Source jurisdiction-specific claims carefully and avoid universal statements. |

## Guardrails To Carry Into Source Selection

### Trust

- Must not imply Bitcoin eliminates trust.
- Must distinguish trust in issuers, custodians, software, incentives, users and institutions.
- May need separate route treatments in Money and Philosophy & Time.

### Settlement

- Must separate technical confirmation, clearing, legal settlement and practical irreversibility.
- Must not equate Bitcoin confirmations with legal finality.
- May need separate route treatments in Money and Networks.

### Bitcoin as Money

- Must not read as adoption certainty.
- Should frame Bitcoin as a monetary candidate or monetary object rather than declaring universal money status.
- Should use source review to separate descriptive monetary functions from advocacy claims.

## Source-Record Decisions In This Pass

- No new source records were added to `content/sources.json`.
- No sourceIds were added to `content/nodes.json`.
- Existing sourceIds for Bitcoin as Money and Scarcity remain useful candidates, but they still require human inspection before either node can advance beyond `source-needed`.
- Settlement, Custody, Ledgers, Trust, Blockchain, Central Banks and Legal Tender remain without sourceIds in live node data and should not be advanced until real source records are selected and reviewed.
