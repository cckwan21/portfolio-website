## Overview

The crypto deposit flow was one of the most critical — and most friction-heavy — parts of the app, and a legacy flow that hadn't been improved since 2021. At the same time, the team was rebuilding the design system, and deposit became the first flow to be redesigned under it, given the time and effort available. I wasn't involved in building the new design system itself, but I worked in parallel to migrate it into the deposit flow redesign as I went, given the limited timeline.

Deposit sits directly on the critical path. A user cannot place their first trade without depositing funds first, making it one of the highest-leverage flows to get right.

---

## Challenge

How might we simplify the crypto deposit flow so that both new and experienced traders can complete their first deposit with confidence?

Metrics were limited at the company, so I relied heavily on competitive analysis, current UX patterns, and heuristics rather than quantitative data to drive this redesign.

From a design audit of our existing flow — compared against current industry standards and competitor patterns — I identified three main issues.

The deposit information screen had become a dense wall of detail, mixing essential information with content users didn't need. For experienced traders it was manageable. For newer crypto users, it created immediate hesitation.

01. Excessive detail on a single screen obscured what actually mattered
02. Unnecessary information made it hard to distinguish critical steps
03. The coin list was static and alphabetical, with no display order that made sense to the user — unhelpful, especially for first-time users

---

## Issue 1 — Coin selection wasn't personalized to the user

The coin selection page was static and generic — every user, regardless of their existing holdings, saw the same undifferentiated list. So I introduced a "Quick Select" section that surfaces personalized options first.

- The original list worked reasonably well for new users with no funds, but for users who already held tokens, it did nothing to reflect that
- Quick Select is ordered by the user's actual holdings: if a user already has certain tokens in their wallet, those surface first, since they're the most likely tokens to be re-deposited
- For users with no wallet holdings, the list defaults to popular market tokens instead, to support decision-making with no personal signal to draw on

[Insert before and after coin selection page]

---

## Issue 2 — Network selection was bundled with coin selection, adding noise and confusion

Network selection lived on the same screen as coin selection — a technical decision bundled with a simple one, and not even applicable to every token. I moved it into its own step.

- One of the more confusing concepts for beginners; giving it a dedicated step gave users the focus to actually understand it
- Added processing time and required confirmations per network
- Added an explicit note that the selected network must match the network the user is transferring from, to reduce mismatched transfers

Stakeholders and engineering assumed fewer screens meant faster, simpler completion. I argued the bundling, not the screen count, was the real source of hesitation — backed by benchmarking against Binance, Kraken, OKX, and Coinbase, all of which isolate this step.

This follows Miller's Law: breaking a complex decision into smaller steps reduces cognitive load, even at the cost of an extra screen. Making the step conditional — shown only when a token required it — meant the added structure never penalized the simpler, more common case.

---

## Issue 3 — The deposit page surfaced too much low-priority information

This showed up most directly on the deposit page itself, so I re-prioritized what appeared on the first layer.

- Identified the core information users actually need on landing: selected token, QR code, selected network, processing time
- Moved secondary actions out of the primary view: create deposit address, share deposit address
- Converted the deposit address dropdown into an address book, hidden behind a secondary action — since not every user needs it, and surfacing it by default added confusion rather than utility

[Insert before and after deposit info screen]

---

## Outcome

Crypto deposit metrics weren't accessible, so this can't be backed by a completion-rate or conversion number. What I do have: the redesigned flow was well received by both stakeholders and users.

- Post-launch, we conducted a small number of user interviews; participants were able to move through the new flow easily compared to the existing design
- User feedback included comments that the information they needed was easier and cleaner to find, and that the processing time detail was helpful

[Note: "a few user interviews" is vague for a senior case study — worth deciding whether you can give an actual number of participants before this goes external. Also flag: no completion-rate data means this Outcome section is qualitative-only, which is a real gap next to the EDD case study's Outcome, which has a hard number attached.]
