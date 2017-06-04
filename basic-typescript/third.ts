var superHeros : number[] = [];

superHeros = [1,2,3];
superHeros.unshift(0);
superHeros.unshift(4);
superHeros.push(4);
superHeros.shift();
superHeros.pop();

console.log(superHeros);

var superWomen :string[] = ["mummy" ,"mother", "usha"];
for(var value of superWomen ){
	console.log(value);
}
for(var index in superWomen ){
	console.log(index);
}


var people: any[] =[];
people .push({name: "pooja",city : "hyderabad"})
people .push({name: "roja",city : "banglore"})
people .push({name: "liza",city : "hitechcity"})
people .push({name: "peeza",city : "marathahalli"})

console.log(people);

//for each loop
/*for (var value of people){
	console.log(value)
}*/

for (var i=1;i<people.length;i++){
	console.log(people[i]);
}



var sum= 123;
if(true){
	var sum = 456;
}
console.log(sum);




let newSum= 123;
if(true){
	let newSum = 789;
}
console.log(newSum);



let num=5;
num=6;
console.log("num",num)

const PI = 3.14;
if(true){

const PI = 4.56;
}
console.log(PI);