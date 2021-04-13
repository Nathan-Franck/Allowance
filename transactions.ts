import { Transaction } from "./types";

export const transactions: Array<Transaction> = [

    // Starting off with a certain amount of money in the accounts
    { Ashley: -44.73 }, // Starting bonus
    { Nathan: -38.28 }, // Starting bonus
    { Lilian: -10.5 }, // Starting bonus
    { Food: -154.9 }, // Starting bonus
    { Social: -42.24 }, // Starting bonus
    { Emergency: -127.28 }, // Starting bonus
    { Vacation: -496.75 }, // Starting bonus
    { House: -600.92 }, // Starting bonus

    // Regular spending
    { Food: 62.32 }, // Groceries
    { Food: 5.51 }, // Ashley Coffee
    { Food: 124.36 }, // Groceries
    { Social: 11.00 }, // Salad
    { Nathan: 4.00 }, // Energy Drinks
    { Food: 42.00 }, // Groceries
    { Nathan: 850 }, // Surface Laptop 3
    { Food: 80.92 }, // Groceries
    { Food: 7.86 }, // Groceries
    { House: 100 }, // Outdoor rocking chairs
    { Food: 86.26 - 1.05 * (3.98 + 4.98 + 16.98 + 1.50) }, // Diapers, lighter, cups etc.
    { Lilian: 1.05 * (3.98 + 4.98 + 16.98 + 1.50) + 10 }, // Toys
    { Food: 19.99 * 1.05 }, // Prenatal vitamins
    { Food: (2.5 + 4.88 + 0.11 + 0.25 + 2.99 + 1.99) * 1.05 }, // Groceries
    { Food: 20.12 }, // Groceries
    { House: 36.74 }, // Rake
    { Food: 39.22 }, // Groceries + Baby Formula ($25 for 900ml)
    { House: 16.00 }, // Leaf grabber
    { Ashley: 2.09 },
    { Lilian: 25.19 },
    { Social: 9.44 },
    { Nathan: -850.00 }, // Sold graphics card (1080ti)
    {
        Social: 10.00 / 3,
        Ashley: 10.00 / 3,
        Lilian: 10.00 / 3,
    }, // Kid's slide
    { Food: 45.86 - 0.85 * 1.05 * (6.99 + 0.40) }, // Groceries (15% off day)
    { Nathan: 0.85 * 1.05 * (6.99 + 0.40) }, // Energy Drinks (15% off day)
    { Food: 86.28 }, // Groceries
    { Food: 6.00 }, // Coffees [estimate]
    { Food: 27.29 }, // Propane
    { House: 422.42 }, // Insulation [6 bags of R20 batting]
    { Nathan: 8.47 }, // Snacks
    { Food: 92.61 - 1.00 }, // Groceries ($14 of candy bars)
    { Nathan: 1.00 }, // Gum


    // Test transactions, figure out when you'll be able to make the next big purchase...
    // { House: 1200.00 }, // Insulation R40
    // { House: 100.00 }, // Wheel barrow
    // { House: 50.00 }, // Pickaxe
    // { Nathan: 100.00 }, // Portable NVME SSD --- Short usb cable - https://www.amazon.ca/Afterplug-Charging-Chromebook-Nintendo-External/dp/B08816SYKY/ref=sr_1_20?dchild=1&keywords=15%2Bcm%2Busbc%2Bto%2Busbc%2Bcable&qid=1617127027&sr=8-20&th=1
];

