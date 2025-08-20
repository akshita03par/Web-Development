"use strict"; // treat all js code as newer version 

console.log("Akshita");

let name = "Akshita Parmar";
var age = 22;

console.table([name,age]); // output in form of table 

console.log(typeof(age)); //number

//<-------------conversion------------->

let score = "33Abc";
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// number to number --- > easily convert
// numberAlpha ("33ABC")----> NaN


//<----------------comparison--------------->

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

//<------------symbol datatype--------->

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

//----------------Number------------------------>

const balance = new Number(100); //object
console.log(balance);

console.log(balance.toString().length); // 3 

//fixed
console.log(balance.toFixed(3)); // 100.000

//precision
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); //123.9
console.log(otherNumber.toPrecision(3)); // 124

//localString 
const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//<---------------MATH--------------->

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

//<--------------Dates and Time-------------------->

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date("06-26-2003");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

