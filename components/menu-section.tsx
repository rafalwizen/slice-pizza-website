"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useRef, memo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { menuCategories, type MenuCategory } from "@/data/menu-items"

const MenuCategorySection = memo(function MenuCategorySection({ category }: { category: MenuCategory }) {
    const { language } = useLanguage()
    const scrollRef = useRef<HTMLDivElement>(null)

    const getScrollDistance = () => {
        if (scrollRef.current) {
            return scrollRef.current.offsetWidth
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
        <div className="mb-20">
            {/* Category Title */}
            <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16">{category.name[language]}</h2>

            <div className="relative max-w-7xl mx-auto">
                {/* Navigation Arrows */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 group hidden md:flex items-center justify-center"
                    aria-label={`Previous ${category.name[language]}`}
                >
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#cb3b32] to-[#a02e26] rounded-full border-2 border-[#cb3b32]/30 group-hover:border-[#cb3b32] transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                        <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ChevronLeft
                                size={28}
                                className="text-white drop-shadow-lg group-hover:translate-x-[-2px] transition-transform duration-200"
                            />
                        </div>
                    </div>
                </button>

                <button
                    onClick={scrollRight}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 group hidden md:flex items-center justify-center"
                    aria-label={`Next ${category.name[language]}`}
                >
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#cb3b32] to-[#a02e26] rounded-full border-2 border-[#cb3b32]/30 group-hover:border-[#cb3b32] transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                        <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ChevronRight
                                size={28}
                                className="text-white drop-shadow-lg group-hover:translate-x-[2px] transition-transform duration-200"
                            />
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
                    {category.items.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex-none w-full md:w-[calc(50%-0.75rem)] bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 snap-start group"
                        >
                            <div className="relative h-80 md:h-96 overflow-hidden">
                                <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name[language]}
                                    fill
                                    loading={index < 2 ? "eager" : "lazy"}
                                    quality={85}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-3xl md:text-4xl font-space-mono-bold text-white flex-1 uppercase">
                                        {item.name[language]}
                                    </h3>
                                    <span className="text-3xl md:text-4xl font-bold text-[#cb3b32] ml-4">{item.price[language]}</span>
                                </div>

                                <p className="text-xl text-gray-300 leading-relaxed font-space-mono-regular uppercase">
                                    {item.ingredients[language]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
})

const MenuSection = memo(function MenuSection() {
    return (
        <section id="menu" className="py-20 relative">
            {/* Optimized background image */}
            <Image src="/background.png" alt="Menu background" fill quality={75} sizes="100vw" className="object-cover" />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="container mx-auto px-4 relative z-10">
                {/* Render each category */}
                {menuCategories.map((category) => (
                    <MenuCategorySection key={category.id} category={category} />
                ))}
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
})

export default MenuSection
