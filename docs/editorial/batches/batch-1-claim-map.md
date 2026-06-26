# Batch 1 Claim Map

This is a claim-mapping document only. It does not approve Batch 1, does not change public node prose, does not change `sourceIds`, and does not mark any node reviewed or sourced.

The sourceIds below are candidate supports or complications for human review. They are not final citations.

## 1. Summary

| Node | Claims mapped | High-risk claims | Unsupported or too broad claims | Main review need |
| --- | ---: | ---: | ---: | --- |
| Bitcoin as Money | 13 | 3 | 0 | Claim-level balance between technical Bitcoin sources and competing monetary interpretations. |
| Scarcity | 16 | 2 | 0 | Keep scarcity distinct from value and avoid overly absolute supply-rule language. |
| Settlement | 12 | 5 | 0 | Separate technical confirmation, clearing, settlement, legal finality and practical irreversibility. |
| Custody | 13 | 5 | 1 | Separate private-key control, legal ownership and institutional custody. |
| Ledgers | 12 | 4 | 1 | Add stronger ledger history sources before broad civilisational claims. |
| Trust | 11 | 4 | 0 | Avoid "trustless" overreach and distinguish social, institutional and technical trust. |
| Blockchain | 11 | 4 | 0 | Keep Bitcoin-specific chain claims separate from generic blockchain claims. |
| Central Banks | 15 | 7 | 4 | Add comparative central-bank history and mandate sources before rewrite. |
| Legal Tender | 17 | 7 | 0 | Preserve jurisdictional limits and avoid overclaiming legal tender's monetary role. |

Total claims mapped: 120.

## 2. Weak Claim Register

| Claim ID | Issue | Recommendation |
| --- | --- | --- |
| BAM-05 | Collapses several monetary properties into one Bitcoin sentence; may read promotional without careful sourcing. | Keep idea, but require claim-level mapping and possibly split in rewrite. |
| BAM-10 | "Inspected and rejected when invalid" needs precise routing through validating nodes and social coordination. | Keep after technical review; avoid implying all users inspect directly. |
| SCA-14 | "Would require social and network acceptance" is directionally right but too absolute if read as governance certainty. | Keep with careful wording after human review. |
| SET-03 | "Settlement through network confirmations, not bank reversal rules" risks collapsing legal and technical finality. | Rewrite before approval. |
| SET-10 | "Confirmations make reversal increasingly difficult" needs reorganisation-risk precision. | Keep with stronger technical explanation. |
| CUS-03 | Self-custody versus custodians is sound, but "older trust relationships" is broad. | Keep after historical and institutional review. |
| CUS-08 | Custodian powers and failures are broad institutional/legal claims. | Needs stronger legal and institutional sources. |
| LED-05 | "They let money exist as a record" can overstate ledger-money history. | Rewrite or narrow unless stronger sources support it. |
| LED-12 | "Ledger-first monetary system" is useful but may overstate Bitcoin ontology. | Rewrite carefully around UTXOs and validation. |
| TRU-08 | Trust shifts toward rules, cryptographic verification and software; this needs careful source separation. | Keep after technical and philosophical review. |
| BLK-09 | "Defines which coins exist" is useful shorthand but should be tied to accepted valid UTXOs/history. | Rewrite for precision. |
| CB-05 | Central-bank development history exceeds current institutional sources. | Needs stronger historical sources before rewrite. |
| CB-06 | Modern central-bank functions vary by jurisdiction. | Needs comparative qualification. |
| CB-12 | Bitcoin/base-layer contrast is strong but risks promotional simplification. | Rewrite with caveats. |
| LT-08 | "Legal system needs a recognised unit and medium" needs jurisdictional legal support. | Keep only with legal qualification. |
| LT-12 | Reasons people accept Bitcoin are plausible but not sourced by current legal-tender records. | Needs stronger Bitcoin adoption/use sources or rewrite. |

## 3. Bitcoin as Money

Current sourceIds: `bitcoin-whitepaper`; `bitcoin-core-repo`; `jevons-money-mechanism`; `menger-origin-money`; `graeber-debt`; `princeton-bitcoin-technologies`; `ingham-nature-of-money`.

