var superHeros = [];
superHeros = [1, 2, 3];
superHeros.unshift(0);
superHeros.unshift(4);
superHeros.push(4);
superHeros.shift();
superHeros.pop();
console.log(superHeros);
var superWomen = ["mummy", "mother", "usha"];
for (var _i = 0, superWomen_1 = superWomen; _i < superWomen_1.length; _i++) {
    var value = superWomen_1[_i];
    console.log(value);
}
for (var index in superWomen) {
    console.log(index);
}
var people = [];
people.push({ name: "pooja", city: "hyderabad" });
people.push({ name: "roja", city: "banglore" });
people.push({ name: "liza", city: "hitechcity" });
people.push({ name: "peeza", city: "marathahalli" });
console.log(people);
//for each loop
/*for (var value of people){
    console.log(value)
}*/
for (var i = 1; i < people.length; i++) {
    console.log(people[i]);
}
var sum = 123;
if (true) {
    var sum = 456;
}
console.log(sum);
var newSum = 123;
if (true) {
    var newSum_1 = 789;
}
console.log(newSum);
var num = 5;
num = 6;
console.log("num", num);
var PI = 3.14;
if (true) {
    var PI_1 = 4.56;
}
console.log(PI);
