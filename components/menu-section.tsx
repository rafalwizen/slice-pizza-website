"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function MenuSection() {
  const { t } = useLanguage()

  const menuItems = [
    {
      name: t("pizza1Name"),
      description: t("pizza1Description"),
      price: t("pizza1Price"),
      image: "/image1.jpeg",
    },
    {
      name: t("pizza2Name"),
      description: t("pizza2Description"),
      price: t("pizza2Price"),
      image: "/image2.jpeg",
    },
  ]

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
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">{t("menuTitle")}</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl hover:shadow-[#cb3b32]/20 transition-shadow duration-300"
            >
              <div className="relative h-64 md:h-80">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  <span className="text-2xl font-bold text-[#cb3b32]">{item.price}</span>
                </div>

                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
