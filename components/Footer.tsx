export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-paper-border mt-20">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-ink-faint font-mono">
          © {year} Shreya Baid
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/shreyabaid007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-faint font-mono hover:text-ink-soft transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/shreyabaid37"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-faint font-mono hover:text-ink-soft transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/shreyabaid16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-faint font-mono hover:text-ink-soft transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:shreyabaid16@gmail.com"
            className="text-xs text-ink-faint font-mono hover:text-ink-soft transition-colors"
          >
            Email
          </a>
          <a
            href="/feed.xml"
            className="text-xs text-ink-faint font-mono hover:text-ink-soft transition-colors"
          >
            RSS
          </a>
        </div>
      </div>
    </footer>
  )
}
