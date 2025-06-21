import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

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
      <body>{children}</body>
    </html>
  )
}
