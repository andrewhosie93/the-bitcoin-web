# Political Control Route Plan

Private editorial plan for expanding the Political Control route. This document does not add public nodes or change navigation.

## Existing Route

Current public route through the Money strand:

1. Bitcoin as Money
2. Political Control
3. Fiat Money
4. Central Banks
5. Legal Tender

Current alternative travelled path:

1. Bitcoin as Money
2. Political Control
3. Central Banks
4. Legal Tender

### Existing Nodes And Edges

- Political Control
  - Parent: Bitcoin as Money.
  - Children: Fiat Money, Central Banks.
  - Also touches: Government & Power, Banks, Scarcity.
- Fiat Money
  - Parent: Political Control.
  - Child: Central Banks.
  - Also touches: Paper Claims.
- Central Banks
  - Parents: Fiat Money, Political Control.
  - Child: Legal Tender.
  - Also touches: Banks, Government & Power, Banking Rails.
- Legal Tender
  - Parent: Central Banks.
  - Children: none.
  - Also touches: Government & Power, Fiat Money, Trust.

### Shared Nodes And Alternative Travelled Paths

- Central Banks is already a shared node. It can be reached directly from Political Control or through Fiat Money, so its Path depth changes depending on the route a reader has travelled.
- Legal Tender inherits an alternative travelled path because it sits below Central Banks. A reader may arrive through Political Control -> Fiat Money -> Central Banks or through Political Control -> Central Banks.
- Government & Power is currently a main strand placeholder, not part of the route. Existing "Also touches" links connect it to Political Control, Central Banks and Legal Tender.
- Banks, Banking Rails, Trust, Scarcity and Paper Claims are relevant neighbouring nodes. They should remain "Also touches" relationships unless a later editorial pass deliberately changes navigation.

## Proposed Purpose

The route should teach how political authority and monetary systems interact without reducing the question to "government versus Bitcoin".

It should show why states influence issuance, banking, settlement and legal rules: common units, tax collection, public finance, payment finality, crisis management, bank regulation and enforcement all create reasons for monetary authority to become institutional.

It should also show the trade-off. Central institutions have historically tried to solve coordination failures, bank runs, standardisation problems, settlement risks and public-finance pressures. The same powers can also enable debasement, inflation, exclusion, surveillance, capital restrictions and politically uneven rescue.

Bitcoin should enter as a comparison, not a slogan. It reduces unilateral discretion over base issuance and base settlement validity, relocates some governance into software rules and social consensus, and leaves taxation, exchange regulation, custody law, banking access, criminal enforcement and political conflict very much alive.

## Candidate Nodes

These are proposed nodes only. They should not be added to `content/nodes.json` until a human editor approves the route map and individual bubble proposals.

### Monetary Sovereignty

- Purpose: Explain the authority to define, issue, tax in and regulate money within a political jurisdiction.
- Likely parent or parents: Political Control; future Also touches link to Government & Power.
- Possible children: State Coinage, Taxation, Fiat Money, Capital Controls.
- Shared node: Yes, because it belongs to Government & Power as much as the Money strand.
- Connection to Bitcoin: Bitcoin challenges parts of monetary sovereignty by making base issuance and validation independent of a state issuer, while remaining subject to legal treatment around users and businesses.
- Risk of duplication: High with Government & Power and Fiat Money unless kept focused on jurisdictional authority rather than fiat mechanics.
- Source categories required: Monetary sovereignty scholarship, institutional explainers, legal materials, competing theories of state money.

### State Coinage

- Purpose: Show how political authorities used mints, standards and coinage rules to make money recognisable and enforceable.
- Likely parent or parents: Monetary Sovereignty; possible Also touches link to Gold or Commodity Money.
- Possible children: Seigniorage, Legal Tender.
- Shared node: Yes, because it overlaps with Scarcity, Gold and Commodity Money.
- Connection to Bitcoin: Bitcoin replaces mint authority with protocol validation, but still relies on recognisable units and shared standards.
- Risk of duplication: Medium with Gold and Commodity Money if the node becomes a general coinage history.
- Source categories required: Numismatics, monetary-history books, mint records where available, legal history.

