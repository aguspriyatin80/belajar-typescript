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
    phone: string
    private _email: string = ""
    static getRoleName: string = "Admin"
    constructor(phone: string, name: string, age: number) {
        super(name, age)
        this.phone = phone

    }
    static getAccess(): string {
        return 'read and write'
    }
    getRole(): { read: boolean, write: boolean } {
        return {
            read: this.read,
            write: this.write
        }
    }
    set email(value: string) {
        if (value.length < 5) {
            this._email = "Email salah"
        } else {
            this._email = value
        }
    }
    get email(): string {
        return this._email
    }

}

// let admin = new Admin("08121212", "Agus", 20)
// console.log(admin.getName())
// console.log(admin.getRole())
// admin.setName("Eka")
// console.log(admin.phone);
// admin.email = "agus@mail.com"
// console.log(admin.email)

console.log(Admin.getRoleName)
console.log(Admin.getAccess())

