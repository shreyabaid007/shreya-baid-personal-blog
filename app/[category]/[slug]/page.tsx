import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPost, getAllSlugs, CATEGORIES, formatDate } from '@/lib/posts'
import { markdownToHtml } from '@/lib/mdx'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ category: string; slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params
  const post = getPost(category, slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { category, slug } = await params
  const post = getPost(category, slug)
  if (!post) notFound()

  const cat = CATEGORIES[category]
  const htmlContent = await markdownToHtml(post.content)

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Back link */}
      <div className="mb-10 animate-fade-up">
        <Link
          href={`/${category}`}
          className="text-xs font-mono uppercase tracking-wide transition-colors"
          style={{ color: cat?.accent ?? '#0F4C35' }}
        >
          ← {cat?.label ?? category}
        </Link>
      </div>

      {/* Post header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-5 animate-fade-up animate-fade-up-delay-1">
          <time className="text-xs font-mono text-ink-faint" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="text-paper-border">·</span>
          <span className="text-xs font-mono text-ink-faint">
            {post.readingTime} min read
          </span>
        </div>

        <h1 className="font-display text-4xl font-bold text-ink leading-tight mb-5 animate-fade-up animate-fade-up-delay-2">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-lg text-ink-muted leading-relaxed animate-fade-up animate-fade-up-delay-3">
            {post.description}
          </p>
        )}

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5 animate-fade-up animate-fade-up-delay-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-sm"
                style={{
                  backgroundColor: cat?.accentPale ?? '#F4F4F5',
                  color: cat?.accent ?? '#71717A',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <hr className="divider !mb-10" />

      {/* Post body */}
      <article
        className="prose prose-stone max-w-none animate-fade-up animate-fade-up-delay-5"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-paper-border">
        <Link
          href={`/${category}`}
          className="text-sm font-mono text-ink-muted hover:text-ink transition-colors"
        >
          ← More in {cat?.label ?? category}
        </Link>
      </div>
    </div>
  )
}
