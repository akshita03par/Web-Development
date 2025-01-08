// this keyword 

const student = {
    name:"Akshita",
    age:21,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        let avg= (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks =${avg} `);
    }
}

console.log(student.getAvg());


// TRY CATCH 

try{
    console.log(a);
}catch(e){
    console.log("caught an error..a is not defined");
    console.log(e);
}

console.log("Akshita Parmar");

// ARROW FUNCTION ----->

const sum = (a,b) => {
    console.log(a+b);
};

sum(12,3);

//cube
console.log("cube---");

const cube =(n) => {
    return n*n*n;
};

console.log(cube(7));

//pow 
console.log("pow------");

const pow = (a,b) => {
    return a**b;
}

console.log(pow(2,3));

//hello 
const hello =() =>{
    console.log("Hello World");
}

hello();


// IMPLICIT ARROW FUNCTION 

const mul = (a,b) => (
    a * b 
);

console.log(mul(3,4));

const add = (a ,b )=> (
    a + b
);


console.log(add(3,4));

// SET timeout ---------------

console.log("hi there!");

setTimeout( ()=> {
    console.log("Akshita Parmar");
},3000);

console.log("Welcome to");

// Set Interval -------------


let id = setInterval( ()=> {
    console.log("Akshita Parmar");
},3000);

console.log(id);
 clearInterval(id); // for stop the code 


 // this with Arrow function -----------------

const STudent = {
     name : "Akshita",
     marks : 95,
     prop : this, // global scope
     getName : function(){
        console.log(this);
        return this.name;
     },
     getMarks: () => {
        console.log(this); //parents scope -----> window(undefined)
        return this.marks;
     },
     getInfo1:function(){
        setTimeout( () =>{
            console.log(this); //student
        },3000);
     },
     getInfo2:function(){
        setTimeout( function(){
            console.log(this); //window object
        },3000);
     },
};

console.log(STudent.getName()); // Akshita

console.log(STudent.getMarks()); // parents scope -----> window(undefined)

console.log(STudent. getInfo1()); // student object 

console.log(STudent.getInfo2()); //window object 



