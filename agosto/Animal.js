var Animal = (function () {
    function Animal(name) {
        console.log("My name is " + name);
    }
    return Animal;
}());
var animal = new Animal("Jorge");