### Taxation

- Purpose: Explain how tax obligations can create demand for a monetary unit and give states a practical reason to specify acceptable money.
- Likely parent or parents: Monetary Sovereignty.
- Possible children: Fiat Money, Legal Tender.
- Shared node: Yes, especially with Government & Power.
- Connection to Bitcoin: Bitcoin may be held or transferred outside state issuance, but tax assessment, reporting and enforcement still shape real-world use.
- Risk of duplication: High with Fiat Money if tax receivability is treated as the whole explanation for money's value.
- Source categories required: Public finance, chartalist and non-chartalist interpretations, tax law explainers, institutional material.

### Seigniorage

- Purpose: Introduce the revenue and political power that can come from issuing money or controlling coinage.
- Likely parent or parents: State Coinage; possible parent Monetary Sovereignty.
- Possible children: Fiat Money, Inflation And Debasement as a later example node.
- Shared node: Possibly, because it touches Scarcity and Government & Power.
- Connection to Bitcoin: Bitcoin removes seigniorage from a central issuer at the base layer, replacing it with scheduled block subsidies and transaction fees paid to miners.
- Risk of duplication: Medium with Scarcity and Costly Production if framed mainly as supply expansion.
- Source categories required: Monetary history, public finance, coinage and minting history, Bitcoin issuance documentation.

### Monetary Policy

- Purpose: Explain how authorities influence money, credit and liquidity through policy tools rather than treating "money printing" as a single act.
- Likely parent or parents: Central Banks; possible parent Fiat Money.
- Possible children: Inflation And Debasement, Interest Rates, Open Market Operations.
- Shared node: Possibly, because it touches Government & Power and wider macroeconomic debates.
- Connection to Bitcoin: Bitcoin fixes base issuance rules in protocol, but markets around Bitcoin still respond to interest rates, liquidity conditions and policy expectations.
- Risk of duplication: High with Fiat Money and Central Banks unless it stays focused on policy tools and transmission rather than the whole fiat system.
- Source categories required: Central-bank operating guides, institutional explainers, monetary-policy textbooks, peer-reviewed macroeconomic history, serious competing interpretations.

### Central Bank Settlement

- Purpose: Explain how reserves and central-bank systems settle obligations between banks and anchor modern payment rails.
- Likely parent or parents: Central Banks; Also touches Settlement and Banking Rails.
- Possible children: Lender of Last Resort, Banking Regulation.
- Shared node: Yes, it belongs equally to Settlement.
- Connection to Bitcoin: Bitcoin offers public base settlement without bank reserves, while exchanges and custodians can still depend on bank settlement outside the protocol.
- Risk of duplication: High with Settlement and Banking Rails unless it stays focused on reserve settlement.
- Source categories required: Central-bank payment-system explainers, RTGS materials, settlement-finality law, institutional payment reports.

### Lender of Last Resort

- Purpose: Explain why central banks provide emergency liquidity during panics and what risks that creates.
- Likely parent or parents: Central Banks.
- Possible children: Banking Regulation, Financial Crises.
- Shared node: Possibly, because it also belongs to Banks and Trust.
- Connection to Bitcoin: Bitcoin has no central balance sheet that can supply emergency liquidity; stress appears through markets, custodians, miners and exchanges instead.
- Risk of duplication: Medium with Trust and Banks if it becomes a general banking-crisis node.
- Source categories required: Central banking history, financial-crisis history, lender-of-last-resort theory, institutional crisis reports.

### Capital Controls

- Purpose: Explain restrictions on moving money across borders or out of a financial system.
- Likely parent or parents: Monetary Sovereignty, Fiat Money.
- Possible children: Sanctions, Exchange Controls.
- Shared node: Yes, especially with Government & Power and Networks.
- Connection to Bitcoin: Bitcoin can make some cross-border transfer technically possible without bank permission, while access points, custody, identification, enforcement and liquidity remain controllable.
- Risk of duplication: High with censorship, sanctions and surveillance if those become their own route later.
- Source categories required: Primary legislation, central-bank or treasury materials, international monetary history, institutional explainers, Bitcoin primary and legal materials.

