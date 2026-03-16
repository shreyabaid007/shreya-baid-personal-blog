import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="font-mono text-ink-faint text-xs uppercase tracking-widest mb-4">404</p>
      <h1 className="font-display text-3xl font-bold text-ink mb-4">Nothing here</h1>
      <p className="text-ink-muted mb-8">
        This page doesn&apos;t exist. Maybe the post was moved or never published.
      </p>
      <Link
        href="/"
        className="text-sm font-mono text-forest hover:text-forest-light transition-colors"
      >
        ← Back to writing
      </Link>
    </div>
  )
}
