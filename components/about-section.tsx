"use client"

import { useLanguage } from "@/contexts/language-context"

export default function AboutSection() {
    const { t } = useLanguage()

    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-[#cb3b32] mb-12">{t("aboutTitle")}</h2>

                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">{t("aboutText")}</p>
                </div>
            </div>
        </section>
    )
}