## Existing Route Anchors To Retain

These nodes already exist publicly and should not be duplicated.

### Fiat Money

- Route role: Keep as the explanation of state-backed money without commodity redemption.
- Likely parent or parents: Political Control now; Monetary Sovereignty after a future approved route change.
- Possible children: Central Banks, Monetary Policy, Capital Controls.
- Shared node: Yes, because it also touches Paper Claims and Scarcity.
- Connection to Bitcoin: Bitcoin contrasts discretionary fiat governance with rule-bound issuance under open validation.
- Risk of duplication: High if it tries to cover sovereignty, central banking, inflation and legal tender at once.
- Source categories required: Fiat money history, gold convertibility, Bretton Woods, monetary theory, institutional explainers, Bitcoin monetary-policy references.

### Central Banks

- Route role: Keep as the shared explanation of monetary authority, reserves, payment systems and emergency liquidity.
- Likely parent or parents: Fiat Money; Political Control as the existing alternative parent.
- Possible children: Monetary Policy, Central Bank Settlement, Lender of Last Resort.
- Shared node: Yes, already shared through two parent paths and related to Banking Rails.
- Connection to Bitcoin: Bitcoin removes a central bank from base issuance and base settlement, but not from surrounding market liquidity, custody, exchange access or regulation.
- Risk of duplication: Medium with Banks and Banking Rails if payment-system functions are not separated.
- Source categories required: Central-bank histories, central-bank operating guides, lender-of-last-resort literature, payment-system material.

### Legal Tender

- Route role: Keep as the legal-finality endpoint for the first expansion.
- Likely parent or parents: Central Banks now; possible future parents Taxation, State Coinage or Monetary Sovereignty.
- Possible children: none for the first pass; possible later side node on contract settlement.
- Shared node: Yes, because it touches Government & Power, Trust and Fiat Money.
- Connection to Bitcoin: Bitcoin usually depends on voluntary acceptance rather than legal-tender privilege.
- Risk of duplication: Medium with Taxation and Fiat Money if legal privilege is overstated as the whole basis of state money.
- Source categories required: Legal tender doctrine, legislation, court or institutional explainers, monetary sovereignty scholarship.

## Proposed Navigable Edge Rationales

These are route proposals only. Existing edges should remain unchanged until the route map is approved.

- Political Control -> Monetary Sovereignty: Institution edge; monetary sovereignty explains the jurisdictional authority behind issuance, tax receivability, settlement rules and legal enforcement.
- Monetary Sovereignty -> State Coinage: Implementation edge; state coinage shows an older practical form of political authority over units, standards and mints.
- State Coinage -> Seigniorage: Mechanism edge; seigniorage explains the fiscal and political incentive created by issuing or controlling money.
- Monetary Sovereignty -> Taxation: Mechanism edge; taxation explains why states specify acceptable units and how public obligations can support monetary demand.
- Monetary Sovereignty -> Fiat Money: Implementation edge; fiat money is the modern institutional form in which state authority, law and confidence replace commodity redemption.
- Fiat Money -> Central Banks: Institution edge; central banks administer reserves, monetary operations and emergency liquidity inside modern fiat systems.
- Central Banks -> Monetary Policy: Mechanism edge; monetary policy explains the tools central banks use to influence money, credit and liquidity.
- Central Banks -> Central Bank Settlement: Mechanism edge; reserve settlement shows how central-bank money anchors interbank payment finality.
- Central Banks -> Legal Tender: Institution edge; legal tender explains the legal rules around settling certain debts in a jurisdiction.

Possible later side edges:

- Central Banks -> Lender of Last Resort: Mechanism edge; emergency liquidity explains a central-bank crisis function and its moral-hazard trade-off.
- Monetary Sovereignty -> Capital Controls: Implementation edge; capital controls show state authority over cross-border monetary movement and access.

