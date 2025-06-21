"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { menuItems } from "@/data/menu-items"

export default function MenuSection() {
  const { t } = useLanguage()
  const { language } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  // Calculate scroll distance based on container width
  const getScrollDistance = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth
      // On desktop, show 2 items, so scroll by container width to show next 2
      return containerWidth
    }
    return 0
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollDistance = getScrollDistance()
      scrollRef.current.scrollBy({ left: -scrollDistance, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollDistance = getScrollDistance()
      scrollRef.current.scrollBy({ left: scrollDistance, behavior: "smooth" })
    }
  }

  return (
      <section
          id="menu"
          className="py-20 relative"
          style={{
            backgroundImage: "url(/background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-black mb-16">{t("menuTitle")}</h2>

          <div className="relative max-w-7xl mx-auto">
            {/* Navigation Arrows */}
            <button
                onClick={scrollLeft}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 group hidden md:flex items-center justify-center"
                aria-label="Previous pizza"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-[#cb3b32] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-150"></div>
                {/* Main button */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#cb3b32] to-[#a02e26] rounded-full border-2 border-[#cb3b32]/30 group-hover:border-[#cb3b32] transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                  {/* Inner highlight */}
                  <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ChevronLeft
                        size={28}
                        className="text-white drop-shadow-lg group-hover:translate-x-[-2px] transition-transform duration-200"
                    />
                  </div>
                </div>
              </div>
            </button>

            <button
                onClick={scrollRight}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 group hidden md:flex items-center justify-center"
                aria-label="Next pizza"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-[#cb3b32] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-150"></div>
                {/* Main button */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#cb3b32] to-[#a02e26] rounded-full border-2 border-[#cb3b32]/30 group-hover:border-[#cb3b32] transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                  {/* Inner highlight */}
                  <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ChevronRight
                        size={28}
                        className="text-white drop-shadow-lg group-hover:translate-x-[2px] transition-transform duration-200"
                    />
                  </div>
                </div>
              </div>
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-16"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
            >
              {menuItems.map((item) => (
                  <div
                      key={item.id}
                      className="flex-none w-full md:w-[calc(50%-0.75rem)] bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 snap-start group"
                  >
                    <div className="relative h-80 md:h-96 overflow-hidden">
                      <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name[language]}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>

                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-white flex-1">{item.name[language]}</h3>
                        <span className="text-3xl md:text-4xl font-bold text-[#cb3b32] ml-4">{item.price[language]}</span>
                      </div>

                      <p className="text-xl text-gray-300 leading-relaxed">{item.ingredients[language]}</p>
                    </div>
                  </div>
              ))}
            </div>

            {/* Mobile scroll indicator */}
            <div className="flex justify-center mt-8 md:hidden">
              <div className="flex space-x-2">
                {menuItems.map((_, index) => (
                    <div key={index} className="w-2 h-2 bg-white/30 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
  )
}
