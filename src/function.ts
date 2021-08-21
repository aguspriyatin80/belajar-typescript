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
