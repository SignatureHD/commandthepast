# Command The Past

**Learn the battle. Command the battle. Change the outcome.**

An educational interactive history platform where you study real battles, understand the terrain and command decisions, then play a strategy game to recreate — or rewrite — history.

Launching with the **Battle of Spion Kop**, Anglo-Boer War, 23–24 January 1900.

---

## What this is

Command The Past combines narrative history with a turn-based hex strategy game built on actual battlefield geography. Each battle has three parts:

1. **Learn** — Read the history, study the terrain, understand what went wrong and why
2. **Battle page** — Key facts, order of battle, command decisions, confidence-rated sources
3. **Play** — Command the forces on a hex map based on the real terrain, with fog of war, morale, and AI opponents

The site is built as plain HTML/CSS/JS — no framework, no build step, no dependencies. It runs directly in any browser and is hosted on GitHub Pages.

---

## Site structure

```
index.html              Homepage
battles.html            Battle archive (all battles)
spion-kop.html          Spion Kop — battle overview & history
spion-kop-learn.html    Spion Kop — detailed learn page
spion-kop-play.html     Spion Kop — play the game
about.html              About the project
sources.html            Sources & historical methodology
styles.css              Global stylesheet (design system)
partials.js             Shared header/footer injected into every page
```

---

## The game — Spion Kop

A self-contained HTML5 Canvas hex strategy game. No server required. No data stored. Runs entirely in the browser.

**File:** `spion-kop-play.html` (the game is embedded inline)

### What you're playing

You command the British forces on 24 January 1900. The objective: hold the Spion Kop summit with at least 2 units for 6 consecutive turns. Louis Botha commands the Boer forces via AI.

**Game features:**
- Fog of war — you only see what your units can see
- Ranged artillery — bombard enemy positions from distance
- Morale system — units that take heavy fire break and flee
- Boer AI — Botha's forces respond and reposition each turn
- Historical terrain — Tugela River, Trichard's Drift, Aloe Knoll, Conical Hill, Twin Peaks, Green Hill

**Victory conditions:**

| Outcome | Condition |
|---|---|
| British Victory — History Changed | Hold summit 6 consecutive turns |
| British Victory — Boers Routed | Reduce Boer strength below 6 |
| Boer Victory — British Broken | British strength falls below 12 |
| Boer Victory — Summit Not Held | Time expires |

The game is winnable. Botha himself later acknowledged the Boers were close to withdrawing. History was not inevitable.

See [`how-to-play.md`](how-to-play.md) for full rules and strategy.

---

## Historical approach

All factual claims are confidence-rated:

| Badge | Meaning |
|---|---|
| ✓ Verified | Confirmed across multiple primary sources |
| ~ Probable | Strong evidence, minor source variation |
| ? Contested | Sources disagree — noted and explained |
| — Unknown | No reliable source located |

Primary sources used include South African History Online (SAHO), NARSSA/NAAIRS, the Military History Journal (SAMHS), Thomas Pakenham's *The Boer War* (1979), and period accounts by Churchill and Conan Doyle. Full source list and methodology at [`sources.html`](sources.html).

The platform presents both British and Boer perspectives and acknowledges uncertainty rather than inventing certainty.

---

## Running locally

No build step. Just open the files:

```bash
# Option 1 — open directly
open index.html

# Option 2 — serve locally (avoids any browser file:// restrictions)
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Deployment

Hosted on **GitHub Pages**. No configuration required.

To deploy your own fork:
1. Go to repository **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`
4. Save — site goes live at `https://YOUR-USERNAME.github.io/REPO-NAME/`

---

## Adding a new battle

Each battle needs:

1. A battle overview page (follow `spion-kop.html` as template)
2. A learn page (follow `spion-kop-learn.html`)
3. A play page with embedded game (follow `spion-kop-play.html`)
4. Entries added to the battle archive in `battles.html` and the nav in `partials.js`

The game itself (HTML5 Canvas) lives inline in the play page. Key sections to adapt:
- `buildTerrain()` — hex map layout
- `buildUnits()` — unit definitions for both sides
- `aiScore()` — AI objective scoring
- `chkV()` — victory conditions
- Results screen outcome text

---

## Planned battles (Phase 2)

- Battle of Blood River, 1838
- Battle of Isandlwana, 1879
- Battle of Majuba Hill, 1881
- Further Anglo-Boer War engagements

---

## Disclaimer

This platform is educational. Battle outcomes are simplified for gameplay. Casualty figures and strength estimates are sourced and confidence-rated where possible — contested figures are labelled. The goal is historical understanding, not glorification of conflict.

---

*Command The Past — commandthepast.com*