| ID | Field source | Claim text | Claim type | Risk | SourceIds that may support it | SourceIds that may complicate or contest it | Support status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BAM-01 | summary | Bitcoin combines monetary rules, settlement, and custody without a central issuer. | technical; economic | medium | `bitcoin-whitepaper`; `bitcoin-core-repo`; `princeton-bitcoin-technologies` | `ingham-nature-of-money`; `graeber-debt` | partially supported |
| BAM-02 | surface | Bitcoin is a digital asset that can be held and transferred without a central issuer. | technical | low | `bitcoin-whitepaper`; `bitcoin-core-repo`; `princeton-bitcoin-technologies` | none identified | likely supported |
| BAM-03 | surface | Whether Bitcoin functions as money depends on how people use and value it. | economic; philosophical | medium | `jevons-money-mechanism`; `menger-origin-money`; `ingham-nature-of-money` | `graeber-debt` | partially supported |
| BAM-04 | deeper/curious | Money coordinates measurement, saving, payment, and settlement across people who may not know or trust one another. | economic; philosophical | medium | `jevons-money-mechanism`; `ingham-nature-of-money` | `graeber-debt`; `menger-origin-money` | needs human inspection |
| BAM-05 | deeper/curious | Bitcoin combines predictable issuance rules, divisible units, transferability over a public ledger, and bearer-style control through private keys. | technical; economic | high | `bitcoin-whitepaper`; `bitcoin-core-repo`; `princeton-bitcoin-technologies` | `ingham-nature-of-money` | partially supported |
| BAM-06 | deeper/curious | A protocol can define valid coins and valid transfers. | technical | low | `bitcoin-whitepaper`; `bitcoin-core-repo`; `princeton-bitcoin-technologies` | none identified | likely supported |
| BAM-07 | deeper/curious | A protocol cannot force stable purchasing power, legal recognition, careful custody, liquidity, or broad acceptance. | caution/limitation; economic; legal | medium | `ingham-nature-of-money`; `graeber-debt`; `princeton-bitcoin-technologies` | none identified | partially supported |
| BAM-08 | deeper/curious | Monetary use depends on markets, institutions, habits, and judgement outside the code. | economic; institutional; philosophical | medium | `ingham-nature-of-money`; `graeber-debt`; `jevons-money-mechanism` | `menger-origin-money` | partially supported |
| BAM-09 | deeper/curious | Users can hold keys, sign transactions, and run software that checks whether blocks and transactions follow the rules. | technical | low | `bitcoin-core-repo`; `princeton-bitcoin-technologies`; `bitcoin-whitepaper` | none identified | likely supported |
| BAM-10 | deeper/curious | Bitcoin's issuance and settlement rules can be inspected and rejected when invalid, rather than accepted only as an issuer's promise. | technical; analogy/comparison | high | `bitcoin-core-repo`; `bitcoin-whitepaper`; `princeton-bitcoin-technologies` | `ingham-nature-of-money` | needs human inspection |
| BAM-11 | deeper/curious | Bitcoin may behave like money in some contexts and not in others. | economic; caution/limitation | medium | `ingham-nature-of-money`; `jevons-money-mechanism`; `graeber-debt` | none identified | partially supported |
| BAM-12 | deeper/curious | Technical design can make monetary promises easier to verify, but it does not guarantee that people will value the asset or coordinate around it as money. | technical; economic; caution/limitation | medium | `princeton-bitcoin-technologies`; `ingham-nature-of-money`; `graeber-debt` | `menger-origin-money` | partially supported |
| BAM-13 | bitcoinConnection | Bitcoin's money claim rests on whether fixed issuance, public validation, self-custody, and open settlement can coordinate users without a central monetary issuer. | technical; economic; institutional | high | `bitcoin-whitepaper`; `bitcoin-core-repo`; `princeton-bitcoin-technologies`; `ingham-nature-of-money` | `graeber-debt`; `menger-origin-money` | needs human inspection |

Node-level recommendation:

| Category | Notes |
| --- | --- |
| Claims safe to keep | BAM-02, BAM-06, BAM-09 are broadly safe after normal technical review. |
| Claims needing rewrite | BAM-05, BAM-10, BAM-13 should be split or narrowed so they do not read as advocacy. |
| Claims needing stronger sources | BAM-03, BAM-04, BAM-08, BAM-11 and BAM-12 need explicit monetary-theory and competing-interpretation mapping. |
| Claims needing jurisdictional qualification | BAM-07 when discussing legal recognition. |
| Sources still missing | Legal treatment of monetary recognition; more contemporary critiques of Bitcoin as money; source mapping for monetary functions. |
| Editorial recommendation | Ready for rewrite after claim mapping; keep draft and `source-needed`. |

## 4. Scarcity

Current sourceIds: `bitcoin-whitepaper`; `bitcoin-core-repo`; `jevons-money-mechanism`; `menger-origin-money`; `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`.

