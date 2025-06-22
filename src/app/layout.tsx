import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
    metadataBase: new URL("https://slice-pizza-tg.vercel.app"), // Zmień na swoją domenę
    title: "Slice Pizza - Autentyczne smaki Włoch",
    description: "Najlepsza pizzeria w mieście. Autentyczne włoskie smaki przygotowane z pasją.",
    keywords: "pizza, pizzeria, włoska kuchnia, dostawa pizzy, Warszawa",
    authors: [{ name: "Slice Pizza" }],
    robots: "index, follow",
    openGraph: {
        title: "Slice Pizza - Autentyczne smaki Włoch",
        description: "Najlepsza pizzeria w mieście. Autentyczne włoskie smaki przygotowane z pasją.",
        type: "website",
        locale: "pl_PL",
        url: "https://slice-pizza-tg.vercel.app", // Zmień na swoją domenę
        siteName: "Slice Pizza",
        images: ["logo.png"]
    },
    twitter: {
        card: "summary_large_image",
        title: "Slice Pizza - Autentyczne smaki Włoch",
        description: "Najlepsza pizzeria w mieście. Autentyczne włoskie smaki przygotowane z pasją.",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl">
        <head>
            <link rel="preload" href="/fonts/BadRendezvousScript.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/logo-round.png" as="image" />
            <link rel="preload" href="/image2.jpeg" as="image" />
        </head>
        <body>{children}</body>
        </html>
    )
}
