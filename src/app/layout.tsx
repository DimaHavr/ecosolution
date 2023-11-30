import type { Metadata } from 'next'
import { Oswald, Fira_Sans } from 'next/font/google'
import './globals.css'
import { Header } from './components/layout/Header'
import Footer from './components/layout/Footer'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const oswald = Oswald({
  weight: ['300', '400', '700', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
})
const firaSans = Fira_Sans({
  weight: ['300', '400', '700', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-firaSans',
})

export const metadata: Metadata = {
  title: 'EcoSolution',
  description: 'Renewable energy For any task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${oswald.variable} ${firaSans.variable}`}>
        <Toaster />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