| ID | Field source | Claim text | Claim type | Risk | SourceIds that may support it | SourceIds that may complicate or contest it | Support status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SCA-01 | summary | Monetary scarcity means credible limits on creating new units. | economic | medium | `jevons-money-mechanism`; `menger-origin-money` | none identified | partially supported |
| SCA-02 | surface | Scarcity is not just rarity; it is a credible limit on new supply. | economic; caution/limitation | low | `jevons-money-mechanism`; `menger-origin-money` | none identified | likely supported |
| SCA-03 | surface | Scarcity alone does not make something valuable. | economic; caution/limitation | low | `jevons-money-mechanism`; `menger-origin-money` | none identified | likely supported |
| SCA-04 | deeper/curious | Scarcity matters when people care about how easily new units can be created. | economic | low | `jevons-money-mechanism`; `menger-origin-money` | none identified | likely supported |
| SCA-05 | deeper/curious | A monetary good is not scarce simply because it is uncommon; it needs a credible constraint on future supply. | economic; caution/limitation | low | `jevons-money-mechanism`; `menger-origin-money` | none identified | likely supported |
| SCA-06 | deeper/curious | Scarcity constraints may come from nature, law, custom, institutional practice, or technical rules. | economic; legal; institutional | medium | `jevons-money-mechanism`; `menger-origin-money`; `bitcoin-devguide-block-chain` | none identified | needs human inspection |
| SCA-07 | deeper/curious | Rarity alone is not enough. | economic; caution/limitation | low | `jevons-money-mechanism`; `menger-origin-money` | none identified | likely supported |
| SCA-08 | deeper/curious | Demand, usefulness, recognisability, transferability, and social coordination still matter. | economic | medium | `jevons-money-mechanism`; `menger-origin-money` | none identified | partially supported |
| SCA-09 | deeper/curious | A scarce object can remain economically unimportant if people do not want it, cannot verify it, or do not expect others to accept it. | economic; caution/limitation | low | `jevons-money-mechanism`; `menger-origin-money` | none identified | partially supported |
| SCA-10 | deeper/curious | Bitcoin's scarcity is expressed through capped issuance rules and a declining issuance schedule. | technical | low | `bitcoin-whitepaper`; `bitcoin-core-repo`; `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition` | none identified | likely supported |
| SCA-11 | deeper/curious | Participating nodes validate blocks and can reject blocks that create coins outside the rules. | technical | low | `bitcoin-core-repo`; `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition` | none identified | likely supported |
| SCA-12 | deeper/curious | Bitcoin supply discipline is something users can check through the network's rule set. | technical | medium | `bitcoin-core-repo`; `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition` | none identified | partially supported |
| SCA-13 | deeper/curious | The cap should not be treated as magical or detached from people. | caution/limitation; philosophical | medium | `menger-origin-money`; `bitcoin-devguide-block-chain` | none identified | needs human inspection |
| SCA-14 | deeper/curious | Changing Bitcoin's supply rules would require social and network acceptance, not merely a software edit by one actor. | technical; institutional | high | `bitcoin-core-repo`; `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition` | none identified | needs human inspection |
| SCA-15 | deeper/curious | The scarcity claim depends on continued coordination around the rules that users choose to enforce. | technical; philosophical | high | `bitcoin-core-repo`; `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition` | `menger-origin-money` | needs human inspection |
| SCA-16 | bitcoinConnection | Bitcoin turns monetary scarcity into a consensus rule that users can verify, while still depending on durable demand for that rule to matter. | technical; economic | medium | `bitcoin-core-repo`; `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`; `menger-origin-money` | none identified | partially supported |

Node-level recommendation:

| Category | Notes |
| --- | --- |
| Claims safe to keep | SCA-02, SCA-03, SCA-05, SCA-07, SCA-10 and SCA-11 are safe after source passage mapping. |
| Claims needing rewrite | SCA-14 and SCA-15 should avoid implying governance certainty. |
| Claims needing stronger sources | SCA-06 and SCA-08 need broader monetary-history or value-theory sources. |
| Claims needing jurisdictional qualification | SCA-06 if law or institutional practice is retained. |
| Sources still missing | Competing interpretations of value, artificial scarcity and Bitcoin monetary-policy governance. |
| Editorial recommendation | Ready for rewrite after governance-language review; keep draft and `source-needed`. |

## 5. Settlement

Current sourceIds: `cpmi-payment-systems-glossary`; `cpmi-iosco-pfmi`; `bitcoin-devguide-block-chain`.

| ID | Field source | Claim text | Claim type | Risk | SourceIds that may support it | SourceIds that may complicate or contest it | Support status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SET-01 | summary | Settlement is when a payment becomes final enough to rely on. | institutional; legal | high | `cpmi-payment-systems-glossary`; `cpmi-iosco-pfmi` | none identified | needs human inspection |
| SET-02 | surface | Settlement is when a payment becomes final enough to rely on. | institutional; legal | high | `cpmi-payment-systems-glossary`; `cpmi-iosco-pfmi` | none identified | needs human inspection |
| SET-03 | surface | Bitcoin matters because it offers settlement through network confirmations, not bank reversal rules. | technical; institutional; analogy/comparison | high | `bitcoin-devguide-block-chain`; `cpmi-payment-systems-glossary` | `cpmi-iosco-pfmi` | needs rewrite |
| SET-04 | deeper/curious | Settlement solves the problem of knowing when a payment is finished. | institutional; legal | medium | `cpmi-payment-systems-glossary`; `cpmi-iosco-pfmi` | none identified | partially supported |
| SET-05 | deeper/curious | Physical delivery, bank books, clearing houses, card networks, and real-time payment systems all draw the finality line differently. | historical; institutional; legal | high | `cpmi-payment-systems-glossary`; `cpmi-iosco-pfmi` | none identified | needs human inspection |
| SET-06 | deeper/curious | Speed, reversibility, cost, and authority pull against one another. | institutional; economic | medium | `cpmi-iosco-pfmi`; `cpmi-payment-systems-glossary` | none identified | partially supported |
| SET-07 | deeper/curious | A card payment can feel instant but still be reversible. | institutional | medium | `cpmi-payment-systems-glossary` | none identified | needs human inspection |
| SET-08 | deeper/curious | A bank transfer may depend on operating hours, compliance checks, or later settlement between institutions. | institutional; legal | high | `cpmi-payment-systems-glossary`; `cpmi-iosco-pfmi` | none identified | needs jurisdiction |
| SET-09 | deeper/curious | Bitcoin makes settlement a public ledger question. | technical; analogy/comparison | medium | `bitcoin-devguide-block-chain` | `cpmi-iosco-pfmi` | partially supported |
| SET-10 | deeper/curious | Confirmations make reversal increasingly difficult. | technical | high | `bitcoin-devguide-block-chain` | none identified | likely supported |
| SET-11 | deeper/curious | It is misleading to treat confirmations as the same kind of finality as cash in hand or a court-enforced bank settlement. | caution/limitation; legal; analogy/comparison | high | `bitcoin-devguide-block-chain`; `cpmi-iosco-pfmi`; `cpmi-payment-systems-glossary` | none identified | likely supported |
| SET-12 | bitcoinConnection | Bitcoin offers probabilistic settlement through block confirmations rather than institutional reversal rules. | technical; institutional; analogy/comparison | high | `bitcoin-devguide-block-chain`; `cpmi-payment-systems-glossary` | `cpmi-iosco-pfmi` | needs rewrite |

