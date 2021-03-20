import { accounts, startingTime } from "./budgetting";
import { transactions } from "./transactions";
import { Transaction } from "./types";

export function millisToMonth(ms: number) {
    return ms
        / 1000 // =second
        / 60 //=minute
        / 60 // =hour
        / 24 // =day
        / 30; // =month
};
export function monthToSec(month: number) {
    return month
        * 30 // =day
        * 24 // =hour
        * 60 // =minute
        * 60; //=second
};

export function calculateAllowance(account: typeof accounts[number]) {
    const timeSinceStartMonth = millisToMonth(Date.now() - startingTime);
    const secondsPerDollar = monthToSec(1) / account.dollarsPerMonth;
    const secondsPerAward = secondsPerDollar * account.awardSize;
    const amountBeforeTransactions = timeSinceStartMonth * account.dollarsPerMonth;
    const currentAmountRaw = transactions.filter((t): t is Transaction<typeof account["name"]> =>
        t[account.name] != null).reduce((total, t) => total - t[account.name], amountBeforeTransactions);
    const quantizedAmount = Math.max(0, Math.floor(currentAmountRaw / account.awardSize) * account.awardSize);
    const progressToAward = (currentAmountRaw - quantizedAmount) / account.awardSize;
    const totalSecondsUntilAward = Math.floor((1 - progressToAward) * secondsPerAward);
    const totalMinutesUntilAward = Math.floor(totalSecondsUntilAward / 60);
    const totalHoursUntilAward = Math.floor(totalMinutesUntilAward / 60);
    const daysUntilAward = Math.floor(totalHoursUntilAward / 24);
    const hoursUntilAward = totalHoursUntilAward - daysUntilAward * 24;
    const minutesUntilAward = totalMinutesUntilAward - totalHoursUntilAward * 60;
    const secondsUntilAward = totalSecondsUntilAward - totalMinutesUntilAward * 60;
    return { quantizedAmount, daysUntilAward, hoursUntilAward, minutesUntilAward, secondsUntilAward };
}
