"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function HeroSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const logoRef = useRef<HTMLImageElement>(null)

  const slides = ["/image2.jpeg", "/image1.jpeg"]

  useEffect(() => {
    // Start zoom effect immediately
    setIsLoaded(true)

    // GSAP Logo Animation
    if (logoRef.current) {
      // Set initial state
      gsap.set(logoRef.current, {
        scale: 3, // Increased from 2 to 3 (50% bigger than previous 2x)
        rotation: 0,
      })

      // Create timeline for logo animation
      const tl = gsap.timeline()

      tl.to(logoRef.current, {
        rotation: 720, // 2 full rotations
        scale: 1.5, // Final size 50% bigger than original
        duration: 2.5,
        ease: "back.out(1.7)",
      })
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => {
      clearInterval(interval)
    }
  }, [slides.length])

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow backgrounds */}
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <div
                  className={`w-full h-full bg-cover bg-center bg-no-repeat transform transition-transform duration-[6000ms] ease-out ${
                      index === currentSlide && isLoaded ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    backgroundImage: `url(${slide})`,
                  }}
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
                className="mx-auto h-24 md:h-32 w-auto mb-8"
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#cb3b32] mb-6 leading-tight whitespace-pre-line">
            {t("heroTitle")}
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed">{t("heroSubtitle")}</p>
        </div>
      </section>
  )
}
