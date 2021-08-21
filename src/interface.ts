interface Laptop {
    name: string
    on(): void
    off(): void
}

class Asus implements Laptop {
    name: string
    isGaming: boolean
    constructor(name: string, isGaming: boolean) {
        this.name = name
        this.isGaming = isGaming
    }
    on() {
        console.log("nyala")
    }
    off() {
        console.log("mati")
    }
}

class Macbook implements Laptop {
    name: string
    keyboardLight: boolean
    constructor(name: string, keyboardLight: boolean) {
        this.name = name
        this.keyboardLight = keyboardLight
    }
    on() {
        console.log("nyala")
    }
    off() {
        console.log("mati")
    }
}

const asus = new Asus('Asus', true)
console.log(asus.name)
console.log(asus.on())

const macbook = new Macbook('Macbook', true)
console.log(macbook.name)
console.log(macbook.on())