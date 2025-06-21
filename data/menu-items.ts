export interface MenuItem {
    id: string
    nameKey: string
    ingredientsKey: string
    priceKey: string
    image: string
}

export const menuItems: MenuItem[] = [
    {
        id: "pizza-pear-gorgonzola",
        nameKey: "pizza1Name",
        ingredientsKey: "pizza1Ingredients",
        priceKey: "pizza1Price",
        image: "/image1.jpeg",
    },
    {
        id: "pizza-artisan",
        nameKey: "pizza2Name",
        ingredientsKey: "pizza2Ingredients",
        priceKey: "pizza2Price",
        image: "/image2.jpeg",
    },{
        id: "pizza-pear-gorgonzola",
        nameKey: "pizza1Name",
        ingredientsKey: "pizza1Ingredients",
        priceKey: "pizza1Price",
        image: "/image1.jpeg",
    },
    {
        id: "pizza-artisan",
        nameKey: "pizza2Name",
        ingredientsKey: "pizza2Ingredients",
        priceKey: "pizza2Price",
        image: "/image2.jpeg",
    },
]
