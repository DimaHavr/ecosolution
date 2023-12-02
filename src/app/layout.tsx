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
  keywords: [
    'Renewable Energy',
    'Clean Energy',
    'Sustainable Energy',
    'Green Energy',
    'Solar Power',
    'Wind Energy',
    'Hydropower',
    'Biomass Energy',
    'Geothermal Energy',
    'Renewable Resources',
    'Alternative Energy',
    'Eco-Friendly Power',
    'Carbon Neutral',
    'Off-Grid Energy',
    'Photovoltaic Systems',
    'Renewable Energy Solutions',
    'Energy Efficiency',
    'Carbon Footprint Reduction',
    'Sustainable Living',
    'Green Technology',
    'Climate-Friendly Energy',
    'Net Zero Energy',
    'Eco-Energy',
    'Green Power Generation',
    'Renewable Energy Technologies',
    'Energy Conservation',
    'Environmental Sustainability',
    'Green Building',
    'Eco-Energy Solutions',
    'Sustainable Development',
  ],
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
        {children}
        <Footer />
      </body>
    </html>
  )
}
