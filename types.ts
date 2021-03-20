import { accounts } from "./budgetting";

export type AccountName = typeof accounts[number]["name"];
export type Transaction<A extends AccountName> = { [key in A]?: number }