import type { Metadata } from 'next'
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({ subsets: ['latin'], variable: '--font-lora', display: 'swap' })

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Shreya Baid',
    template: '%s · Shreya Baid',
  },
  description: 'Writing on AI, climate, security, and philosophy.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shreya-baid.vercel.app',
    siteName: 'Shreya Baid',
  },
  twitter: {
    card: 'summary',
    creator: '@shreyabaid37',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSerif.variable} ${jetbrains.variable}`}>
      <body className="bg-paper text-ink font-body antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
