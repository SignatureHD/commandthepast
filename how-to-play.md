# Spion Kop — How to Play
### Command The Past · commandthepast.com

---

## The game in one sentence

You command the British forces at the Battle of Spion Kop, 24 January 1900. Louis Botha commands the Boers. History says you lose. Prove it wrong.

---

## What you are playing

A turn-based hex strategy game set on the actual terrain of the Tugela Heights, Natal. The map is based on the real battlefield — the Tugela River, Trichard's Drift, the slopes of Spion Kop, and the surrounding Boer positions at Aloe Knoll, Conical Hill, Twin Peaks, and Green Hill.

The game has:
- **Fog of war** — you only see what your units can see
- **Ranged artillery** — bombard enemy positions from distance
- **Morale routing** — units that take too much fire break and flee
- **Boer AI** — Louis Botha commands all green units automatically

---

## How to win

Hold **2 or more British infantry units** on the Spion Kop summit hexes for **6 consecutive turns**.

The summit hexes are the dark brown ▲ hexes in the centre of the map, labelled **Spion Kop**.

---

## How to lose

- British total strength falls below **12** — your force is broken
- The 12-turn time limit expires without holding the summit for 6 consecutive turns

---

## The map

```
GREEN HILL        CONICAL HILL    ALOE KNOLL
(NW — Boer)       (N — Boer art)  (NE — Boer art)

          [ SPION KOP SUMMIT ]

                    TWIN PEAKS
                    (E — Boer)

TRICHARD'S
DRIFT ——————— TUGELA RIVER ————————————
```

Terrain types and their effects:

| Terrain | Colour | Movement cost | Sight range |
|---|---|---|---|
| Open veld | Pale gold | 1 | 2 hexes |
| Slope | Medium khaki | 2 | 1 hex |
| Summit / kopje | Dark brown | 2 | 3 hexes |
| Tugela River | Blue | Impassable | — |
| Drift crossing | Light gold | 1 | 2 hexes |

**Key rule:** Units on high ground see further. The Boer guns on the surrounding kopjes can see — and shoot — the summit from three sides.

---

## Your units (British — red)

| Symbol | Unit | Type | Moves | Strength | Notes |
|---|---|---|---|---|---|
| LF | Lancashire Fusiliers | Infantry | 2 | 8 | Core assault unit |
| RL | Royal Lancaster Regt | Infantry | 2 | 7 | Core assault unit |
| SL | S. Lancashire Regt | Infantry | 2 | 6 | Core assault unit |
| IL | Imperial Light Infantry | Infantry | 2 | 5 | Core assault unit |
| TM | Thorneycroft's M.I. | Cavalry | 3 | 5 | Fast — use to flank |
| RA | Royal Artillery | Artillery | 1 | 6 | Range 3 — use Fire mode |

---

## Boer units (green — AI controlled)

| Symbol | Unit | Type | Moves | Notes |
|---|---|---|---|---|
| CC | Carolina Commando | Commando | 2 | Entrenched on Aloe Knoll |
| PC | Pretoria Commando | Commando | 2 | Entrenched on summit |
| VB | Vryheid Burgher | Commando | 2 | Entrenched on Twin Peaks |
| BH | Botha's Commando | Cavalry | 3 | Mobile — fast response |
| LT | Boer Long Tom | Artillery | 1 | Range 4 — most dangerous gun |
| PP | Boer Pom-Pom | Artillery | 1 | Range 3 — rapid fire |

**Entrenched units** (yellow ring) get a significant defence bonus. They are hard to dislodge by assault. Use artillery to break entrenchments first.

---

## Turn structure

**Your turn:**
1. Select and move your units
2. Fire your artillery if needed
3. Click **End turn**

**Botha's turn:**
- The AI automatically moves all Boer units
- Artillery fires first, then commandos reposition or assault
- Watch the log — it tells you what Botha is doing

**After Botha's turn:**
- Routing units take a step toward the river
- Rallied units recover partially
- Your units regain their full moves

---

## Moving units

1. **Click a red unit** to select it — a yellow border appears
2. **Yellow highlighted hexes** show where it can move — click one to move there
3. If a unit has moves remaining, you can keep moving it
4. A **darkened unit** has used all its moves this turn

**You can only move your own units on your turn.**

---

## Melee combat

Move a unit onto a hex occupied by an enemy unit to assault it. The attack resolves automatically using:
- Attacker strength + dice roll
- Defender morale + dice roll + terrain bonus + entrenchment bonus

Attacking uphill is hard. The Boers on the summit have a significant elevation defence bonus. Soften them with artillery first.

---

## Artillery — Fire mode

The Royal Artillery (RA) can bombard enemy units at range without moving adjacent.

