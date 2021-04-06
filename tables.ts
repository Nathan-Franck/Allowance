import { AccountName } from "types";
import { accounts, allowanceTotal, flexibleExpensesTotal, inflexibleExpensesTotal } from "./budgetting";
import { calculateAllowance, objectEntries } from "./utils";

console.log("Allowances:");
const allowances = objectEntries(accounts).map(([name, account]) => {
    const result = calculateAllowance({ name, account });
    return { name: name, amount: result.quantizedAmount, days: result.daysUntilAward, hours: result.hoursUntilAward, minutes: result.minutesUntilAward, seconds: result.secondsUntilAward, };
});
console.table([
    ...allowances,
    { name: "Total", amount: Object.values(allowances).reduce((total, curr) => total + curr.amount, 0) },
]);

console.log("Accounts:");
console.table(accounts);

console.log("Budgets:");
console.table({
    "Allowance total": allowanceTotal,
    "Inflexible expenses total": inflexibleExpensesTotal,
    "Flexible expenses total": flexibleExpensesTotal,
    "Expected total outgo": allowanceTotal + inflexibleExpensesTotal + flexibleExpensesTotal,
});
