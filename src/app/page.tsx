import AboutSection from './components/AboutSection'
import ContactUsSection from './components/ContactUsSection'
import ElectricitySection from './components/ElectricitySection'
import FaqSection from './components/FaqSection'
import MainSection from './components/MainSection'
import CasesSection from './components/CasesSection'

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
