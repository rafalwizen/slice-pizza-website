"use client"

import {createContext, useContext, useState, type ReactNode} from "react"

type Language = "pl" | "en"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const translations = {
    pl: {
        // Navigation
        menu: "Menu",
        about: "O nas",
        contact: "Kontakt",

        // Hero
        heroTitle: "Slice to meet You",
        heroSubtitle: "Najlepsza pizza w mieście!",
        heroSubtitle2: "Włoskie smaki",
        heroSubtitle3: "Świeże składniki",
        heroSubtitle4: "Chrupiące ciasto",

        // Menu
        menuTitle: "Nasze Specjalności",

        // About
        aboutTitle: "Nasza Historia",
        aboutText:
            "Od ponad 20 lat serwujemy najlepsze pizze w mieście. Nasze ciasto przygotowujemy codziennie rano z najwyższej jakości mąki, a składniki pochodzą od lokalnych dostawców. Każda pizza jest przygotowywana z pasją i miłością do włoskiej kuchni.",

        // Contact
        contactTitle: "Znajdziesz nas tutaj",
        nameLabel: "Imię",
        emailLabel: "Email",
        messageLabel: "Wiadomość",
        sendButton: "Wyślij wiadomość",
        addressTitle: "Adres",
        address: "ul. Zamkowa 6\n42-600 Tarnowskie Góry",
        phoneTitle: "Telefon",
        phone: "722 720 000",
        hoursTitle: "Godziny otwarcia",
        hours: "Pon-Wt: Zamknięte\nŚr-Czw: 11:00–22:00\nPt-Sob: 11:00–23:00\nNie: 11:00–22:00",
        directionsButton: "Otwórz w Google Maps",
        mapInstruction: "Kliknij mapę, aby przejść do Google Maps",
        openMapsLabel: "Otwórz w Google Maps",

        // Order
        orderTitle: "Zamów online",
    },
    en: {
        // Navigation
        menu: "Menu",
        about: "About Us",
        contact: "Contact",

        // Hero
        heroTitle: "Slice to meet You",
        heroSubtitle: "The best pizza in town!",
        heroSubtitle2: "Authentic Italian taste",
        heroSubtitle3: "Fresh ingredients",
        heroSubtitle4: "Crispy crust",

        // Menu
        menuTitle: "Our Specialties",

        // About
        aboutTitle: "Our Story",
        aboutText:
            "For over 20 years, we have been serving the best pizzas in the city. We prepare our dough fresh every morning using the highest quality flour, and our ingredients come from local suppliers. Every pizza is prepared with passion and love for Italian cuisine.",

        // Contact
        contactTitle: "You'll find us here",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        sendButton: "Send Message",
        addressTitle: "Address",
        address: "ul. Zamkowa 6\n42-600 Tarnowskie Góry",
        phoneTitle: "Phone",
        phone: "722 720 000",
        hoursTitle: "Opening Hours",
        hours: "Mon-Tue: Closed\nWed-Thu: 11:00–22:00\nFri-Sat: 11:00–23:00\nSun: 11:00–22:00",
        directionsButton: "Open in Google Maps",
        mapInstruction: "Click the map to go to Google Maps",
        openMapsLabel: "Open in Google Maps",

        // Order
        orderTitle: "Order online",
    },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({children}: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("pl")

    const t = (key: string): string => {
        return translations[language][key as keyof (typeof translations)["pl"]] || key
    }

    return <LanguageContext.Provider value={{language, setLanguage, t}}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