## Route Options

### Minimal Route, 5 Nodes

1. Political Control
2. Monetary Sovereignty
3. Fiat Money
4. Central Banks
5. Legal Tender

This route gives beginners a clean path from authority, to fiat systems, to institutional management, to legal finality. It is readable and avoids overloading the first expansion. Its weakness is that taxation, seigniorage and settlement remain compressed inside larger nodes.

### Fuller Route, 10 Nodes

Proposed shape:

- Political Control
- Monetary Sovereignty
- State Coinage
- Seigniorage
- Taxation
- Fiat Money
- Central Banks
- Monetary Policy
- Central Bank Settlement
- Legal Tender

This route makes the institutional steps more explicit: jurisdictional authority, coinage standards, issuance revenue, tax obligations, fiat governance, policy tools, reserve settlement and legal finality each get room. Its weakness is cognitive load. It may feel slower unless each Surface layer stays short and each shared node has clear "Also touches" previews.

Lender of Last Resort and Capital Controls should probably begin as shared side candidates rather than part of the first main route. Lender of Last Resort pulls the route towards crisis history and banking regulation. Capital Controls pulls it towards sanctions, censorship, borders and civil liberties before the basic monetary-institution story is stable.

Inflation And Debasement, Bretton Woods and Gold Convertibility are important source and context areas, but they should not be rushed into the first route unless the human review decides the route needs a stronger historical hinge between coinage, fiat transition and central-bank policy.

## Cross-Strand Connections

- Government & Power: Monetary Sovereignty, Taxation, Legal Tender and Capital Controls should all likely "Also touch" this strand.
- Settlement: Central Bank Settlement should likely "Also touch" Settlement and Banking Rails.
- Trust: Lender of Last Resort and Legal Tender should likely "Also touch" Trust because both depend on institutional confidence and enforcement.
- Ledgers: State Coinage and Central Bank Settlement may later connect to records, accounts and official books.
- Energy: Seigniorage and State Coinage may lightly touch Energy through minting, mining and production constraints, but this should remain secondary.
- Networks: Capital Controls and Central Bank Settlement should likely "Also touch" Networks because movement, routing and permissioning are core to both.

These should remain proposed "Also touches" relationships, not implemented navigation, until a later graph-editing pass.

## Editorial Risks

- Contested historical claims: The route must not imply one universal origin of money from the state, markets, barter, credit or commodity exchange.
- Politically loaded language: Avoid slogans about theft, tyranny, fake money, money printing or inevitable state abuse.
- Simplistic anti-government framing: Central banks, legal tender and regulation should be presented as institutions that solve real problems while creating new risks.
- Source sensitivity: Legal tender, capital controls, taxation and central bank settlement require primary or institutional sources before public claims become firm.
- School-of-thought differences: Austrian, Keynesian, chartalist, monetarist, institutionalist and monetary-anthropology interpretations may disagree on causation, value, sovereignty and crisis policy.
- Bitcoin analogy limits: Bitcoin reduces some discretionary powers at the protocol layer, but it does not remove politics, law, custody risk, market liquidity, exchange regulation or social coordination.
- Jurisdictional variation: Legal tender and capital controls vary by country and period, so examples must be dated and located.
- Inflation and debasement: These topics invite moralised or overly simple stories. They should be tied to specific mechanisms and contexts.

## Source Plan

Recommended source categories only:

- Primary legislation or central-bank documents for legal tender, reserves, capital controls, settlement systems and monetary operations.
- Monetary-history books for state coinage, fiat transitions, gold convertibility, Bretton Woods and institutional development.
- Peer-reviewed economic history for seigniorage, debasement, inflation, crises and central-bank evolution.
- Institutional explainers from central banks, treasuries, international organisations and payment-system operators.
- Bitcoin primary materials for issuance, validation, settlement and governance comparisons.
- Serious competing interpretations, including Austrian, Keynesian, chartalist, monetarist, institutionalist and monetary-anthropology views.

No public node should move beyond draft or source-needed until the relevant claims are checked against the central bibliography.
