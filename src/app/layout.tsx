import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Slice Pizza - Autentyczne smaki Włoch",
  description: "Najlepsza pizzeria w mieście. Autentyczne włoskie smaki przygotowane z pasją.",
  keywords: "pizza, pizzeria, włoska kuchnia, dostawa pizzy, Warszawa",
  authors: [{ name: "Slice Pizza" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Slice Pizza - Autentyczne smaki Włoch",
    description: "Najlepsza pizzeria w mieście. Autentyczne włoskie smaki przygotowane z pasją.",
    type: "website",
    locale: "pl_PL",
    images: ["logo.png"]
  },
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
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/image2.jpeg" as="image" />
      </head>
      <body>{children}</body>
      </html>
  )
}
