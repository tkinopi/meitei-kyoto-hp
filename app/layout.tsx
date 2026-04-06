import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'めいてい — 京都・河原町の日本料理と地酒',
  description: '京都・寺町通り近く。旬の食材を活かした和の一品料理と厳選地酒。カウンターでゆっくりと、日本の味と杯を。ミシュランガイド京都 ビブグルマン掲載。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
