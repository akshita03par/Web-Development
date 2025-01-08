// function 

function hello(){
    console.log("Hello");
}

hello(); // call function 

function printName(){
    console.log("Akshita Parmar");
}

printName(); // Akhita Parmar

// loops 
function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}

print1to5();

// if-else 

function isAdult(){
    let age = 21;
    if(age >= 18){
        console.log("adult");
    }else{
        console,log("not adult");
    }
}

isAdult();


// create a function that prints a poem 

function printPoem(){
    console.log("Twinkle Twinkle, tittle star");
    console.log("how I wonder what you are");
}

printPoem();


// create a function to roll a dice & always display the value of the dice (1 to 6).

function rollDice(){
    let dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
}

rollDice();
rollDice();

//  FUNCTION WITH ARGUMENTS 

function printName(name){
     console.log(name);
}

printName("Akshita Parmar");

// student info
function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Akshita ",21);
printInfo("karan ",25);

// sum 

function sum(a,b){
    console.log(`Sum of ${a} and ${b} : `,a + b);
}

sum(4,7);
sum(12,12);
sum(567,87);

// average of 3 number 

function avg(a,b,c){
    let avg = (a+b+c) / 3 ;
    console.log(avg);
}

avg(3,2,1);
avg(2,2,2);
avg(56,45,89);

// multiplication table of number 

function printTable(n){
     console.log("Multiplication table of",n);
     for(let i = n ; i<=n*10; i+=n){
        console.log(i);
     }
}

printTable(12);

// RETURN 

function sum(a,b){
    console.log("hello");
    return a+b;
    console.log("hello"); // kabhi print nahi hogi
}

let s = sum(3,4);
console.log(s);

// console.log(sum(3,4));

// console.log(sum(sum(1,2),3)); //6

//age 

function IsAdult(age){
    if(age >= 18){
        return "adult";
    }else{
        return "not adult";

    }
}

console.log(IsAdult(21));

// create a function that return the sum of number from 1 to n.

function getSum(n){
    let sum =0;
    for(let i= 1 ;i<=n;i++){
        sum+=i;
    }

    return sum ;
}

console.log(getSum(10));

// create a function that returns the concatenation of all strings in an array.

let str = ["hi","hello","bye","!"];

function Concat(str) {
    let result ="";

    for(let i=0;i<str.length; i++){
        result += str[i];
    }

    return result;
}

console.log(str);
console.log(Concat(str));


// SCOPE 

let sm= 54; //Global Scope

function calSum(a,b){
    let sum = a+b; // function scope
    console.log(sum);
}

calSum(1,2);
// console.log(sum); ---> function scope does work give an error


//2 block scope 
 console.log("block scope----");
 
for(let i =1 ;i<=5 ; i++){
    console.log(i); // block scope
}

// console.log(i);----> give an error 

//3 lexical scope 

console.log("block scope----");
function outFunc() {
    let x = 5;
    let y = 6;

    function innerFunc(){
        console.log(x); // lexical scope
    }

    innerFunc();
}
outFunc();

// next practice 

let greet = "hello";  //global scope

function changeGreet(){
    let greet = "namaste";  //function scope
    console.log(greet);

    function innerGreet(){
        console.log(greet); // lexical scope
    }
    innerGreet();
}

console.log(greet);
changeGreet();

//  FUNCTION EXPRESSIONS 

let sumOfnum = function(a , b){
    return a+b;
}

console.log(sumOfnum(3,5)); //8

// HIGHER ORDER FUNCTION 


console.log("higher order function------");

// let Greet = function(){
//    console.log("hello");
// }

// Greet();
// Greet();----> better way 

function multipleGreet(func,count){
    for(let i = 1; i <= count ;i++ ){
        func();
    }
}

let Greet = function() {
    console.log("hello");
}

multipleGreet(Greet,10);

