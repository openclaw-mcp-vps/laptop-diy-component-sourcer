import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Laptop DIY Component Sourcer',
  description: 'Source components for custom laptop builds automatically. Monitor suppliers worldwide for screens, keyboards, batteries and more.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="abcfb945-ce4b-415b-9fc8-ba0667d79379"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
