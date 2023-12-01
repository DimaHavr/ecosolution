import './globals.css'

import type { Metadata } from 'next'
import { Fira_Sans, Oswald } from 'next/font/google'
import React from 'react'
import { Toaster } from 'react-hot-toast'

import Footer from './components/layout/Footer'
import { Header } from './components/layout/Header'

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
