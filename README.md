# iterate1

**🌐 Live site: [https://rohandesai007.github.io/iterate1/](https://rohandesai007.github.io/iterate1/)**

A 108-day manifestation website displaying the mantra:

> **8277247 **

Each day page renders the mantra **1,259,712 times** (108 × 108 × 108) using
progressive JavaScript chunking so the browser stays responsive.

A collapsible **Binary representation** panel on each page shows the mantra
encoded as 8-bit binary values (e.g. `00111000 00110010 …`).  
This is purely decorative — binary encoding is **not** encryption; it is
trivially reversible and provides zero security.

## Structure

```
index.html              Home page – links to all 108 day pages
styles.css              Shared stylesheet
daily.json              Tracks the current day (updated by workflow)
days/day-001.html       Day 1  – 2026-03-06
…
days/day-108.html       Day 108 – 2026-06-21
.github/workflows/
  daily-pr.yml          Daily automation workflow
```

## Viewing locally

Open `index.html` with any static-file server (required for `fetch('daily.json')` to work):

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080
```

Or open individual day files directly in a browser:

```
days/day-001.html
```

## GitHub Pages setup

1. Go to **Settings → Pages**.
2. Set **Source** to `Deploy from a branch`, branch `main`, folder `/` (root).
3. Save. Your site will be live at `https://<org>.github.io/iterate1/`.

## Daily automation

The workflow `.github/workflows/daily-pr.yml` runs every day at **00:00 UTC**:

1. Computes the current day number (1–108) relative to 2026-03-06.
2. Updates `daily.json` with today's day and date.
3. Creates a branch `daily/day-XXX`, commits, pushes, and opens a PR into `main`.
4. GitHub sends notifications to all repository watchers automatically.

You can also trigger it manually from **Actions → Daily Manifestation PR → Run workflow**.

### Auto-merge (optional)

To auto-merge daily PRs, enable **Auto-merge** in repository settings and add
this step to the workflow (after `Open PR into main`):

```yaml
- name: Enable auto-merge
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  run: |
    gh pr merge --auto --squash "daily/day-${{ steps.compute.outputs.day_pad }}"
```

No external services or email providers are used.
All notifications come through standard GitHub PR notifications.
