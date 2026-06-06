# DSSI Lab — al-folio drop-in files

Generated 2026-05-31. These mirror the al-folio repo layout. File paths below are relative to your repo root (the one your student pushes to `dssi-uga.github.io`).

## What goes where

| File(s) in this bundle | Copy to (repo root) | Action |
| :--- | :--- | :--- |
| `_bibliography/papers.bib` | `_bibliography/papers.bib` | **Overwrite.** Deletes the Einstein demo. Highest priority. |
| `_news/announcement_1..8.md` | `_news/` | Add. Delete the theme's sample `announcement_*.md` first. |
| `_projects/1..6_*.md` | `_projects/` | Add. Delete the theme's sample projects (`1_project.md`, etc.). |
| `_pages/about.md` | `_pages/about.md` | Replace body; **reconcile front matter** with your al-folio version (see note). |
| `_pages/projects.md` | `_pages/projects.md` | Replace. Keeps the standard grid; adds the funded-projects table. |
| `_pages/people.md` | `_pages/people.md` | Replace, or lift the **Alumni** section into your existing page. |
| `_pages/teaching.md` | `_pages/teaching.md` | Replace. Renames the empty "Opening" page to "join us" (permalink unchanged). |

## Before you build

1. **Photos.** Project cards point to existing `assets/img/gallery/lab-equipment-*.jpg` so the build won't break. Replace each card's `img:` with a real figure in `assets/img/projects/`.
2. **about.md front matter — version check.** Newer al-folio uses the `announcements:` block (included here). If your version is older and the homepage shows no news, replace that block with a single line: `news: true`.
3. **selected_papers.** The About page shows papers with `selected={true}` in `papers.bib` (5 are pre-marked). Adjust to taste.
4. **socials.** `social: true` pulls from `_data/socials.yml` — add Google Scholar, ORCID, email, and (optional) a lab LinkedIn there.
5. **`enable_project_categories`.** Ensure this is `true` in `_config.yml` for the categorized projects grid (al-folio default).

## Build & preview locally

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

Then commit and push; GitHub Pages (or the repo's Actions workflow) redeploys `dssi-uga.github.io`.

## Still to fix on the live site (not file-based)

- Home "Contact Us" card links to `/about/` (404) → repoint to `/people/`.
- Chenyu Xu's LinkedIn URL is malformed on the current People page (fixed here).
- Normalize remaining member bios to third person; standardize department names.
- Add a current PI photo; confirm pronoun usage site-wide.

All content is drawn from your CV, the STREAM news document, and the live site. Bracketed `[...]` items need your confirmation.
