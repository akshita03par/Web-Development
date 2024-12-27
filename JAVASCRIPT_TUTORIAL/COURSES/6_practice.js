// print good if number is divisible by 10 and print bad if it not 

let num = 120;

if(num%10===0){
    console.log("Number is good");
}else{
    console.log("Number is bad");
}


// alert message name is age years old 

// let name = prompt("Enter your name !");
// let age = prompt("Enter your age!");

// alert(`${name} is ${age} years old.`);

// months in a quarter 

let quarter = 2;

switch(quarter){
    case 1:
        console.log("January , February , March");
        break;
    case 2:
        console.log("April , May , June");
        break;
    case 3:
        console.log("July , August , September");
        break;
    case 4:
        console.log("October , November , December");
        break;
    default:
        console.log("Invalid quarter");            
}

// golden strinf if it starts with the character 'A' or 'a' and length is greater than 5.

let str = "Akshita";

if((str[0]==='A' || str[0]==='a') && (str.length > 5)){
    console.log("Golden string");
}else{
    console.log("Not a golder string");
}

// largest of 3 numbers 

let a =234;
let b =178;
let c =123;

if(a > b){
      if(a > c){
        console.log(a,"is largest number");
      }else{
        console.log(c," is largest number");
      }
}else{
     if(b > c){
        console.log(b," is largest number");
     }else{
        console.log(c,"is largest number");
     }
}

//2 number have the same last digit 

let num1 = 32;
let num2 = 47852;

if((num1%10)==(num2%10)){
    console.log("numbers have the same last digit which is",num1%10);
}else{
    console.log("numbers don't have the same last digit");
}

