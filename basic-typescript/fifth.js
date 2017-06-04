var Animal = (function () {
    function Animal(name, type) {
        this.name = name;
        this.type = type;
    }
    Animal.prototype.food = function (message) {
        return message;
    };
    return Animal;
}());
var cow = new Animal("cow", "domestic");
console.log(cow);
console.log(cow.food(1));
//one way by using object.is
var person = "abc pooja";
var person1 = "pooja";
console.log(Object.is(person, person1));
//by using localeCompare();
var person3 = person.localeCompare(person1);
console.log(person3);
//== operator
console.log(person == person1);
//=== operator
console.log("this is", person === person1);
//by using normal way
var stooge = { name: 'moe', luckyNumbers: [13, 27, 34] };
var clone = { name: 'moe', luckyNumbers: [13, 27, 34] };
var one = stooge;
console.log(stooge == clone);
