"use client"

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

interface DeliveryOption {
    name: string;
    icon: string;
    url: string;
}

const deliveryOptions: DeliveryOption[] = [
    {
        name: "Pyszne.pl",
        icon: "/pyszne.png",
        url: "https://www.pyszne.pl/menu/slice-pizza-tarnowskie-gory?serviceType=delivery&utm_source=google&utm_medium=organic&utm_campaign=foodorder",
    },
    {
        name: "Glovo",
        icon: "/glovo.png",
        url: "https://glovoapp.com/pl/pl/tarnowskie-gory/slice-pizza-tgr/?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action",
    },
    {
        name: "Uber Eats",
        icon: "/ubereats.png",
        url: "https://www.ubereats.com/pl/store/slice-pizza-tg/Uhnhce9OXDSdn27GjX4_dQ?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas",
    },
];

const DeliveryLinks: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-space-mono-bold text-center text-[#cb3b32] mb-16">
                {t("orderTitle")}
            </h2>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center w-full">
                {deliveryOptions.map((option) => (
                    <a
                        key={option.name}
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 w-full max-w-xs md:w-auto hover:opacity-80 transition"
                    >
                        <Image
                            src={option.icon}
                            alt={option.name}
                            width={48}
                            height={48}
                            className="w-12 h-12"
                        />
                        <span className="text-lg text-gray-300 font-space-mono-regular">
              {option.name}
            </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default DeliveryLinks;
