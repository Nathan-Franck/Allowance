import { objectEntries } from "./utils";

export const startingTime = 1614908235844;

export const accounts = {
    "Lilian": { dollarsPerMonth: 60, awardSize: 0.5, awardName: "50¢ 🍭" },
    "Ashley": { dollarsPerMonth: 130, awardSize: 5, awardName: "$5 💵" },
    "Nathan": { dollarsPerMonth: 130, awardSize: 5, awardName: "$5 💵" },
    "Food": { dollarsPerMonth: 500, awardSize: 10, awardName: "$10 🍔" },
    "Social": { dollarsPerMonth: 60, awardSize: 20, awardName: "$20 🎮" },
    "House": { dollarsPerMonth: 260, awardSize: 50, awardName: "$50 ⛏️" },
    "Emergency": { dollarsPerMonth: 150, awardSize: 100, awardName: "$100 🚑" },
    "Vacation": { dollarsPerMonth: 50, awardSize: 250, awardName: "$250 🚞" },
 } as const;

export const flexibleMonthlyExpenses = {
    "Youtube Red Family": 16.00,
    "Netflix": 10.00, //?
    "Nintendo": 4.00, //?
    "Expensive Cell vs. Minimum Cell": 50.00,
    "Cut down on electricity and heating needs": 50.00, // 🤷🏼 Hard to say how this is done
    "Expensive House Insurance vs. Minimum": 100.00,
};

export const inflexibleMonthlyExpenses = {
    "Mortgage [25y from July 2020]": 1060,
    "Student loans [32k @ 6y 9m from March 2021]": 484,
    "House/car insurance": 300,
    "Gas/electricity": 550,
    "Property taxes": 200,
    "Water": 150,
    "Internet": 100,
    "Cell": 80,
} as const;

export const allowanceTotal = objectEntries(accounts).reduce((total, [_, each]) =>
    total + each.dollarsPerMonth, 0);
export const inflexibleExpensesTotal = objectEntries(inflexibleMonthlyExpenses).reduce((total, [_, amount]) =>
    total + amount, 0)
export const flexibleExpensesTotal = objectEntries(flexibleMonthlyExpenses).reduce((total, [_, amount]) =>
    total + amount, 0)