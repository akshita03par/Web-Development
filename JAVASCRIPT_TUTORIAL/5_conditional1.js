// if 

let age = 17;

if(age >= 18){
    console.log(" you can vote");
}

if(age < 18 ){
    console.log("you cannot vote");
}

// color example----> 

let mode = "light";
let color;

if(mode==="dark"){
    color="black";
}

if(mode==="light"){
    color="white";
}

console.log(color);

// if-else ------>


let mode1 = "dark";
let color1;

if(mode1==="dark"){
    color1="black";
}else{
    color1="white";
}

console.log(color1);

// age 

let Age = 17;
if(Age >=18){
    console.log("vote");
}else {
    console.log("not vote");
}

// odd even 

let num = 1100;

if(num%2===0){
    console.log(num," is even");
}else{
    console.log( num," is odd");
}

//else-if

let AGE = 34;
if(AGE <=2 ){
    console.log("child");
}else if(AGE <= 13){
    console.log("children");
}else if (AGE <= 18){
    console.log("teenager");
}else if (AGE <= 40){
    console.log("Adult");
}else {
    console.log("old");
}

// mode 

let mode2 = "blue";
let color2;

if(mode2==="dark"){
    color2="black";
}else if(mode2 === "blue") {
    color2="blue";
}else if(mode2 ==="pink"){
    color2 = "pink";
}else{
    color2 = "white"
}

console.log(color2);

// ternary operator 
console.log("<    -----ternary operator-----   >");

// condition ? true output : false output 

let age2 = 34;
let result = age2 >18 ? "adult":"not adult";
console.log(result);