Node-level recommendation:

| Category | Notes |
| --- | --- |
| Claims safe to keep | SET-10 and SET-11 are strong if reorganisation risk and legal-finality limits are explicit. |
| Claims needing rewrite | SET-03 and SET-12 should separate technical confirmation from settlement and reversal rules. |
| Claims needing stronger sources | SET-05, SET-07 and SET-08 need payment-network and legal materials beyond the current sources. |
| Claims needing jurisdictional qualification | SET-01, SET-02, SET-08 and SET-12 when using legal or bank-settlement language. |
| Sources still missing | Legal settlement/finality scholarship; card network rules; bank-transfer or RTGS materials; jurisdictional payment law. |
| Editorial recommendation | Needs more sources before rewrite; keep draft and `source-needed`. |

## 6. Custody

Current sourceIds: `bitcoin-devguide-wallets`; `bitcoin-secure-your-wallet`; `occ-il1170-crypto-custody`; `cpmi-iosco-pfmi`.

| ID | Field source | Claim text | Claim type | Risk | SourceIds that may support it | SourceIds that may complicate or contest it | Support status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CUS-01 | summary | Custody asks who controls money and who must be trusted. | institutional; philosophical | medium | `cpmi-iosco-pfmi`; `bitcoin-devguide-wallets` | `occ-il1170-crypto-custody` | partially supported |
| CUS-02 | surface | Custody means who controls the money. | institutional; technical | medium | `bitcoin-devguide-wallets`; `cpmi-iosco-pfmi` | `occ-il1170-crypto-custody` | partially supported |
| CUS-03 | surface | Bitcoin lets people hold keys themselves, while custodians recreate older trust relationships. | technical; institutional; analogy/comparison | high | `bitcoin-devguide-wallets`; `bitcoin-secure-your-wallet`; `occ-il1170-crypto-custody` | `cpmi-iosco-pfmi` | partially supported |
| CUS-04 | deeper/curious | Custody solves the problem of keeping money safe and movable. | institutional | medium | `cpmi-iosco-pfmi`; `bitcoin-secure-your-wallet` | none identified | partially supported |
| CUS-05 | deeper/curious | People can hold assets themselves, use a custodian, or hold a claim against someone else who promises access. | institutional; legal | high | `occ-il1170-crypto-custody`; `cpmi-iosco-pfmi`; `bitcoin-devguide-wallets` | none identified | needs human inspection |
| CUS-06 | deeper/curious | The custody trade-off is control. | philosophical; institutional | medium | `bitcoin-devguide-wallets`; `bitcoin-secure-your-wallet`; `cpmi-iosco-pfmi` | none identified | partially supported |
| CUS-07 | deeper/curious | Custodians can protect users from loss. | institutional | medium | `cpmi-iosco-pfmi`; `occ-il1170-crypto-custody` | `bitcoin-secure-your-wallet` | needs human inspection |
| CUS-08 | deeper/curious | Custodians can freeze assets, lend them, lose them, require identification, or become targets for regulation and failure. | institutional; legal | high | `occ-il1170-crypto-custody`; `cpmi-iosco-pfmi` | none identified | partially supported |
| CUS-09 | deeper/curious | Private keys make self-custody possible. | technical | low | `bitcoin-devguide-wallets`; `bitcoin-secure-your-wallet`; `mastering-bitcoin-third-edition` | none identified | likely supported |
| CUS-10 | deeper/curious | It is misleading to treat self-custody as effortless. | caution/limitation | low | `bitcoin-secure-your-wallet`; `bitcoin-devguide-wallets` | none identified | likely supported |
| CUS-11 | deeper/curious | Losing keys can be final. | technical; caution/limitation | medium | `bitcoin-secure-your-wallet`; `bitcoin-devguide-wallets` | none identified | likely supported |
| CUS-12 | deeper/curious | Many users still choose custodial services. | institutional; economic | high | `occ-il1170-crypto-custody` | none identified | unsupported |
| CUS-13 | bitcoinConnection | Bitcoin makes self-custody possible through private keys, while exchanges and custodians recreate older trust patterns. | technical; institutional; analogy/comparison | high | `bitcoin-devguide-wallets`; `bitcoin-secure-your-wallet`; `occ-il1170-crypto-custody` | `cpmi-iosco-pfmi` | partially supported |

Node-level recommendation:

| Category | Notes |
| --- | --- |
| Claims safe to keep | CUS-09, CUS-10 and CUS-11 are strong technical/operational claims. |
| Claims needing rewrite | CUS-03, CUS-08 and CUS-13 should separate technical control from legal and institutional custody. |
| Claims needing stronger sources | CUS-05, CUS-07, CUS-08 and CUS-12 need legal, exchange and institutional custody sources. |
| Claims needing jurisdictional qualification | CUS-05 and CUS-08; especially where U.S. OCC material is used. |
| Sources still missing | Legal custody scholarship; exchange custody documentation; property-rights treatment; historical custody sources. |
| Editorial recommendation | Needs more sources before rewrite; keep draft and `source-needed`. |

