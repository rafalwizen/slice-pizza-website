import {
    Pacifico,
    Lobster,
    Great_Vibes,
    Chewy,
    Amatic_SC,
    Caveat,
    Righteous,
    Bangers,
    Fredoka,
    Baloo_2,
    Satisfy,
    Italianno,
    Playball,
    Marck_Script,
    Cinzel_Decorative,
    Kalam,
    Comfortaa,
    Nunito,
    Dancing_Script,
    Permanent_Marker,
} from "next/font/google"

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] })
const lobster = Lobster({ weight: "400", subsets: ["latin"] })
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] })
const chewy = Chewy({ weight: "400", subsets: ["latin"] })
const amaticSC = Amatic_SC({ weight: ["400", "700"], subsets: ["latin"] })
const caveat = Caveat({ weight: ["400", "700"], subsets: ["latin"] })
const righteous = Righteous({ weight: "400", subsets: ["latin"] })
const bangers = Bangers({ weight: "400", subsets: ["latin"] })
const fredoka = Fredoka({ weight: ["400", "700"], subsets: ["latin"] })
const baloo2 = Baloo_2({ weight: ["400", "700"], subsets: ["latin"] })
const satisfy = Satisfy({ weight: "400", subsets: ["latin"] })
const italianno = Italianno({ weight: "400", subsets: ["latin"] })
const playball = Playball({ weight: "400", subsets: ["latin"] })
const marckScript = Marck_Script({ weight: "400", subsets: ["latin"] })
const cinzelDecorative = Cinzel_Decorative({ weight: ["400", "700"], subsets: ["latin"] })

// Additional fonts for pizza websites
const kalam = Kalam({ weight: ["400", "700"], subsets: ["latin"] })
const comfortaa = Comfortaa({ weight: ["400", "700"], subsets: ["latin"] })
const nunito = Nunito({ weight: ["400", "700"], subsets: ["latin"] })
const dancingScript = Dancing_Script({ weight: ["400", "700"], subsets: ["latin"] })
const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"] })

const fonts = [
    { name: "Pacifico", font: pacifico, description: "Casual, friendly script perfect for pizza branding" },
    { name: "Lobster", font: lobster, description: "Bold script with personality, great for headers" },
    { name: "Great Vibes", font: greatVibes, description: "Elegant script for upscale pizza restaurants" },
    { name: "Chewy", font: chewy, description: "Playful and fun, perfect for family pizza places" },
    { name: "Amatic SC", font: amaticSC, description: "Hand-drawn feel, great for rustic pizza joints" },
    { name: "Caveat", font: caveat, description: "Natural handwriting style, casual and approachable" },
    { name: "Righteous", font: righteous, description: "Bold and strong, perfect for pizza shop names" },
    { name: "Bangers", font: bangers, description: "Comic book style, fun for kids pizza menus" },
    { name: "Fredoka", font: fredoka, description: "Rounded and friendly, modern pizza branding" },
    { name: "Baloo 2", font: baloo2, description: "Soft and approachable, great for body text" },
    { name: "Satisfy", font: satisfy, description: "Casual script, perfect for pizza taglines" },
    { name: "Italianno", font: italianno, description: "Elegant Italian-inspired script" },
    { name: "Playball", font: playball, description: "Sporty script, great for sports bar pizzerias" },
    { name: "Marck Script", font: marckScript, description: "Marker-style script, casual and bold" },
    { name: "Cinzel Decorative", font: cinzelDecorative, description: "Classical elegance for premium pizza" },
    // Additional fonts
    { name: "Kalam", font: kalam, description: "Handwritten style, warm and inviting" },
    { name: "Comfortaa", font: comfortaa, description: "Modern rounded sans-serif, clean and friendly" },
    { name: "Nunito", font: nunito, description: "Versatile sans-serif, great for menus and body text" },
    { name: "Dancing Script", font: dancingScript, description: "Flowing script, elegant for Italian restaurants" },
    { name: "Permanent Marker", font: permanentMarker, description: "Bold marker style, great for specials and promos" },
]

export default function PizzaFonts() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Pizza Website Font Showcase</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Explore the perfect fonts for your pizza website in two color variants
                    </p>
                    <div className="flex justify-center gap-8 mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-black rounded"></div>
                            <span className="text-sm">Black on Red (#cb3b32)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded border-2 border-gray-300" style={{ backgroundColor: "#cb3b32" }}></div>
                            <span className="text-sm">Red (#cb3b32) on Black</span>
                        </div>
                    </div>
                </div>

                <div className="grid gap-8">
                    {fonts.map((fontItem, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">{fontItem.name}</h2>
                                <p className="text-gray-600">{fontItem.description}</p>
                            </div>

                            <div className="grid md:grid-cols-2">
                                {/* Black text on red background */}
                                <div
                                    className="p-8 flex flex-col justify-center items-center text-center"
                                    style={{ backgroundColor: "#cb3b32" }}
                                >
                                    <div className={`${fontItem.font.className} text-black`}>
                                        <div className="text-4xl md:text-5xl mb-4 font-bold">{"Mario's Pizza"}</div>
                                        <div className="text-2xl md:text-3xl mb-2">Authentic Italian</div>
                                        <div className="text-lg md:text-xl">Fresh • Delicious • Traditional</div>
                                    </div>
                                </div>

                                {/* Red text on black background */}
                                <div className="bg-black p-8 flex flex-col justify-center items-center text-center">
                                    <div className={`${fontItem.font.className}`} style={{ color: "#cb3b32" }}>
                                        <div className="text-4xl md:text-5xl mb-4 font-bold">{"Mario's Pizza"}</div>
                                        <div className="text-2xl md:text-3xl mb-2">Authentic Italian</div>
                                        <div className="text-lg md:text-xl">Fresh • Delicious • Traditional</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Font Recommendations for Pizza Websites</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Best for Headers & Branding:</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    • <strong>Pacifico</strong> - Most popular for pizza branding
                                </li>
                                <li>
                                    • <strong>Lobster</strong> - Bold and attention-grabbing
                                </li>
                                <li>
                                    • <strong>Righteous</strong> - Strong and memorable
                                </li>
                                <li>
                                    • <strong>Bangers</strong> - Fun and energetic
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Best for Body Text & Menus:</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    • <strong>Nunito</strong> - Clean and readable
                                </li>
                                <li>
                                    • <strong>Comfortaa</strong> - Modern and friendly
                                </li>
                                <li>
                                    • <strong>Baloo 2</strong> - Soft and approachable
                                </li>
                                <li>
                                    • <strong>Fredoka</strong> - Rounded and welcoming
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
