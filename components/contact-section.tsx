"use client"

import { useLanguage } from "@/contexts/language-context"
import { memo } from "react"

const ContactSection = memo(function ContactSection() {
  const { t } = useLanguage()

  const openInGoogleMaps = () => {
    // Direct link to your pizzeria on Google Maps
    const pizzeriaUrl =
        "https://www.google.com/maps/place/Slice+Pizza+TG/@50.4435404,18.8549006,17z/data=!4m15!1m8!3m7!1s0x47112a2ec3746333:0x783b540fa714c3d4!2sZamkowa+6,+42-600+Tarnowskie+G%C3%B3ry!3b1!8m2!3d50.4435404!4d18.8549006!16s%2Fg%2F11c5ctkjl9!3m5!1s0x47112be1977340a9:0x84266294a4355457!8m2!3d50.4435404!4d18.8549006!16s%2Fg%2F11mdvwnw_c?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
    window.open(pizzeriaUrl, "_blank")
  }

  return (
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-[#cb3b32] mb-16">{t("contactTitle")}</h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Google Maps */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl cursor-pointer">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.123!2d18.8549006!3d50.4435404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47112be1977340a9%3A0x84266294a4355457!2sSlice%20Pizza%20TG!5e0!3m2!1spl!2spl!4v1640000000000!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Lokalizacja restauracji Slice Pizza"
                />

                {/* Overlay button */}
                <button
                    onClick={openInGoogleMaps}
                    className="absolute inset-0 w-full h-full bg-transparent cursor-pointer"
                    aria-label={t("openMapsLabel")}
                />
              </div>

              {/* Instructions text - visible on mobile */}
              <div className="mt-4 lg:hidden">
                <p className="text-gray-400 font-space-mono-regular text-sm text-center">{t("mapInstruction")}</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-space-mono-bold text-[#cb3b32] mb-3">{t("addressTitle")}</h3>
                <p className="text-lg text-gray-300 whitespace-pre-line font-space-mono-regular">{t("address")}</p>
              </div>

              <div>
                <h3 className="text-2xl font-space-mono-bold text-[#cb3b32] mb-3">{t("phoneTitle")}</h3>
                <a
                    href="tel:+48722720000"
                    className="text-lg text-gray-300 font-space-mono-regular hover:text-[#cb3b32] transition-colors duration-200"
                >
                  {t("phone")}
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-space-mono-bold text-[#cb3b32] mb-3">{t("hoursTitle")}</h3>
                <p className="text-lg text-gray-300 whitespace-pre-line font-space-mono-regular">{t("hours")}</p>
              </div>

              {/* Instructions text - visible on desktop */}
              <div className="pt-6 border-t border-gray-700 hidden lg:block">
                <p className="text-gray-400 font-space-mono-regular text-sm">{t("mapInstruction")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
})

export default ContactSection
