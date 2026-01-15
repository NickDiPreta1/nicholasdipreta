# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

This is a personal blog built with Astro 5, using the content collections API for blog posts.

### Content System
- Blog posts are Markdown/MDX files in `src/content/blog/`
- Content schema defined in `src/content.config.ts` requires: title, description, pubDate; optional: updatedDate, heroImage
- Dynamic routing via `src/pages/blog/[...slug].astro` renders posts using the `BlogPost` layout

### Key Files
- `src/consts.ts` - Site-wide constants (SITE_TITLE, SITE_DESCRIPTION)
- `src/components/BaseHead.astro` - SEO meta tags, imports global CSS
- `src/layouts/BlogPost.astro` - Blog post template with hero image support
- `src/pages/rss.xml.js` - RSS feed generation

### Integrations
- @astrojs/mdx - MDX support for blog posts
- @astrojs/sitemap - Automatic sitemap generation
- sharp - Image optimization
