import type { Metadata } from 'next'
import '../styles/globals.css'
import { Providers } from '../components/providers/Providers'

export const metadata: Metadata = {
  title: 'Open Galaxy Lab',
  description: 'A premium interactive software company experience for Open Galaxy Lab.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
