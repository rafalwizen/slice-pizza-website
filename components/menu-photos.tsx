"use client"

import { useLanguage } from "@/contexts/language-context"
import { memo, useState } from "react"

const MenuSection = memo(function MenuSection() {
    const { t } = useLanguage()
    const [modalImage, setModalImage] = useState<string | null>(null)

    const openModal = (src: string) => {
        setModalImage(src)
        document.body.style.overflow = "hidden" // blokada scrolla pod modalem
    }

    const closeModal = () => {
        setModalImage(null)
        document.body.style.overflow = "" // odblokuj scroll
    }

    return (
        <section id="menu" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {[{ src: "/menu1.webp", alt: t("menuImage1Alt") }, { src: "/menu2.webp", alt: t("menuImage2Alt") }].map(({ src, alt }) => (
                        <div
                            key={src}
                            className="relative w-full aspect-[7/10] rounded-lg overflow-hidden shadow-2xl cursor-pointer"
                            onClick={() => openModal(src)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={e => (e.key === "Enter" || e.key === " ") && openModal(src)}
                            aria-label={`${t("openImage")} ${alt}`}
                        >
                            <img
                                src={src}
                                alt={alt}
                                className={`w-full h-full rounded-lg ${
                                    src === "/menu1.webp" ? "object-contain bg-black" : "object-cover"
                                }`}
                                loading="lazy"
                            />
                        </div>
                    ))}

                </div>
            </div>

            {/* Modal */}
            {modalImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-label={t("closeImage")}
                >
                    <img
                        src={modalImage}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                        onClick={e => e.stopPropagation()} // zapobiega zamknięciu przy kliknięciu na obraz
                    />
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
                        aria-label={t("closeImage")}
                    >
                        &times;
                    </button>
                </div>
            )}
        </section>
    )
})

export default MenuSection
