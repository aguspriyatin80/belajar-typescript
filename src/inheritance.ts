export class User {
    constructor(public name: string, public age: number) { }
    setName(value: string): void {
        this.name = value
    }
    getName = (): string => {
        return this.name
    }
}

// public: bisa diakses di semua class / dari luar class
// protected: hanya bisa diakses dari class tersebut dan class turunannya
// private: hanya bisa diakses dari class itu sendiri

class Admin extends User {
    read: boolean = true
    write: boolean = true
    getRole(): { read: boolean, write: boolean } {
        return {
            read: this.read,
            write: this.write
        }
    }
}

let admin = new Admin("Agus", 20)
console.log(admin.getName())
console.log(admin.getRole())
admin.setName("Eka")
console.log(admin.getName())
