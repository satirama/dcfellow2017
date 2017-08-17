class Humano {
    private _name: string;
    private _age: number;

    constructor (edad: number, nombre: string) {
        this._age = edad;
        this._name = nombre;
    }
    
    sayWhat () {
        console.log(`${this._name} tiene ${this._age} años`);
    }

    getName () {
        return this._name;
    }

    getAge () {
        return this._age;
    }
}

let j = new Humano(25, "Yair");
let m = new Humano(28, "Cecilia");
let l = new Humano(31, "Lucia");

j.sayWhat();
m.sayWhat();
l.sayWhat();

class Mexicano extends Humano {
    private _nac = "mexicana";
    
    constructor (edad: number, nombre: string) {
        super(edad, nombre)
    }

    sayCountry() {
        console.log(`${this.getName()} tiene ${this.getAge()} años y es de nacionalidad ${this._nac}`);
    }
}

let y = new Mexicano(39, "Yian");
let x = new Mexicano(29, "Xoxi");
let z = new Mexicano(59, "Zan");

y.sayCountry();
x.sayCountry();
z.sayCountry();
