import dynamic from 'next/dynamic'

import MainSection from './components/MainSection'

const FaqSection = dynamic(() => import('./components/FaqSection'))
const AboutSection = dynamic(() => import('./components/AboutSection'))
const CasesSection = dynamic(() => import('./components/CasesSection'))
const ContactUsSection = dynamic(() => import('./components/ContactUsSection'))
const ElectricitySection = dynamic(
  () => import('./components/ElectricitySection'),
)

export default function Home() {
  return (
    <main>
      <MainSection />
      <AboutSection />
      <ElectricitySection />
      <CasesSection />
      <FaqSection />
      <ContactUsSection />
    </main>
  )
}
