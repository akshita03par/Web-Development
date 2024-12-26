// if ----------------------------------------

console.log("before my if statement");
let age=21;
if(age>=18){
    console.log("you can vote");
}
if(age<18){
    console.log("you cannot vote");
}
console.log("after my if statement");

// create a traffic light system that shows what to do based on color 

let color = "green";
if(color==="red"){
    console.log("Stop! light color is red ");
}
if(color==="yellow"){
    console.log("Slow Down ! light color is yellow");
}
if(color==="green"){
    console.log("Go ! light color is green ");
}

// else if -----------------------------------------------

let age2 = 15 ;
if(age2 >=18){
    console.log("you can vote");
}
else if(age2<18) {
   console.log("you cannot vote");
}

// grade system 

let marks= 22;
if(marks>=90){
    console.log("grade is A+");
} else if(marks>=80){
    console.log("grade is A");
} else if(marks>=70){
    console.log("grade is B+");
} else if(marks>=60){
    console.log("grade is B");
} else if(marks>=50){
    console.log("grade is C+");
} else if(marks>=35){
    console.log("grade is C");
} else if(marks<35){
    console.log("F");
}

//else-----------------------------------------

let age3=18;
if(age3>=18){
    console.log("you can vote");
}else{
    console.log("you cannot vote ")
}


// create a system to calculate popcorn prices based on the size customer asked for :

let size = 'S';
if(size==='XL'){
    console.log("If size is XL then price is Rs.250");
}else if(size==='L'){
    console.log("If size is L then price is Rs.200");
}else if(size==='M'){
    console.log("If size is M then price is Rs.100");
}else {
    console.log(" price is Rs.50");
}

// nested if-else----------------------------------

let marks2 = 75;

if(marks2>=33){
    console.log("Pass");
    if(marks2>=80){
        console.log("Grade : O");
    }else{
        console.log("Grade : A");
    }
}else{
    console.log("Better luck next time");
}

// A "good string" is a string that starts with the letter 'a' & has a length >3 . Write a program to find if a string is good or not .

let str="akshita" ;

if( (str[0]==='a') && (str.length > 3)){
   console.log("good string");
}else{
    console.log("not a good string");
}

// switch statement ----------------------------

let color2 = "green";
 
switch(color2){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow Down");
        break;  
     case "green":
         console.log("Go");
         break;
    default:
        console.log("Broken Light");
            
}

// day 
 
let day = 5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tueday");
        break;
    case 3:
        console.log("Wednesdat");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default :
        console.log("Wrong day");
    
}


