/*var employeeId : number ;
var studentRool : number ;
var firstName : string = "pooja";

var isAdmin : boolean = true;
//isAdmin=10;

var userObject : object = undefined ;


//u can use any as array 
var studentDetails : any [];
studentDetails = [1,2,3];
studentDetails =["hello" , "poja"] ;


//u can use any means any type 
var studentDetails : any;
studentDetails = 1;
studentDetails ="hello"  ;

//write a function
var sample =function(){
	return pooja;
}*/


var employeeId : number = 1;

//employeeId="pooja";
console.log("emp id is type of"+typeof employeeId);

var employeeName : string;
employeeName= "puspa";
console.log("emp id is type of"+typeof employeeName);
var isEmployee : boolean = true;
console.log("type is "+ typeof isEmployee );

var nullValue : null = null ;
console.log("type is "+ typeof nullValue );

var undefined1 : undefined = undefined;
console.log("type is "+ typeof undefined1 );

var someValue : any =1;
console.log("someValue is of type "+ typeof someValue);


someValue="puspita";

console.log("someValue is of type "+ typeof someValue);



someValue= true;
console.log("someValue is of type "+ typeof someValue);


//for string array
var randomNames : string[] = [];
randomNames = ["pooja" ,"biswal"];
console.log(randomNames);

//for integer array
var randomName : number[] = [];
randomName = [2,4,5];
console.log(randomName);

//for mixarray
var randomName1 :  any [];
randomName1 = [2,"pooja",4,"biswal",5];
console.log(randomName1);


var personObj : object ={

	name :"pooja";
	city :"hyderabad"
}
console.log(personObj);