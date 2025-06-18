"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = ["/image2.jpeg", "/image1.jpeg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
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
              index === currentSlide ? "scale-110" : "scale-100"
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
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Slice Pizza Logo"
            width={300}
            height={150}
            className="mx-auto h-24 md:h-32 w-auto mb-8"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#cb3b32] mb-6 leading-tight">
          {t("heroTitle")}
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">{t("heroSubtitle")}</p>
      </div>
    </section>
  )
}
