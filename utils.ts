import { startingTime } from "./budgetting";
import { transactions } from "./transactions";
import { AccountName, Accounts, Transaction } from "./types";

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

export function calculateAllowance<Name extends AccountName>(params: { name: Name, account: Accounts[Name] }) {
    const { name, account } = params;
    const timeSinceStartMonth = millisToMonth(Date.now() - startingTime);
    const secondsPerDollar = monthToSec(1) / account.dollarsPerMonth;
    const secondsPerAward = secondsPerDollar * account.awardSize;
    const amountBeforeTransactions = timeSinceStartMonth * account.dollarsPerMonth;
    const currentAmountRaw = transactions
        .filter((t): t is Transaction =>
            t[name] != null)
        .reduce<number>((total, t) => total - t[name], amountBeforeTransactions);
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

export function objectEntries<T>(obj: T) {
    return Object.entries(obj) as [keyof T, T[keyof T]][];
}