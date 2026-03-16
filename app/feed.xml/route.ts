import { getAllPosts } from '@/lib/posts'
import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const posts = getAllPosts()

  const siteUrl = 'https://shreya-baid.vercel.app'
  const author = 'Shreya Baid'
  const siteTitle = 'Shreya Baid'
  const siteDescription = 'Writing on AI, climate, security, and philosophy.'

  const items = posts.map((post) => {
    const url = `${siteUrl}/${post.category}/${post.slug}`
    const pubDate = new Date(post.date).toUTCString()
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>${post.category}</category>
    </item>`
  }).join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteTitle}</title>
    <link>${siteUrl}</link>
    <description>${siteDescription}</description>
    <language>en-us</language>
    <managingEditor>${author}</managingEditor>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