1. **Click the RA unit** to select it
2. **Click Fire mode** button
3. **Orange highlighted hexes** show enemy units within range
4. **Click an orange hex** to fire

**Important:**
- Artillery can only fire at **visible** enemy units (fog of war applies)
- Firing uses the unit's full move allowance — it cannot move and fire
- Higher ground gives a firing bonus — the Boer Long Tom fires downhill onto your slopes, which is historically why it was so devastating

**Range:**
- Royal Artillery: 3 hexes
- Boer Long Tom: 4 hexes
- Boer Pom-Pom: 3 hexes

---

## Fog of war

You cannot see the full map. You only see:
- Hexes within your units' sight range
- Hexes you have previously seen (shown darker — last known state)
- Enemy units only appear if they are currently within sight range

**Sight range by terrain:**

| Your unit's terrain | Sight range |
|---|---|
| Open veld | 2 hexes |
| Slope | 1 hex |
| Summit / kopje | 3 hexes |

**Strategy:** Push a unit onto the summit early to get 3-hex visibility. This reveals the Boer positions around you — and unlocks artillery targets.

---

## Morale system

Every unit has a **morale bar** (the small coloured strip below the unit symbol):
- **Green** — morale 6–10, full fighting effectiveness
- **Amber** — morale 4–5, approaching shaken
- **Red** — morale 1–3, close to breaking

**Status effects:**

| Status | Colour | Effect |
|---|---|---|
| Steady | Normal unit colour | Full effectiveness |
| Shaken | Orange | Attack penalty; morale fragile |
| Routing | Yellow + RUN label | Cannot be ordered; flees south each turn |
| Rallied | Returns to Shaken | Can fight again at reduced effectiveness |

**Artillery hits drop morale faster than strength** — historically accurate, reflecting the psychological terror of shellfire in open trenches.

**If a routing unit reaches the Tugela River, it is lost from the battle.**

---

## Historical context

On the real 24 January 1900:

- British forces climbed in darkness and occupied what they thought was the commanding summit
- At dawn the mist lifted — they found themselves in shallow trenches surrounded by Boer guns on three sides
- The Lancashire Fusiliers and Royal Lancaster Regiment suffered devastating casualties
- Colonel Thorneycroft ordered the withdrawal at midnight — unaware the Boers were also close to breaking
- When dawn broke on 25 January, two Boer scouts found the summit empty

**The game is winnable.** History was not inevitable. Botha himself later acknowledged the Boers were close to withdrawing. A force that held until dawn might have changed everything.

---

## Strategy tips

**Early game (turns 1–3):**
- Move infantry up the slopes as fast as possible — your starting position is exposed
- Get at least one unit onto the summit to extend your visibility
- Use Thorneycroft's cavalry (TM) to flank wide — they have 3 moves

**Mid game (turns 4–8):**
- Use Royal Artillery to target entrenched Boer commandos before assaulting
- Prioritise the Pretoria Commando (PC) on the summit — they are your main obstacle
- Watch your morale bars — if a unit goes amber, consider pulling it back one hex

**Late game (turns 9–12):**
- Hold the summit with at least 2 units
- Keep the Royal Artillery in a supporting position — the Long Tom will target exposed summit units
- Don't let routing units reach the river — you need every strength point

**The Long Tom (LT) on Conical Hill is your biggest threat.** Range 4, elevation bonus, firing from the north. If you can get the Royal Artillery into a position to suppress it, do so early.

---

## Outcomes

| Outcome | Condition |
|---|---|
| British Victory — History Changed | Hold summit 6 consecutive turns |
| British Victory — Boers Routed | Reduce Boer strength below 6 |
| Boer Victory — British Broken | British strength falls below 12 |
| Boer Victory — Summit Not Held | Time expires without holding summit |

After the battle, the results screen shows your casualty report, unit summary, and a comparison to the historical outcome — styled as a period newspaper front page.

---

## Technical notes

The game is a self-contained HTML5 Canvas application. No server required. No data stored. Runs entirely in the browser.

**File:** `public/games/spion-kop.html`
**Integration:** iframe at `/battles/spion-kop/play`
**Dimensions:** 660×400px canvas, responsive via CSS scaling

---

## Adding this game to a new battle page

Copy `public/games/spion-kop.html` as a template for future battles.

The key sections to modify:
1. The SVG period map in the briefing header
2. The terrain layout (`buildTerrain()` function)
3. The unit definitions (`buildUnits()` function)
4. The AI scoring function (`aiScore()`) — adjust for new objectives
5. The victory conditions (`chkV()` function)
6. The results screen outcome text

Each battle needs its own HTML file placed at `public/games/[battle-slug].html`.

---

*Command The Past · commandthepast.com*
*Learn the battle. Command the battle. Change the outcome.*
