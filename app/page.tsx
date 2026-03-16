import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shreya Baid — Writing',
}

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Intro */}
      <div className="mb-14 animate-fade-up">
        <h1 className="font-display text-4xl font-bold text-ink mb-4 leading-tight">
          Shreya Baid
        </h1>
        <p className="text-ink-soft leading-relaxed max-w-lg text-[1.05rem]">
          {/* Bio goes here — add it whenever you're ready */}
        </p>
        <div className="flex items-center gap-4 mt-5">
          <a
            href="https://github.com/shreyabaid007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-ink-muted hover:text-ink transition-colors uppercase tracking-wide"
          >
            GitHub ↗
          </a>
          <a
            href="https://twitter.com/shreyabaid37"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-ink-muted hover:text-ink transition-colors uppercase tracking-wide"
          >
            Twitter ↗
          </a>
          <a
            href="https://linkedin.com/in/shreyabaid16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-ink-muted hover:text-ink transition-colors uppercase tracking-wide"
          >
            LinkedIn ↗
          </a>
          
        </div>
      </div>

      <hr className="divider" />

      {posts.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-ink-muted font-mono text-sm">No posts yet. Start writing.</p>
        </div>
      ) : (
        <div>
          {posts.map((post, i) => (
            <PostCard key={`${post.category}/${post.slug}`} post={post} showCategory index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
