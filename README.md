# isbuiltwrong.com

Marketing content hub for Indian SMBs. Built with Astro + Tailwind CSS, deployed on Cloudflare Pages.

## Quick Start

```bash
npm install
npm run dev      # Local dev server
npm run build    # Production build
```

## Deploy to Cloudflare Pages

### Option 1: Dashboard (recommended for first setup)
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create
2. Connect GitHub → Select `khojkaro-9339/isbuiltwrong`
3. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy

### Option 2: Wrangler CLI
```bash
npx wrangler pages deploy dist
```

## Adding Blog Posts

Drop a markdown file in `src/content/blog/` with this frontmatter:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
date: 2026-05-25
tags: ["SEO", "Marketing"]
keywords: ["relevant search terms"]
---

Post content here...
```

Push to GitHub and Cloudflare auto-deploys.

## Languages

- English (default): `/`
- Hindi: `/hi/`
- Bengali: `/bn/`
- Nepali: `/ne/`

## Architecture

- **isbuiltwrong.com** → awareness/content (this site)
- **khojkaro.in** → service delivery (linked via CTAs)
- Both powered by QuickLabs Enterprises
