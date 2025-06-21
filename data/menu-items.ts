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

export const menuItems: MenuItem[] = [
    {
        id: "pizza-pear-gorgonzola-1",
        name: {
            pl: "Pizza z Gruszką i Gorgonzolą 1",
            en: "Pear & Gorgonzola Pizza 1",
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
            pl: "Pizza Rzemieślnicza 2",
            en: "Artisan Pizza 2",
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
        id: "pizza-pear-gorgonzola-3",
        name: {
            pl: "Pizza z Gruszką i Gorgonzolą 3",
            en: "Pear & Gorgonzola Pizza 3",
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
        id: "pizza-artisan-4",
        name: {
            pl: "Pizza Rzemieślnicza 4",
            en: "Artisan Pizza 4",
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
        id: "pizza-pear-gorgonzola-5",
        name: {
            pl: "Pizza z Gruszką i Gorgonzolą 5",
            en: "Pear & Gorgonzola Pizza 5",
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
        id: "pizza-artisan-6",
        name: {
            pl: "Pizza Rzemieślnicza 6",
            en: "Artisan Pizza 6",
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
]
