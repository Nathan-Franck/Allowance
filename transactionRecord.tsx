import { Transaction, AccountName } from "./App";

export const transactions: Array<Transaction<AccountName>> = [
    // Starting off with a certain amount of money in the accounts
    ["Ashley", -10, "Starting bonus"],
    ["Nathan", -10, "Starting bonus"],
    ["Lilian", -3.5, "Starting bonus"],
    ["Food", -150, "Starting bonus"],

    ["Nathan", 1.5, "Test"],
    ["Lilian", 0.17, "Test"],
    ["Ashley", 0.92, "Test"],
];
export const lastTransactionUpdateTime = 1614921471214;
