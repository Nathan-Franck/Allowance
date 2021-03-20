import { accounts, allowanceTotal, inflexibleExpensesTotal } from "./budgetting";
import { calculateAllowance } from "./utils";

console.log("Allowances:");
console.table(accounts.map(account => {
    const result = calculateAllowance(account);
    return { name: account.name, amount: result.quantizedAmount, days: result.daysUntilAward, hours: result.hoursUntilAward, minutes: result.minutesUntilAward, seconds: result.secondsUntilAward, };
}));

console.log("Accounts:");
console.table(accounts);

console.log("Budgets:");
console.table({
    "Allowance total": allowanceTotal,
    "Inflexible expenses total": inflexibleExpensesTotal,
    "Expected total outgo": allowanceTotal + inflexibleExpensesTotal,
});