import { notFound } from 'next/navigation'
import { getPostsByCategory, CATEGORIES } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((cat) => ({ category: cat }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const cat = CATEGORIES[category]
  if (!cat) return {}
  return {
    title: cat.label,
    description: cat.description,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = CATEGORIES[category]
  if (!cat) notFound()

  const posts = getPostsByCategory(category)

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Category header */}
      <div className="mb-8 animate-fade-up">
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: cat.accent }}
          />
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: cat.accent }}
          >
            {cat.slug}
          </span>
        </div>
        <h1 className="font-display text-3xl font-bold text-ink mb-3">{cat.label}</h1>
        {cat.description?.trim() ? (
          <p className="text-ink-muted leading-relaxed max-w-lg">{cat.description}</p>
        ) : null}
        <p className="text-xs font-mono text-ink-faint mt-4">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </p>
      </div>

      <hr className="divider" />

      {posts.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-ink-muted font-mono text-sm">Nothing published yet.</p>
          <p className="text-ink-faint font-mono text-xs mt-1">Check back soon.</p>
        </div>
      ) : (
        <div>
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} showCategory={false} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
