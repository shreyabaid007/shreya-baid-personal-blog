'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CATEGORIES } from '@/lib/categories'
import clsx from 'clsx'

export default function Header() {
  const pathname = usePathname()
  const currentCategory = pathname.split('/')[1]

  return (
    <header className="border-b border-paper-border bg-paper sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="font-display text-xl font-bold text-ink tracking-tight hover:text-forest transition-colors"
          >
            Shreya Baid
          </Link>
          
        </div>

        <nav className="flex items-center gap-1 pb-3 overflow-x-auto no-scrollbar">
          <Link
            href="/"
            className={clsx(
              'tag flex-shrink-0',
              pathname === '/'
                ? 'bg-ink text-paper border-ink'
                : 'bg-transparent text-ink-muted border-paper-border hover:border-ink-faint hover:text-ink-soft'
            )}
          >
            All
          </Link>
          {Object.values(CATEGORIES).map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className={clsx(
                'tag flex-shrink-0',
                currentCategory === cat.slug
                  ? 'text-paper border-transparent'
                  : 'bg-transparent text-ink-muted border-paper-border hover:border-ink-faint hover:text-ink-soft'
              )}
              style={
                currentCategory === cat.slug
                  ? { backgroundColor: cat.accent, borderColor: cat.accent }
                  : {}
              }
            >
              {cat.slug === 'tech' ? 'Tech' :
               cat.slug === 'climate' ? 'Climate' :
               cat.slug === 'security' ? 'Security' :
               cat.slug === 'philosophy' ? 'Philosophy' :
               'Notes'}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
