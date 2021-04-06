import { accounts } from "./budgetting";

export type Accounts = typeof accounts;
export type AccountName = keyof Accounts;
export type Transaction = { [key in keyof Accounts]?: number }