# EnvironMentors @ UC Davis — program website

The official public website for the UC Davis EnvironMentors program, hosted on **GitHub Pages**
as the org's **root site**. Intended to become the program's home at `environmentors.ucdavis.edu`,
replacing the old SiteFarm site.

- **Repo:** `EnvironMentors-UC-Davis/environmentors-uc-davis.github.io` (org-owned, public)
- **Live URL (now):** https://environmentors-uc-davis.github.io/ (clean root — no path)
- **Live URL (goal):** https://environmentors.ucdavis.edu/ — pending UC Davis IET DNS (CNAME → `environmentors-uc-davis.github.io`)
- **Pages source:** `master` branch, root
- **Interest form:** a Google Form is embedded in `index.html` (responses → Google Sheet); the form is owned/edited from the `grey-matter` project
- **Local clone:** `~/repos/environmentors-landing/` (folder name kept; the repo itself is `…github.io`)

> History: this started as `greymonroe/environmentors-landing` (a "landing page"), then was
> transferred to the org and renamed to the root-site form (both 2026-06-16). Old
> `greymonroe.github.io/...` and `.../environmentors-landing/` URLs do not durably redirect —
> the recruitment QR (bit.ly) and any hard-coded links should point to the root URL above.

> **Operational status, the DNS cutover plan, and the activity log live in the program repo:**
> `~/Dropbox/myapps/environmentors-program/website/README.md`. Update it when you change the site.

## Structure

- `index.html` — home / get-involved, with the embedded interest form
- `faq.html` — audience FAQ (linked in the top nav)
- `support.html` — giving + broader-impacts case for PIs
- `blog.html` — updates / highlights
- `site.css` — shared stylesheet
- `STYLE.md` — design/voice notes
- `photos/` — program photography
- `_archive/` — superseded work: the old **audience-picker** architecture
  (`audiences/*.html`, `build_audiences.py`, `styles.css`) and early design `_concepts/`.
  Kept for reference; not part of the live site.

## Custom-domain cutover (do in order)

1. **[blocked on IET]** UC Davis IET creates the `environmentors.ucdavis.edu` → `environmentors-uc-davis.github.io` CNAME.
2. **Only after DNS resolves:** Settings → Pages → Custom domain = `environmentors.ucdavis.edu` (writes a `CNAME` file). Do **not** commit a `CNAME` file before DNS is live — it breaks serving.
3. Wait for the auto HTTPS cert (~24 h), then enable "Enforce HTTPS".
4. Retire the SiteFarm version.

## Editing

Plain static HTML/CSS — edit the `.html` files and `site.css` directly, commit, push to `master`; Pages redeploys automatically. Keep content **public-safe** (no rosters, contact info, completed forms/applications, or medical data — those stay in access-controlled Google Drive and are only linked). Student faces, names, and project posters are fine to feature: all participants sign a media/photo release waiver.
