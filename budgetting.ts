export const startingTime = 1614908235844;

export const accounts = [
    { name: "Lilian", dollarsPerMonth: 60, awardSize: 0.5, awardName: "50¢ 🍭" },
    { name: "Ashley", dollarsPerMonth: 130, awardSize: 5, awardName: "$5 💵" },
    { name: "Nathan", dollarsPerMonth: 130, awardSize: 5, awardName: "$5 💵" },
    { name: "Food", dollarsPerMonth: 550, awardSize: 10, awardName: "$10 🍔" },
    { name: "Social", dollarsPerMonth: 60, awardSize: 20, awardName: "$20 🎮" },
    { name: "Emergency", dollarsPerMonth: 200, awardSize: 100, awardName: "$100 🚑" },
    { name: "Vacation", dollarsPerMonth: 200, awardSize: 500, awardName: "$500 ✈" },
] as const;

export const inflexibleMonthlyExpenses = {
    "Mortgage [25y from July 2020]": 1060,
    "Student loans [32k @ 6y 9m from March 2021]": 484,
    "House/car insurance": 300,
    "Gas/electricity": 300,
    "Property taxes": 200,
    "Water": 150,
    "Internet": 100,
    "Cell": 80,
} as const;

export const allowanceTotal = accounts.reduce((total, each) =>
    total + each.dollarsPerMonth, 0);
export const inflexibleExpensesTotal = Object.entries(inflexibleMonthlyExpenses).reduce((total, [_, amount]) =>
    total + amount, 0)