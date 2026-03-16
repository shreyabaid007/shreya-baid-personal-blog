# Your Blog

A minimal, fast, editorial blog built with Next.js 15, MDX, and Tailwind CSS.
Inspired by Andrej Karpathy, Chip Huyen — writing that reads like a person, not a product.

---

## ✦ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → Opens at http://localhost:3000
```

---

## ✦ Personalise (do this first)

Search for `── REPLACE` across the project. Every file that needs your info is marked.

| File | What to change |
|---|---|
| `app/layout.tsx` | Site title, description, your URL, Twitter handle |
| `app/page.tsx` | Your name, bio, city, social links |
| `app/about/page.tsx` | Full about page copy |
| `components/Footer.tsx` | GitHub / Twitter / LinkedIn handles |
| `app/feed.xml/route.ts` | siteUrl, author name |
| `app/sitemap.ts` | siteUrl |

---

## ✦ Writing Posts

### Create a new post

Posts live in `content/{category}/your-post-slug.mdx`

**Categories:** `ai` · `climate` · `security` · `philosophy` · `notes`

### Frontmatter

```yaml
---
title: "Your Post Title"
description: "One or two sentences summarising the post. Shows in list view."
date: "2024-12-15"
tags: ["tag1", "tag2"]
draft: false          # set to true to hide from lists
---

Your content here...
```

### Markdown features

Everything in standard Markdown, plus:

**Code blocks with syntax highlighting:**
````
```python
def hello():
    return "world"
```
````

**GitHub Flavoured Markdown:** tables, task lists, strikethrough

**LaTeX math:** (install `remark-math` + `rehype-katex` from package.json if needed)
```
Inline: $E = mc^2$
Block:
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

---

## ✦ Adding a New Category

1. Open `lib/posts.ts`
2. Add your category to the `CATEGORIES` object:

```ts
yourslug: {
  slug: 'yourslug',
  label: 'Display Name',
  description: 'What this section is about.',
  accent: '#1E3A5F',       // hex color for the category
  accentPale: '#E6EEF7',   // light background version of accent
},
```

3. Create `content/yourslug/` folder
4. Start writing posts

---

## ✦ Deploy to Vercel (Free)

### First deploy

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURREPO.git
git push -u origin main

# 2. Go to vercel.com
#    → New Project → Import from GitHub → select your repo → Deploy
#    → Your site is live at yourrepo.vercel.app
```

### Every update after that

```bash
git add .
git commit -m "add post: your post title"
git push
# → Vercel auto-deploys in ~30 seconds
```

---

## ✦ Free Custom Subdomain via is-a.dev

Want `yourname.is-a.dev` instead of `yourname.vercel.app`? It's free and takes ~1 day.

```bash
# 1. Fork https://github.com/is-a-dev/register
# 2. Create file: domains/yourname.json
```

```json
{
  "description": "Personal blog",
  "repo": "https://github.com/YOURUSERNAME/YOURREPO",
  "owner": {
    "username": "YOURGITHUBUSERNAME",
    "email": "you@example.com"
  },
  "record": {
    "CNAME": "cname.vercel-dns.com"
  }
}
```

```bash
# 3. Open a pull request to is-a-dev/register
# 4. Usually approved within a few hours
# 5. In Vercel project settings → Domains → Add "yourname.is-a.dev"
```

---

## ✦ Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Home feed (all posts)
│   ├── globals.css             # Design tokens, base styles
│   ├── about/page.tsx          # About page
│   ├── [category]/
│   │   ├── page.tsx            # Category index (e.g. /ai)
│   │   └── [slug]/page.tsx     # Individual post
│   ├── feed.xml/route.ts       # RSS feed
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── not-found.tsx           # 404 page
├── components/
│   ├── Header.tsx              # Nav with category pills
│   ├── Footer.tsx              # Links + copyright
│   └── PostCard.tsx            # Post list item
├── content/
│   ├── ai/                     # Your AI posts (.mdx)
│   ├── climate/
│   ├── security/
│   ├── philosophy/
│   └── notes/
├── lib/
│   └── posts.ts                # Content reading + types
└── public/                     # Static assets (favicon, images)
```

---

## ✦ Adding Your Favicon

Drop these files in `public/`:
- `favicon.ico`
- `icon.png` (512×512)
- `apple-touch-icon.png` (180×180)

Or generate them at [favicon.io](https://favicon.io)

---

## ✦ Recommended Writing Workflow

1. Create `content/[category]/my-post-title.mdx`
2. Set `draft: true` in frontmatter while writing
3. Run `npm run dev` and preview at `localhost:3000/category/my-post-title`
4. Change `draft: false` when ready to publish
5. `git push` → live in ~30 seconds

---

## ✦ Dependencies

| Package | Purpose |
|---|---|
| `next` | Framework + routing + image opt |
| `gray-matter` | Parse MDX frontmatter |
| `next-mdx-remote` | Render MDX in server components |
| `rehype-pretty-code` | Code syntax highlighting (via Shiki) |
| `rehype-slug` | Heading anchor IDs |
| `rehype-autolink-headings` | Clickable heading links |
| `remark-gfm` | Tables, task lists, strikethrough |
| `tailwindcss` | Styling |
| `@tailwindcss/typography` | Prose styles for post body |
| `date-fns` | Date formatting |
| `clsx` | Conditional class names |
