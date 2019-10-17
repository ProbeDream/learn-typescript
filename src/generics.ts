function log<T>(value: T): T {
    console.log(value);
    return value;
}

log<Array<string>>(["a", "b"]);

type Log2 = <T>(value: T) => T
let myLog: Log2 = log;

interface Log1 {
    <T>(value: T): T
}

class Log3<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}
let log1 = new Log3<number>()
log1.run(1)
let log2 = new Log3()
log2.run({ a: 1 })

interface Length {
    length: number
}
function logAdvance<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}
logAdvance([1])
logAdvance('123')
logAdvance({ length: 3 })