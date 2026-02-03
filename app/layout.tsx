import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DuronBet - Análise e Sinais de Tênis | Plataforma #1',
  description: 'Plataforma de análise profissional de tênis e sinais para apostas esportivas. Maximize seus resultados com nossas análises especializadas com IA.',
  keywords: 'tênis, apostas, sinais, análise, betting, tennis, tips, duronbet, durons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
