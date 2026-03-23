import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Shreya Baid — Writing',
}

export default function HomePage() {
  redirect('/tech')
}
