import React from "preact";
import { useEffect, useState } from "preact/hooks";
import { transactions, lastTransactionUpdateTime } from "./transactionRecord";

const startingTime = 1614908235844;

export const accounts = [
    { name: "Food", dollarsPerMonth: 500, awardSize: 10, awardName: "$10 🍔" },
    { name: "Ashley", dollarsPerMonth: 100, awardSize: 5, awardName: "$5 💵" },
    { name: "Nathan", dollarsPerMonth: 100, awardSize: 5, awardName: "$5 💵" },
    { name: "Lilian", dollarsPerMonth: 30, awardSize: 0.5, awardName: "50¢ 🍭" },
] as const;
export type AccountName = typeof accounts[number]["name"];

export type Transaction<A extends AccountName> = [account: A, purchase: number, note?: string];

const millisToMonth = (ms: number) => {
    return ms
        / 1000 // =second
        / 60 //=minute
        / 60 // =hour
        / 24 // =day
        / 30 // =month
}

const monthToSec = (month: number) => {
    return month
        * 30 // =day
        * 24 // =hour
        * 60 // =minute
        * 60 //=second
}
const Allowances = () => {
    const timeSinceStartMonth = millisToMonth(Date.now() - startingTime);
    return accounts.map(account => {
        const secondsPerDollar = monthToSec(1) / account.dollarsPerMonth;
        const secondsPerAward = secondsPerDollar * account.awardSize;
        const amountBeforeTransactions = timeSinceStartMonth * account.dollarsPerMonth;
        const currentAmountRaw = transactions.filter((t): t is Transaction<typeof account["name"]> =>
            t[0] == account.name).reduce((total, t) => total - t[1], amountBeforeTransactions);
        const quantizedAmount = Math.floor(currentAmountRaw / account.awardSize) * account.awardSize;
        const progressToAward = (currentAmountRaw - quantizedAmount) / account.awardSize;
        const totalSecondsUntilAward = Math.floor((1 - progressToAward) * secondsPerAward);
        const totalMinutesUntilAward = Math.floor(totalSecondsUntilAward / 60);
        const hoursUntilAward = Math.floor(totalMinutesUntilAward / 60);
        const minutesUntilAward = totalMinutesUntilAward - hoursUntilAward * 60;
        const secondsUntilAward = totalSecondsUntilAward - totalMinutesUntilAward * 60;
        return <>
            <div style={{ gridColumn: 1 }}>{account.name}</div>
            <div style={{ gridColumn: 2 }}>💲{
                quantizedAmount.toFixed(2)
            }</div>
            <div style={{ gridColumn: 3 }}><i>next</i> {
                account.awardName
            }<i> in {
                hoursUntilAward > 0 ? `${hoursUntilAward}h ` : ""
            }{
                        minutesUntilAward > 0 ? `${minutesUntilAward}m ` : ""
                    }{
                        secondsUntilAward
                    }s</i></div>
        </>;
    })
}

const colors = {
    "dark-back": "#151532",
    "dark-fore": "#d7e5e5",
} as const;

const bodyStyle: React.JSX.CSSProperties = {
    fontFamily: "'Trebuchet MS'",
    fontSize: "14pt",
    color: colors["dark-fore"],
    backgroundColor: colors["dark-back"],
    margin: 0,
    padding: "1em",
    width: "100%",
    height: "100%",

    display: "grid",
};

const allowanceStyle: React.JSX.CSSProperties = {
    borderColor: colors["dark-fore"],
    borderWidth: 1,
    borderStyle: "solid",
    display: "grid",
    gridAutoColumns: "auto auto auto",
    gridAutoFlow: "column",
}

const lastTransactionDate = new Date(lastTransactionUpdateTime);
const App = () => {
    const [_, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return <div style={bodyStyle}>
        <div>
            <h1>Allowance</h1>
            <i>Transactions last updated: {lastTransactionDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</i>
        </div>
        <div style={allowanceStyle}>
            {Allowances()}
        </div>
    </div>
}
React.render(<App />, document.body);

