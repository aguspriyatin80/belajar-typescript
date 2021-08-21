function getData(value: any) {
    return value
}

console.log(getData("Agus").length)
console.log(getData(123).length);

function myData<T>(value: T) {
    return value
}

console.log(myData("Agus").length)
console.log(myData(123));

const arrFunc = <T,>(value: T){

}