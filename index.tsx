import * as React from "preact";

const start = {
    time: 1614908235844,
}

const members = ["Ashley", "Nathan", "Lilian"] as const;
type Member = typeof members[number];

const transactions: Array<[member: Member, purchase: number, category?: string]> = [
    ["Ashley", -10, "Starting bonus"],
    ["Nathan", -10, "Starting bonus"],
    ["Lilian", -4, "Starting bonus"],
]

console.log("hello world !");

const currentAllowance = members.map(member => {
    return <div>{member}</div>;
})

React.render(<><div>Hello there....</div>{currentAllowance}</>, document.body);

