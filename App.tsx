import React from "preact";
import { useEffect, useState } from "preact/hooks";
import { calculateAllowance, objectEntries } from "./utils";
import { accounts } from "./budgetting";

const Allowances = () => {
    return objectEntries(accounts).map(([name, account]) => {
        const allowance = calculateAllowance({ name, account });
        return <>
            <div style={{ gridColumn: 1 }}>{name}</div>
            <div style={{ gridColumn: 2 }}>💲{
                allowance.quantizedAmount.toFixed(2)
            }</div>
            <div style={{ gridColumn: 3 }}>
                <i>next</i> {
                    account.awardName
                }<i>
                    in {
                        allowance.daysUntilAward > 0 ? `${allowance.daysUntilAward}d ` : ""
                    }{
                        allowance.hoursUntilAward > 0 ? `${allowance.hoursUntilAward}h ` : ""
                    }{
                        allowance.minutesUntilAward > 0 ? `${allowance.minutesUntilAward}m ` : ""
                    }{
                        allowance.secondsUntilAward
                    }s
                    </i>
            </div>
        </>;
    })
}

const colors = {
    "dark-back": "#151532",
    "dark-fore": "#d7e5e5",
} as const;

const bodyStyle: React.JSX.CSSProperties = {
    fontFamily: "'Trebuchet MS'",
    fontSize: "26pt",
    color: colors["dark-fore"],
    backgroundColor: colors["dark-back"],
    margin: 0,
    width: "100%",
    height: "100%",

    display: "grid",
};

const gridItemStyle: React.JSX.CSSProperties = {
    margin: "1em",
};

const allowanceStyle: React.JSX.CSSProperties = {
    ...gridItemStyle,
    display: "grid",
    gridAutoColumns: "auto auto auto",
    gridAutoFlow: "column",
};

(async () => {
    const buildInfoResponse = await fetch("buildInfo.json");
    const buildInfo = await buildInfoResponse.json() as { timestamp: number };
    const lastTransactionDate = new Date(buildInfo.timestamp);
    const App = () => {

        // ⌚ Force update every second
        const [_, setSeconds] = useState(0);
        useEffect(() => {
            const interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
            return () => clearInterval(interval);
        }, []);
        // ⌚

        return <div style={bodyStyle}>
            <div style={gridItemStyle}>
                <h1>Allowance</h1>
                <i>Transactions last updated: {lastTransactionDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric', hour: "numeric", hour12: true })}</i>
            </div>
            <div style={allowanceStyle}>
                {Allowances()}
            </div>
        </div>
    }
    React.render(<App />, document.body);
})();


