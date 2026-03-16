import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { CATEGORIES } from './categories'

export type { Category } from './categories'
export { CATEGORIES } from './categories'

const contentDir = path.join(process.cwd(), 'content')

export interface Post {
  slug: string
  category: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: number
  draft?: boolean
  content: string
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 220
  const wordCount = content.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

export function getPost(category: string, slug: string): Post | null {
  const extensions = ['mdx', 'md']
  for (const ext of extensions) {
    const filePath = path.join(contentDir, category, `${slug}.${ext}`)
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug,
        category,
        title: data.title ?? 'Untitled',
        description: data.description ?? '',
        date: data.date ? String(data.date) : '',
        tags: data.tags ?? [],
        readingTime: estimateReadingTime(content),
        draft: data.draft ?? false,
        content,
      }
    }
  }
  return null
}

export function getPostsByCategory(category: string): Post[] {
  const dir = path.join(contentDir, category)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
  const posts: Post[] = []

  for (const file of files) {
    const slug = file.replace(/\.(mdx|md)$/, '')
    const post = getPost(category, slug)
    if (post && !post.draft) posts.push(post)
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllPosts(): Post[] {
  const categories = Object.keys(CATEGORIES)
  const all: Post[] = []
  for (const cat of categories) {
    all.push(...getPostsByCategory(cat))
  }
  return all.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllSlugs(): { category: string; slug: string }[] {
  const categories = Object.keys(CATEGORIES)
  const slugs: { category: string; slug: string }[] = []
  for (const cat of categories) {
    const dir = path.join(contentDir, cat)
    if (!fs.existsSync(dir)) continue
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    for (const file of files) {
      slugs.push({ category: cat, slug: file.replace(/\.(mdx|md)$/, '') })
    }
  }
  return slugs
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
