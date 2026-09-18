# Personal Website

A personal site built with Jekyll (natively supported by GitHub Pages — no build step to run yourself, just push Markdown). Four pages — About, Scholar, Blog, Contact — each with a left sidebar "On this page" table of contents that's generated automatically from that page's own `##`/`###` headings.

## Publish it

1. Push this repo to GitHub (`RoyceLuo/RoyceLuo.github.io`).
2. In the repo's **Settings → Pages**, set Source to "Deploy from a branch," branch `main`, folder `/ (root)`.
3. The site builds at `https://royceluo.github.io/`.

## Adding content

**A new section on an existing page (About/Scholar/Contact):**
Just add a `##` (or `###` for a sub-section) heading with a paragraph under it in the page's Markdown file — [`index.md`](index.md), [`scholar/index.md`](scholar/index.md), or [`contact/index.md`](contact/index.md). The sidebar TOC picks it up automatically; no other file needs to change.

**A new blog post:**
Add a file to [`_posts/`](_posts/) named `YYYY-MM-DD-a-short-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2026-01-15
tags: [tag-one, tag-two]
---

## First Section

Your writing here.
```

It shows up on the [Blog](blog/index.md) page automatically (newest first), searchable by keyword, filterable by clicking a tag or an archive year, and gets its own sidebar TOC from its `##`/`###` headings. The `tags` field is optional; the search box also matches on the post's title and its auto-generated excerpt (its first paragraph).

**Adding your photo to the About page:**
Put the image file in `assets/images/` (create the folder), then in [`index.md`](index.md) replace the `<!-- ... -->` comment inside `.hero-photo` with:

```html
<img src="{{ '/assets/images/your-photo.jpg' | relative_url }}" alt="Royce Luo">
```

## Structure

- `_config.yml` — site title, description, URL
- `_layouts/` — `default.html` (header/nav/footer shell), `page.html` (adds the sidebar TOC), `post.html` (blog posts)
- `_includes/nav.html` — the top nav bar
- `assets/css/style.css` — all styling (light/dark mode aware)
- `assets/js/toc.js` — builds the sidebar TOC from page headings at load time
- `index.md`, `scholar/index.md`, `blog/index.md`, `contact/index.md` — the four pages
- `_posts/` — blog posts

## Local preview (optional)

Requires Ruby + Bundler.

```sh
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000/`.
