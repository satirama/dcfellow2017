var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Humano = (function () {
    function Humano(edad, nombre) {
        this._age = edad;
        this._name = nombre;
    }
    Humano.prototype.sayWhat = function () {
        console.log(this._name + " tiene " + this._age + " a\u00F1os");
    };
    Humano.prototype.getName = function () {
        return this._name;
    };
    Humano.prototype.getAge = function () {
        return this._age;
    };
    return Humano;
}());
var j = new Humano(25, "Yair");
var m = new Humano(28, "Cecilia");
var l = new Humano(31, "Lucia");
j.sayWhat();
m.sayWhat();
l.sayWhat();
var Mexicano = (function (_super) {
    __extends(Mexicano, _super);
    function Mexicano(edad, nombre) {
        var _this = _super.call(this, edad, nombre) || this;
        _this._nac = "mexicana";
        return _this;
    }
    Mexicano.prototype.sayCountry = function () {
        console.log(this.getName() + " tiene " + this.getAge() + " a\u00F1os y es de nacionalidad " + this._nac);
    };
    return Mexicano;
}(Humano));
var y = new Mexicano(39, "Yian");
var x = new Mexicano(29, "Xoxi");
var z = new Mexicano(59, "Zan");
y.sayCountry();
x.sayCountry();
z.sayCountry();
