

function map<
    T extends { [key: number]: any } & { length: number },
    U
>(arr: T, fn: (a: T[number]) => U): { [key in keyof T]: U } {
    const result = [] as any;
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i]);
    }
    return new result;
}

function filter<
    T extends { [key: number]: any } & { length: number },
    U
>(arr: T, fn: (a: T[number]) => boolean): T {
    const result = [] as any;
    for (let i = 0; i < arr.length; i++) {
        const include = fn(arr[i])
        if (!include) { continue; }
        result.push(arr[i]);
    }
    return new result;
}

// 💩 Stuff
const actualArray = [];

const arr = <const>[1, 2, 3];
const mapperResult = map(arr, (hey) => <const>"ho");
mapperResult.length

console.log(mapperResult);

