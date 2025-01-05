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

