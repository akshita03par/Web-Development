// function with object 

function calCartPrice(...num1){ // rest
     return num1;
}

console.log(calCartPrice(200,300,400));

const user = {
    userName : "Akshita",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price} `);
}

handleObject(user);

//Arrow Function----------------------------------->

// this -> currect details refer karta hai

const User = {
     username : "Akshita",
     price:999,

     welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
       // console.log(this);
     }

}

User.welcomeMessage();
User.username = "Akshu";
User.welcomeMessage();

//console.log(this);---> empty in node and window in bowser


// arrow function define 

const addOne = (num1 , num2) => {
    return num1 + num2;
}

const addTwo = (num1 , num2) => num1 + num2;

const addthree = (num1 , num2) => (num1 + num2);

const addFour = (num1 , num2) => ({username:"Akshita"}); // object


// Immediately Invoked Function Expressions (IIFE):----->

// global scope ke pollution ko hatane ke liye iife use karte

(function iife(){
    console.log(`DB CONNECTED`);
})();

//1()-> function defination , 2()->execution call , ; ->for iife end 

((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})("Akshita");


// Nullish Coalescing Operator(??): avoid null undefined-------->

let val1;
val1 = 5 ?? 10;

console.log(val1); // 5

val1 = null ?? 10;

console.log(val1); //10

val1 = undefined ?? 15;

console.log(val1);


// LOOPS------------------------------>

// for of -->

const arr = [1,2,3,4,5];

for (const i of arr) {
    console.log(i);
}


// MAPS ----------------------------->

const map = new Map();
map.set('IN',"India");
map.set('USA',"United States Of America");
map.set('Fr',"France");

//console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
}

