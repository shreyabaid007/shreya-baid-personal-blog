import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { CATEGORIES, formatDate } from '@/lib/posts'

interface PostCardProps {
  post: Post
  showCategory?: boolean
  index?: number
}

export default function PostCard({ post, showCategory = true, index = 0 }: PostCardProps) {
  const cat = CATEGORIES[post.category]
  const delay = `animate-fade-up-delay-${Math.min(index + 1, 5)}`

  return (
    <article className={`animate-fade-up ${delay} group`}>
      <Link href={`/${post.category}/${post.slug}`} className="block py-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 min-w-0">
            {/* Meta row */}
            <div className="flex items-center gap-3 mb-2">
              <time className="text-xs text-ink-faint font-mono" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              {showCategory && cat && (
                <>
                  <span className="text-paper-border">·</span>
                  <span
                    className="text-xs font-mono uppercase tracking-wide"
                    style={{ color: cat.accent }}
                  >
                    {cat.label.split(' ')[0]}
                  </span>
                </>
              )}
              <span className="text-paper-border">·</span>
              <span className="text-xs text-ink-faint font-mono">
                {post.readingTime} min read
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-xl font-bold text-ink leading-snug mb-2 post-link inline">
              {post.title}
            </h2>

            {/* Description */}
            {post.description && (
              <p className="text-sm text-ink-muted leading-relaxed mt-2 line-clamp-2">
                {post.description}
              </p>
            )}

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded-sm"
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
          </div>
        </div>
      </Link>
      <hr className="divider !my-0" />
    </article>
  )
}
