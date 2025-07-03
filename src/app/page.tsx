import { LanguageProvider } from "@/contexts/language-context"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"

// Lazy load non-critical components
const MenuSection = dynamic(() => import("@/components/menu-photos"), {
  loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,
})

const AboutSection = dynamic(() => import("@/components/about-section"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
})

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  loading: () => <div className="h-screen bg-black animate-pulse" />,
})

export default function Home() {
  return (
      <LanguageProvider>
        <div className="min-h-screen">
          <Header />
          <main>
            <HeroSection />
            {/*<MenuSection />*/}
            {/*<AboutSection />*/}
            <MenuSection />
            <ContactSection />
          </main>
        </div>
      </LanguageProvider>
  )
}