## 7. Ledgers

Current sourceIds: `schmandt-besserat-writing-came-about`; `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`.

| ID | Field source | Claim text | Claim type | Risk | SourceIds that may support it | SourceIds that may complicate or contest it | Support status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| LED-01 | summary | Ledgers record ownership claims and transfers over time. | historical; institutional | medium | `schmandt-besserat-writing-came-about` | none identified | partially supported |
| LED-02 | surface | Ledgers record who owns what. | institutional | low | `schmandt-besserat-writing-came-about` | none identified | partially supported |
| LED-03 | surface | Bitcoin matters because its coins exist as entries in a public ledger that users can verify. | technical; analogy/comparison | high | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition` | none identified | needs rewrite |
| LED-04 | deeper/curious | Ledgers solve the problem of remembering claims beyond immediate possession. | historical; philosophical | medium | `schmandt-besserat-writing-came-about` | none identified | needs human inspection |
| LED-05 | deeper/curious | Ledgers let money exist as a record of ownership, debts, and transfers. | historical; economic | high | `schmandt-besserat-writing-came-about` | none identified | too broad |
| LED-06 | deeper/curious | The limitation is trust in the record. | philosophical; institutional | medium | `schmandt-besserat-writing-came-about`; `mastering-bitcoin-third-edition` | none identified | partially supported |
| LED-07 | deeper/curious | Someone must be able to write, verify, correct, and protect the record. | institutional; technical | medium | `schmandt-besserat-writing-came-about`; `mastering-bitcoin-third-edition` | none identified | partially supported |
| LED-08 | deeper/curious | Disputes can arise over who has authority over the record. | institutional; legal | medium | `schmandt-besserat-writing-came-about` | none identified | needs human inspection |
| LED-09 | deeper/curious | Bitcoin makes the ledger public and rule-bound. | technical | low | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition` | none identified | likely supported |
| LED-10 | deeper/curious | It is misleading to treat a blockchain as just a database. | caution/limitation; analogy/comparison | medium | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition` | none identified | likely supported |
| LED-11 | deeper/curious | Bitcoin's ledger depends on validation, incentives, and agreement about rules. | technical; institutional | high | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition` | none identified | partially supported |
| LED-12 | bitcoinConnection | Bitcoin is a ledger-first monetary system: the coin exists as spendable entries in a public chain of records. | technical; economic; analogy/comparison | high | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition` | none identified | needs rewrite |

Node-level recommendation:

| Category | Notes |
| --- | --- |
| Claims safe to keep | LED-02, LED-09 and LED-10 are safe with normal source mapping. |
| Claims needing rewrite | LED-03 and LED-12 should avoid simplifying UTXOs into "coins as entries" without explanation. |
| Claims needing stronger sources | LED-01, LED-04, LED-05, LED-07 and LED-08 need accounting-history and archival sources. |
| Claims needing jurisdictional qualification | LED-08 if disputes are framed legally. |
| Sources still missing | Accounting history; archive or museum sources; history of record media; sources distinguishing ledgers, databases and validated histories. |
| Editorial recommendation | Needs more sources first; keep draft and `source-needed`. |

## 8. Trust

Current sourceIds: `ingham-nature-of-money`; `princeton-bitcoin-technologies`; `bitcoin-devguide-block-chain`.

| ID | Field source | Claim text | Claim type | Risk | SourceIds that may support it | SourceIds that may complicate or contest it | Support status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TRU-01 | summary | Trust is what money systems ask users to rely on. | philosophical; economic | medium | `ingham-nature-of-money` | none identified | partially supported |
| TRU-02 | surface | Trust means what users must rely on for money to work. | philosophical; economic | medium | `ingham-nature-of-money` | none identified | partially supported |
| TRU-03 | surface | Bitcoin tries to reduce trust in issuers and payment middlemen, while still relying on software and users. | technical; institutional; caution/limitation | high | `princeton-bitcoin-technologies`; `bitcoin-devguide-block-chain`; `ingham-nature-of-money` | none identified | partially supported |
| TRU-04 | deeper/curious | Trust solves a basic monetary problem: people need confidence that records, issuers, custodians, or rules will behave as expected. | philosophical; institutional | medium | `ingham-nature-of-money` | `princeton-bitcoin-technologies` | partially supported |
| TRU-05 | deeper/curious | Every money system asks users to trust something. | philosophical; economic | high | `ingham-nature-of-money` | `princeton-bitcoin-technologies` | needs human inspection |
| TRU-06 | deeper/curious | Trust can hide. | philosophical | medium | `ingham-nature-of-money` | none identified | needs human inspection |
| TRU-07 | deeper/curious | A system may look simple while depending on vaults, banks, courts, software, incentives, or social agreement. | institutional; technical; philosophical | high | `ingham-nature-of-money`; `princeton-bitcoin-technologies`; `bitcoin-devguide-block-chain` | none identified | partially supported |
| TRU-08 | deeper/curious | Bitcoin shifts trust towards open rules, cryptographic verification, and users choosing compatible software. | technical; philosophical | high | `princeton-bitcoin-technologies`; `bitcoin-devguide-block-chain` | `ingham-nature-of-money` | needs human inspection |
| TRU-09 | deeper/curious | The analogy can mislead when Bitcoin is called trustless. | caution/limitation | low | `princeton-bitcoin-technologies`; `ingham-nature-of-money` | none identified | likely supported |
| TRU-10 | deeper/curious | Bitcoin reduces some required trust, but does not remove trust entirely. | technical; philosophical; caution/limitation | medium | `princeton-bitcoin-technologies`; `bitcoin-devguide-block-chain`; `ingham-nature-of-money` | none identified | partially supported |
| TRU-11 | bitcoinConnection | Bitcoin's design promise is not no trust; it is less mandatory trust in issuers, custodians, and payment intermediaries. | technical; institutional; caution/limitation | medium | `princeton-bitcoin-technologies`; `bitcoin-devguide-block-chain`; `ingham-nature-of-money` | none identified | partially supported |

Node-level recommendation:

| Category | Notes |
| --- | --- |
| Claims safe to keep | TRU-09, TRU-10 and TRU-11 are directionally safe if the wording stays cautious. |
| Claims needing rewrite | TRU-05 and TRU-08 should be narrowed by route: Money trust, technical verification, institutional reliance and philosophy are not identical. |
| Claims needing stronger sources | TRU-01, TRU-02, TRU-04, TRU-06 and TRU-07 need stronger social-theory or philosophy sources. |
| Claims needing jurisdictional qualification | TRU-07 where courts and institutions are discussed. |
| Sources still missing | Social theory of trust; philosophy of reliance/verification; institutional trust in money; critiques of "trustless" language. |
| Editorial recommendation | Ready for rewrite only after route-scope decision; keep draft and `source-needed`. |

## 9. Blockchain

Current sourceIds: `bitcoin-whitepaper`; `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`; `princeton-bitcoin-technologies`.

| ID | Field source | Claim text | Claim type | Risk | SourceIds that may support it | SourceIds that may complicate or contest it | Support status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BLK-01 | summary | A blockchain is an ordered record that many participants can verify. | technical | medium | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`; `princeton-bitcoin-technologies` | none identified | likely supported |
| BLK-02 | surface | A blockchain is an ordered record that many participants can check. | technical | medium | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`; `princeton-bitcoin-technologies` | none identified | likely supported |
| BLK-03 | surface | Bitcoin uses it to track coins without one central bookkeeper. | technical; analogy/comparison | medium | `bitcoin-whitepaper`; `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition` | none identified | partially supported |
| BLK-04 | deeper/curious | A blockchain solves the problem of keeping a shared history among participants who do not all trust one record keeper. | technical; philosophical | high | `bitcoin-whitepaper`; `princeton-bitcoin-technologies`; `bitcoin-devguide-block-chain` | none identified | partially supported |
| BLK-05 | deeper/curious | Bitcoin orders transactions into blocks and links those blocks with proof of work. | technical | low | `bitcoin-whitepaper`; `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`; `princeton-bitcoin-technologies` | none identified | likely supported |
| BLK-06 | deeper/curious | The blockchain record is not free or instant. | caution/limitation; technical | low | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`; `princeton-bitcoin-technologies` | none identified | likely supported |
| BLK-07 | deeper/curious | It uses energy, bandwidth, storage, and time. | technical; caution/limitation | medium | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`; `princeton-bitcoin-technologies` | none identified | partially supported |
| BLK-08 | deeper/curious | Recent blocks can sometimes be reorganised. | technical; caution/limitation | low | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`; `princeton-bitcoin-technologies` | none identified | likely supported |
| BLK-09 | deeper/curious | The blockchain defines which coins exist and where they can be spent. | technical | high | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`; `princeton-bitcoin-technologies` | none identified | needs rewrite |
| BLK-10 | deeper/curious | It is misleading to treat any blockchain as automatically useful without the surrounding monetary incentives and validation rules. | caution/limitation; analogy/comparison | high | `princeton-bitcoin-technologies`; `mastering-bitcoin-third-edition` | none identified | partially supported |
| BLK-11 | bitcoinConnection | Bitcoin uses the blockchain to decide which coins exist, which have moved, and which transaction history the network accepts. | technical | high | `bitcoin-devguide-block-chain`; `mastering-bitcoin-third-edition`; `princeton-bitcoin-technologies` | none identified | needs rewrite |

Node-level recommendation:

| Category | Notes |
| --- | --- |
| Claims safe to keep | BLK-05, BLK-06 and BLK-08 are strong technical claims. |
| Claims needing rewrite | BLK-03, BLK-09 and BLK-11 should be rewritten around UTXOs, valid transactions and accepted chain history. |
| Claims needing stronger sources | BLK-04 and BLK-10 may need more technical history or consensus literature. |
| Claims needing jurisdictional qualification | None. |
| Sources still missing | Original or historical sources for the term "blockchain" if the rewrite discusses history; sources on generic blockchain limits. |
| Editorial recommendation | Ready for rewrite after technical precision pass; keep draft and `source-needed`. |

## 10. Central Banks

Current sourceIds: `federal-reserve-fed-explained`; `cpmi-iosco-pfmi`; `cpmi-payment-systems-glossary`.

| ID | Field source | Claim text | Claim type | Risk | SourceIds that may support it | SourceIds that may complicate or contest it | Support status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CB-01 | summary | Central banks manage national money, bank reserves, and emergency liquidity. | institutional | high | `federal-reserve-fed-explained`; `cpmi-iosco-pfmi` | none identified | needs jurisdiction |
| CB-02 | surface | Central banks manage national money and banking systems. | institutional | high | `federal-reserve-fed-explained`; `cpmi-iosco-pfmi` | none identified | needs jurisdiction |
| CB-03 | surface | Bitcoin is interesting partly because it has no central bank deciding its supply schedule. | technical; institutional; analogy/comparison | medium | `federal-reserve-fed-explained`; `bitcoin-whitepaper` | none identified | partially supported |
| CB-04 | deeper/curious | Central banks are not simply money printers, and they are not merely political villains. | caution/limitation; institutional | medium | `federal-reserve-fed-explained` | none identified | partially supported |
| CB-05 | deeper/curious | Central banks developed around practical problems: note issuance, government finance, bank settlement, financial panics, and liquidity provision. | historical; institutional | high | `federal-reserve-fed-explained` | none identified | unsupported |
| CB-06 | deeper/curious | In a modern fiat system, central banks influence short-term interest rates, issue or manage base money, support reserve settlement, interact with payment systems, and act as lenders of last resort. | institutional | high | `federal-reserve-fed-explained`; `cpmi-iosco-pfmi`; `cpmi-payment-systems-glossary` | none identified | needs jurisdiction |
| CB-07 | deeper/curious | These functions solve genuine coordination failures, especially when many private banks are joined through credit and settlement promises. | institutional; economic | high | `cpmi-iosco-pfmi`; `cpmi-payment-systems-glossary` | none identified | unsupported |
| CB-08 | deeper/curious | Central banking concentrates judgement at the centre of the monetary system. | institutional; philosophical | medium | `federal-reserve-fed-explained` | none identified | partially supported |
| CB-09 | deeper/curious | Policy can be late, excessive, captured, unevenly distributed, or constrained by politics. | institutional; economic; caution/limitation | high | none current | none identified | unsupported |
| CB-10 | deeper/curious | Central banks operate within law. | institutional; legal | medium | `federal-reserve-fed-explained` | none identified | needs jurisdiction |
| CB-11 | deeper/curious | Legal tender status and public obligations are not simply central-bank choices. | legal; institutional | high | `federal-reserve-fed-explained`; `bank-of-england-legal-tender`; `us-code-legal-tender` | none identified | partially supported |
| CB-12 | deeper/curious | Bitcoin contrasts at the base layer: no committee changes issuance, no central balance sheet supplies emergency liquidity, and settlement validity is checked by network rules. | technical; institutional; analogy/comparison | high | `bitcoin-whitepaper`; `bitcoin-devguide-block-chain`; `federal-reserve-fed-explained` | none identified | needs rewrite |
| CB-13 | deeper/curious | The comparison between Bitcoin and central banking should not become too tidy. | caution/limitation | low | `federal-reserve-fed-explained`; `cpmi-iosco-pfmi`; `bitcoin-devguide-block-chain` | none identified | likely supported |
| CB-14 | deeper/curious | Bitcoin users still face market cycles, liquidity shocks, custodial failures, mining concentration, and regulation around the system. | economic; institutional; caution/limitation | high | none current | none identified | unsupported |
| CB-15 | bitcoinConnection | Bitcoin removes central-bank discretion from issuance and base settlement, but not every form of monetary coordination or market dependence. | technical; institutional; caution/limitation | high | `bitcoin-whitepaper`; `bitcoin-devguide-block-chain`; `federal-reserve-fed-explained` | none identified | partially supported |

Node-level recommendation:

| Category | Notes |
| --- | --- |
| Claims safe to keep | CB-04 and CB-13 are useful guardrails. |
| Claims needing rewrite | CB-01, CB-02, CB-06, CB-11, CB-12 and CB-15 need comparative and jurisdictional precision. |
| Claims needing stronger sources | CB-05, CB-07, CB-09 and CB-14 are not adequately supported by current records. |
| Claims needing jurisdictional qualification | CB-01, CB-02, CB-06, CB-10 and CB-11. |
| Sources still missing | Comparative central-bank history; lender-of-last-resort literature; mandate variation; non-U.S. central-bank sources; Bitcoin market/regulation sources. |
| Editorial recommendation | Needs more sources first; keep draft and `source-needed`. |

## 11. Legal Tender

Current sourceIds: `bank-of-england-legal-tender`; `royal-mint-legal-tender-guidelines`; `us-code-legal-tender`.

| ID | Field source | Claim text | Claim type | Risk | SourceIds that may support it | SourceIds that may complicate or contest it | Support status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| LT-01 | summary | Legal tender is money recognised for settling certain debts. | legal | medium | `bank-of-england-legal-tender`; `royal-mint-legal-tender-guidelines`; `us-code-legal-tender` | none identified | needs jurisdiction |
| LT-02 | surface | Legal tender rules say what money courts recognise for paying certain debts. | legal | medium | `bank-of-england-legal-tender`; `us-code-legal-tender` | none identified | needs jurisdiction |
| LT-03 | surface | Bitcoin usually works through voluntary acceptance instead of that legal privilege. | legal; economic; analogy/comparison | high | `bank-of-england-legal-tender`; `us-code-legal-tender` | none identified | partially supported |
| LT-04 | deeper/curious | Legal tender is narrower than the phrase often suggests. | legal; caution/limitation | low | `bank-of-england-legal-tender`; `royal-mint-legal-tender-guidelines`; `us-code-legal-tender` | none identified | likely supported |
| LT-05 | deeper/curious | In many settings, legal tender does not mean every shop must accept every form of official money in every circumstance. | legal; caution/limitation | medium | `bank-of-england-legal-tender`; `royal-mint-legal-tender-guidelines` | `us-code-legal-tender` | needs jurisdiction |
| LT-06 | deeper/curious | Legal tender usually concerns the discharge of debts under a jurisdiction's law. | legal | medium | `bank-of-england-legal-tender`; `royal-mint-legal-tender-guidelines`; `us-code-legal-tender` | none identified | needs jurisdiction |
| LT-07 | deeper/curious | Legal tender sits beside taxation, contract law, banking regulation, public accounting, and court enforcement. | legal; institutional | high | `bank-of-england-legal-tender`; `us-code-legal-tender` | none identified | needs human inspection |
| LT-08 | deeper/curious | When parties disagree about payment, the legal system needs a recognised unit and medium for settling obligations. | legal; institutional | high | `bank-of-england-legal-tender`; `us-code-legal-tender` | none identified | needs jurisdiction |
| LT-09 | deeper/curious | Legal recognition cannot by itself create a healthy monetary system. | economic; legal; caution/limitation | high | none current | none identified | needs human inspection |
| LT-10 | deeper/curious | A currency with legal privilege can still lose purchasing power, become inconvenient, depend on fragile institutions, or be rejected informally when trust breaks down. | economic; institutional; caution/limitation | high | none current | none identified | needs human inspection |
| LT-11 | deeper/curious | Bitcoin usually operates without legal-tender privilege. | legal; economic | high | `bank-of-england-legal-tender`; `us-code-legal-tender` | none identified | needs jurisdiction |
| LT-12 | deeper/curious | A merchant, saver, or sender accepts Bitcoin because of expected liquidity, network access, ideology, need, or speculation, not because most courts require it for ordinary debt settlement. | economic; legal; philosophical | high | none current | none identified | needs rewrite |
| LT-13 | deeper/curious | The analogy between Bitcoin and legal tender can mislead in both directions. | caution/limitation; analogy/comparison | low | `bank-of-england-legal-tender`; `royal-mint-legal-tender-guidelines`; `us-code-legal-tender` | none identified | likely supported |
| LT-14 | deeper/curious | Legal tender is not the whole source of fiat value. | economic; legal; caution/limitation | high | none current | none identified | needs human inspection |
| LT-15 | deeper/curious | Bitcoin's lack of legal-tender status does not make it irrelevant. | economic; legal; caution/limitation | medium | none current | none identified | needs human inspection |
| LT-16 | deeper/curious | Bitcoin's monetary role is more market-driven, uneven, and dependent on infrastructure and trust in the rules. | economic; institutional; philosophical | high | none current | none identified | needs rewrite |
| LT-17 | bitcoinConnection | Bitcoin usually depends on voluntary acceptance and network liquidity rather than legal-tender rules, making its monetary status more market-driven and uneven. | economic; legal; analogy/comparison | high | `bank-of-england-legal-tender`; `us-code-legal-tender` | none identified | needs rewrite |

Node-level recommendation:

| Category | Notes |
| --- | --- |
| Claims safe to keep | LT-04 and LT-13 are strong cautionary claims. |
| Claims needing rewrite | LT-03, LT-09, LT-10, LT-12, LT-16 and LT-17 need stronger support and more precise wording. |
| Claims needing stronger sources | LT-07, LT-09, LT-10, LT-12, LT-14, LT-15, LT-16 and LT-17 need legal scholarship, monetary history and Bitcoin adoption/use sources. |
| Claims needing jurisdictional qualification | LT-01, LT-02, LT-05, LT-06, LT-08 and LT-11. |
| Sources still missing | Legal scholarship on legal tender; tax receivability sources; fiat-money value sources; Bitcoin legal-status and adoption sources. |
| Editorial recommendation | Needs more sources before rewrite; keep draft and `source-needed`. |

## 12. Batch-Level Recommendations

Nodes ready for rewrite after claim mapping:

- Bitcoin as Money
- Scarcity
- Trust
- Blockchain

Nodes needing more sources before rewrite:

- Settlement
- Custody
- Ledgers
- Central Banks
- Legal Tender

Claims needing jurisdictional qualification:

- Settlement claims about bank transfer, legal finality and settlement finality.
- Custody claims about custodians, claims and institutional control.
- Central-bank claims about national money, reserves, lender-of-last-resort functions and legal position.
- Legal-tender claims about debt discharge, court recognition, shop acceptance and voluntary Bitcoin use.

High-risk pattern findings:

- Settlement still risks collapsing technical confirmation into legal finality.
- Custody still risks collapsing private-key control into legal ownership.
- Ledgers still risks a too-linear route from record systems to Bitcoin.
- Trust is directionally cautious, but still needs route-specific definitions.
- Blockchain is mostly careful, but must stay Bitcoin-specific when describing security and accepted history.
- Central Banks is the least source-ready node in the batch because several historical and evaluative claims exceed current source records.
- Legal Tender is carefully narrow, but many claims need jurisdictional and monetary-history support.

Batch 1 should remain `blocked-pending-human-review`.
