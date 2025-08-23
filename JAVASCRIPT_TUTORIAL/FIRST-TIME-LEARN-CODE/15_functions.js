// function define 
function myfunction(){
    console.log("welcome to Apna college");
    console.log("we are learning JS");
}

// function call 
myfunction();

function myFunction(msg){ // function ke andar input--> parameter
    console.log(msg);
}

myFunction("I Love Js"); // isko ham argument bolte hai 

// sum of two number 

function sum(x,y){
    console.log(x+y);
}
sum(56,45); // 101 

// return statement 

function Sum(x,y){
    // function ke local variables jese kaam karege parameters-->scope
    S = x+y;
    return S; // return ke baad kuch bhi code execute nhi hota
}

let val = Sum(4,6);
console.log(val);

// ARROW FUNCTION 

const arrowSum = (a,b)=>{
    console.log(a+b);
};

arrowSum(236,456);

// mul 
const arrowMul=(a,b)=>{
    return a * b;
};

const printHello =()=> {
    console.log("hello")
 } // arrow function used for the small 
 printHello();

 