"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { memo, useCallback } from "react"

const Header = memo(function Header() {
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#cb3b32]/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Image
                src="/logo-round.png"
                alt="Slice Pizza Logo"
                width={60}
                height={60}
                priority
                className="h-12 w-12 rounded-full"
            />
            <div className="hidden md:flex space-x-6">
              <button
                  onClick={() => scrollToSection("menu")}
                  className="text-xl text-white hover:text-[#cb3b32] transition-colors duration-200"
              >
                {t("menu")}
              </button>
              <button
                  onClick={() => scrollToSection("about")}
                  className="text-xl text-white hover:text-[#cb3b32] transition-colors duration-200"
              >
                {t("about")}
              </button>
              <button
                  onClick={() => scrollToSection("contact")}
                  className="text-xl text-white hover:text-[#cb3b32] transition-colors duration-200"
              >
                {t("contact")}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                  onClick={() => setLanguage("pl")}
                  className={`px-3 py-1 rounded text-base font-medium transition-colors duration-200 ${
                      language === "pl" ? "bg-[#cb3b32] text-white" : "text-gray-300 hover:text-white"
                  }`}
              >
                PL
              </button>
              <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded text-base font-medium transition-colors duration-200 ${
                      language === "en" ? "bg-[#cb3b32] text-white" : "text-gray-300 hover:text-white"
                  }`}
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      </header>
  )
})

export default Header
