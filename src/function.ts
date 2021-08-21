// tipe data balikan function

function getName(): string {
    return 'Agus Priyatin'
}
function getAge(): number {
    return 33
}

function printName(): void {
    console.log("Print name")
}
// printName();

// Tipe data pada arguments

function multiply(val1: number, val2: number): number {
    return val1 * val2
}

function add(val1: number, val2: number): number {
    return val1 + val2
}
const kali = multiply(2, 4);
console.log(kali);
const tambah = add(2, 4);
console.log(tambah);

// function as type

type Tambah = (val1: number, val2: number) => number

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2
}

const fullName = (first: string, last: string = "Priyatin"): string => {
    return first + " " + last
}

// console.log(fullName("Agus"));


// optionan parameter

const getFullName = (first: string, last?: string): string => {
    return first + last
}

console.log("Agus")