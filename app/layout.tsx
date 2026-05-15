import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Review Simulator — Ace Your Technical Interviews',
  description: 'Practice code reviews with AI-generated buggy snippets. Sharpen your eye for real bugs before your next senior dev interview.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="61f7e0e5-2d25-4ad4-af78-f9a9b6f1fbd5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
