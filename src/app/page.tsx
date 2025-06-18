import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MenuSection from "@/components/menu-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <MenuSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  )
}
