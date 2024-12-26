let x = 10;
let y = 5;

// Arthmetic operators-----(+,-,*,/,%,**)

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

// unary operator------(++,--)

console.log(x++); //10
console.log(++x); //12


// Assignment operator------(=,+=,-=,/=,%= etc)
console.log('x is:',x);
console.log('y is:',y);
x+=y ;
console.log(x);

// comparison operators-----

let age = 21;
console.log(age>16); //true

console.log(age==21);//true
console.log(age!=21); // false

let str = '21'; // string
console.log(age==str); // true 

console.log(age===str); // false

// comparison for non numbers ---------

console.log('a'>'A'); // true
console.log('a'<'A'); //false

// Logical Operators -------------------

// AND
console.log(5>3 && 3>1); // true 

let marks = 90;

if(marks >= 33 && marks >= 80 ){
    console.log("pass");
    console.log("A+");
}

//OR 

if(marks >= 33 || marks >= 80 ){
    console.log("pass");
    console.log("A+");
}

// NOT

if(! marks < 33 ){
    console.log("pass");
    console.log("A+");
}

if(marks > 33 && marks <= 80 || !false){ // avoid 
    console.log("pass")
}

// truthy & falsy 

if(true){ // 1 
    console.log("it has true value");
}else{
    console.log("it has false value");
}

if(false){ //0 , null , undefined
    console.log("it has true value");
}else{
    console.log("it has false value");
}

let num = -10 ;

if(num){
    console.log("num is not equal to 0 ");
}else{
    console.log("num is equal to 0 ");
}
