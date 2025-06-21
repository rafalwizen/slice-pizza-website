"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function HeroSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const logoRef = useRef<HTMLImageElement>(null)

  const slides = ["/image2.jpeg", "/image1.jpeg"]

  useEffect(() => {
    setIsLoaded(true)

    // Start animation immediately when component mounts
    if (logoRef.current) {
      // Remove any delay - start animation immediately
      logoRef.current.style.animation = "logoEntrance 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards"
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow backgrounds with optimized loading */}
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                  src={slide || "/placeholder.svg"}
                  alt={`Background ${index + 1}`}
                  fill
                  priority={index === 0}
                  quality={85}
                  sizes="100vw"
                  className={`object-cover transition-transform duration-[6000ms] ease-out ${
                      index === currentSlide && isLoaded ? "scale-110" : "scale-100"
                  }`}
              />
            </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <Image
                ref={logoRef}
                src="/logo.png"
                alt="Slice Pizza Logo"
                width={300}
                height={150}
                priority
                quality={90}
                className="mx-auto h-24 md:h-32 w-auto mb-8 logo-initial"
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#cb3b32] mb-6 leading-tight whitespace-pre-line">
            {t("heroTitle")}
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed">{t("heroSubtitle")}</p>
        </div>

        <style jsx>{`
          @keyframes logoEntrance {
            0% {
              transform: scale(3) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: scale(1.5) rotate(720deg);
              opacity: 1;
            }
          }

          /* Logo starts in the initial animation state - no flash! */
          .logo-initial {
            transform: scale(3) rotate(0deg);
            opacity: 1;
          }
        `}</style>
      </section>
  )
}
