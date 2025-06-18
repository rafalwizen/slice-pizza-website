import type React from "react"
import type { Metadata } from "next"
import { Amatic_SC } from "next/font/google"
import "./globals.css"

const amaticSC = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Slice Pizza - Autentyczne smaki Włoch",
  description: "Najlepsza pizzeria w mieście. Autentyczne włoskie smaki przygotowane z pasją.",
  openGraph: {
    title: "Slice Pizza - Autentyczne smaki Włoch",
    description: "Najlepsza pizzeria w mieście. Autentyczne włoskie smaki przygotowane z pasją.",
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
      <body className={amaticSC.className}>{children}</body>
    </html>
  )
}
