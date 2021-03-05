import { Transaction, AccountName } from "./types";

export const transactions: Array<Transaction<AccountName>> = [

    // Starting off with a certain amount of money in the accounts
    ["Ashley", -10, "Starting bonus"],
    ["Nathan", -10, "Starting bonus"],
    ["Lilian", -3.5, "Starting bonus"],
    ["Food", -150, "Starting bonus"],
    ["Emergency", -400, "Starting bonus"],
    ["Vacation", -0, "Starting bonus"],
    ["Social", -40, "Starting bonus"],

    // Some test transactions [makes it look more exciting to have offset counters]
    ["Nathan", 1.5, "Test"],
    ["Lilian", 0.17, "Test"],
    ["Ashley", 0.92, "Test"],

];

// 👇 Insert new timestamp each transaction update!
export const lastTransactionUpdateTime = 1614924888526;
// Tool to insert timestamp - https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring