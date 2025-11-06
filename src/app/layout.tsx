import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
    metadataBase: new URL("https://slicepizzatg.pl"),
    title: "ProstoKątna - Tarnowskie Góry",
    description:
        "Najlepsza pizzeria w Tarnowskich Górach. Autentyczne włoskie smaki przygotowane z pasją. ul. Zamkowa 6. Zamów: 722 720 000",
    keywords: "pizza, pizzeria, włoska kuchnia, dostawa pizzy, Tarnowskie Góry, ProstoKątna TG, ul. Zamkowa 6",
    authors: [{ name: "ProstoKątna TG" }],
    robots: "index, follow",
    openGraph: {
        title: "ProstoKątna Tarnowskie Góry",
        description:
            "Najlepsza pizzeria w Tarnowskich Górach. Autentyczne włoskie smaki przygotowane z pasją. ul. Zamkowa 6. Zamów: 722 720 000",
        type: "website",
        locale: "pl_PL",
        url: "https://slicepizzatg.pl",
        siteName: "ProstoKątna TG",
        images: ["/slice-logo.png"]
    },
    twitter: {
        card: "summary_large_image",
        title: "ProstoKątna TG - Autentyczne smaki Włoch | Tarnowskie Góry",
        description:
            "Najlepsza pizzeria w Tarnowskich Górach. Autentyczne włoskie smaki przygotowane z pasją. ul. Zamkowa 6. Zamów: 722 720 000",
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
            <link rel="preload" href="/fonts/SpaceMono-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/fonts/SpaceMono-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/logo-round.png" as="image" />
            <link rel="preload" href="/image2.jpeg" as="image" />
        </head>
        <body>{children}</body>
        </html>
    )
}
