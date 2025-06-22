export interface MenuItem {
    id: string
    name: {
        pl: string
        en: string
    }
    ingredients: {
        pl: string
        en: string
    }
    price: {
        pl: string
        en: string
    }
    image: string
}

export interface MenuCategory {
    id: string
    name: {
        pl: string
        en: string
    }
    items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
    {
        id: "snacks",
        name: {
            pl: "przekąski",
            en: "snacks",
        },
        items: [
            {
                id: "bruschetta-1",
                name: {
                    pl: "Bruschetta Klasyczna",
                    en: "Classic Bruschetta",
                },
                ingredients: {
                    pl: "Świeże pomidory, bazylia, czosnek, oliwa z oliwek, pieczywo ciabatta",
                    en: "Fresh tomatoes, basil, garlic, olive oil, ciabatta bread",
                },
                price: {
                    pl: "18 zł",
                    en: "18 zł",
                },
                image: "/image1.jpeg",
            },
            {
                id: "antipasto-2",
                name: {
                    pl: "Antipasto Misto",
                    en: "Mixed Antipasto",
                },
                ingredients: {
                    pl: "Szynka parmeńska, salami, mozzarella, oliwki, suszone pomidory",
                    en: "Parma ham, salami, mozzarella, olives, sun-dried tomatoes",
                },
                price: {
                    pl: "32 zł",
                    en: "32 zł",
                },
                image: "/image2.jpeg",
            },
            {
                id: "arancini-3",
                name: {
                    pl: "Arancini Siciliane",
                    en: "Sicilian Arancini",
                },
                ingredients: {
                    pl: "Kulki ryżowe z mozzarellą, panierowane, sos pomidorowy",
                    en: "Rice balls with mozzarella, breaded, tomato sauce",
                },
                price: {
                    pl: "24 zł",
                    en: "24 zł",
                },
                image: "/image1.jpeg",
            },
            {
                id: "focaccia-4",
                name: {
                    pl: "Focaccia z Rozmarynem",
                    en: "Rosemary Focaccia",
                },
                ingredients: {
                    pl: "Świeży rozmaryn, oliwa z oliwek, sól morska, czosnek",
                    en: "Fresh rosemary, olive oil, sea salt, garlic",
                },
                price: {
                    pl: "16 zł",
                    en: "16 zł",
                },
                image: "/image2.jpeg",
            },
        ],
    },
    {
        id: "pizza",
        name: {
            pl: "pizza",
            en: "pizza",
        },
        items: [
            {
                id: "pizza-pear-gorgonzola-1",
                name: {
                    pl: "Pizza z Gruszką i Gorgonzolą",
                    en: "Pear & Gorgonzola Pizza",
                },
                ingredients: {
                    pl: "Plastry gruszki, kremowy gorgonzola, chrupiące orzechy włoskie, rukola, miód",
                    en: "Pear slices, creamy gorgonzola, crunchy walnuts, arugula, honey",
                },
                price: {
                    pl: "42 zł",
                    en: "42 zł",
                },
                image: "/image1.jpeg",
            },
            {
                id: "pizza-artisan-2",
                name: {
                    pl: "Pizza Rzemieślnicza",
                    en: "Artisan Pizza",
                },
                ingredients: {
                    pl: "Ręcznie robione ciasto, san marzano, mozzarella di bufala, świeża bazylia, oliwa z oliwek",
                    en: "Hand-made dough, san marzano, mozzarella di bufala, fresh basil, olive oil",
                },
                price: {
                    pl: "38 zł",
                    en: "38 zł",
                },
                image: "/image2.jpeg",
            },
            {
                id: "pizza-quattro-stagioni-3",
                name: {
                    pl: "Pizza Quattro Stagioni",
                    en: "Four Seasons Pizza",
                },
                ingredients: {
                    pl: "Szynka, pieczarki, karczochy, oliwki, mozzarella, sos pomidorowy",
                    en: "Ham, mushrooms, artichokes, olives, mozzarella, tomato sauce",
                },
                price: {
                    pl: "44 zł",
                    en: "44 zł",
                },
                image: "/image1.jpeg",
            },
            {
                id: "pizza-diavola-4",
                name: {
                    pl: "Pizza Diavola",
                    en: "Diavola Pizza",
                },
                ingredients: {
                    pl: "Pikantne salami, mozzarella, papryczki chili, sos pomidorowy",
                    en: "Spicy salami, mozzarella, chili peppers, tomato sauce",
                },
                price: {
                    pl: "40 zł",
                    en: "40 zł",
                },
                image: "/image2.jpeg",
            },
        ],
    },
    {
        id: "pasta",
        name: {
            pl: "makarony",
            en: "pasta",
        },
        items: [
            {
                id: "carbonara-1",
                name: {
                    pl: "Spaghetti Carbonara",
                    en: "Spaghetti Carbonara",
                },
                ingredients: {
                    pl: "Spaghetti, boczek guanciale, jajka, pecorino romano, czarny pieprz",
                    en: "Spaghetti, guanciale bacon, eggs, pecorino romano, black pepper",
                },
                price: {
                    pl: "34 zł",
                    en: "34 zł",
                },
                image: "/image1.jpeg",
            },
            {
                id: "amatriciana-2",
                name: {
                    pl: "Penne all'Amatriciana",
                    en: "Penne all'Amatriciana",
                },
                ingredients: {
                    pl: "Penne, boczek guanciale, pomidory san marzano, pecorino, chili",
                    en: "Penne, guanciale bacon, san marzano tomatoes, pecorino, chili",
                },
                price: {
                    pl: "32 zł",
                    en: "32 zł",
                },
                image: "/image2.jpeg",
            },
            {
                id: "pesto-3",
                name: {
                    pl: "Linguine al Pesto",
                    en: "Linguine al Pesto",
                },
                ingredients: {
                    pl: "Linguine, świeża bazylia, pinole, parmezan, czosnek, oliwa",
                    en: "Linguine, fresh basil, pine nuts, parmesan, garlic, olive oil",
                },
                price: {
                    pl: "30 zł",
                    en: "30 zł",
                },
                image: "/image1.jpeg",
            },
            {
                id: "lasagna-4",
                name: {
                    pl: "Lasagna della Casa",
                    en: "House Lasagna",
                },
                ingredients: {
                    pl: "Warstwy makaronu, sos bolognese, beszamel, mozzarella, parmezan",
                    en: "Pasta layers, bolognese sauce, bechamel, mozzarella, parmesan",
                },
                price: {
                    pl: "36 zł",
                    en: "36 zł",
                },
                image: "/image2.jpeg",
            },
        ],
    },
]
