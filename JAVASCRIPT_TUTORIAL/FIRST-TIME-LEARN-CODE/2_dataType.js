// number 
let age = 24;
 //typeof(age)------> number

 // string 
 fullName = 'Akshita Parmar';
 
 //Boolean 
 isFollow = true ;

 //undefined
let x ;
console.log(x);

//null
let y= null ;
// typeof(y) = 'object'

//BigInt 
let z = BigInt("123");
// ====>123n (in last it give n)

// symbol 
let a = Symbol("Hello!");
// ======> Symbol(Hello!)

//---------------------OBJECTS-------------------//
  // (Collection of different variables)

const student = {
    name : "Priya",
    age : 21 ,
    cgpa : 7.2,
    isPass: true ,
};

// student["name"] ===>'Priya'

console.log(student.cgpa);
console.log(student["age"]);

//increasing
student["age"]=student["age"]+1; // increase the age 
console.log(student.age);

// new name 
student["name"]="Akshita Parmar";
console.log(student.name);
