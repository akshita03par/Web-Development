// ARRAY METHODS 

//1 forEach--->

let arr = [1,2,3,4,5];

let print = function(el){
    console.log(el);
};

arr.forEach(print);

// or
arr.forEach(function(el){
    console.log(el);
});

//arrowfunction 

arr.forEach((el) => {
    console.log(el);
});

//objecs 

let arr2 = [{
    name:"akshita",
    marks:95
},
{
    name:"aman",
    marks:95
},
{
    name:"rajat",
    marks:95
}];

console.log(arr2);

arr2.forEach((student) => {
    console.log(student);
});

// 2 Map ------

let num = [1,2,3,4];

let double = num.map((el) => {
    return el * 2;
});

console.log(double);


// 
let students = [{
    name:"akshita",
    marks:95
},
{
    name:"aman",
    marks:94
},
{
    name:"rajat",
    marks:96
}];


let gpa = students.map((el) =>{
    return el.marks / 10;
});

console.log(gpa);

//3 filter-----------

let nums = [ 1,4,5,8,9,12,16,35,46,57];

let ans = nums.filter((el) => {
   return el % 2 == 0; // even ->true , odd ->false
});

console.log(ans);

//4 every -------

console.log([2,4,6].every((el) => el%2 == 0)); //true

console.log([2,4,6,7].every((el) => el%2 == 0)); //false 

console.log([1,3,7].every((el) => el%2 != 0)); //true 

//5 some ------

console.log([2,4,6,7,9].some((el) => el%2 == 0)); //true


console.log([1,3,5].some((el) => el%2 == 0)); //false 

//6 reduce ---------

console.log([1,2,3,4].reduce((res,el) => (res + el)));//10

//console.log([1,2,3,4].reduce((res,el) => (res * el))); //24

console.log("reduce----------------");
let Nums = [1,2,3,4,5];
let finalVal = Nums.reduce((res,el) =>{
    console.log(res);
    return res * el;
});
console.log(finalVal); //120

// max value find out using reduce 

let Number = [2,114,34,117,89,9];

let finalAns = Number.reduce((max,el) =>{
    if(el> max){
      return el;
    }else{
        return max;
    }
});

console.log(finalAns);

// check if all numbers in our array are multiples of 10 or not 

// let number = [10,20,35,40,45,50];

console.log([10,20,35,40,45,60].every((el) => el%10 == 0));

// create a function to find the min number in an array 

let number = [2,45,67,3,1,87];

let minVal = number.reduce((min,el) => {
    if(el < min){
        return el;
    }else{
        return min;
    }
});

console.log(minVal);

// Default parameter 

console.log("default parameter-------");
function sum(a,b=4){
    return a + b;
}

console.log(sum(2)); // 6
console.log(sum(2,5));  //7 

//spread --------

console.log(..."akshitaparmar");

let arrNum = [1,4,2,3,5,0,6,7,3,9,];

console.log(...arrNum);
console.log(Math.min(...arrNum)); //0

console.log(Math.max(...arrNum));//9

// spread with array literals ------

let numTable = [2,4,6,8];

let newArr = [...numTable];
console.log(newArr);


let chars = [..."hello"];
console.log(chars);

// spread with object litearals 

const data = {
    email: " akshitaparmar23@gmail.com ",
    password:"abcd",
};

let dataCopy = {...data, id:123};
console.log(dataCopy);

//object
let arr3 = [1,2,3,4,5];
let obj1 = {...arr3};

console.log(obj1);

//REST---------

function sum(...args){
    for(let i = 0;i<args.length; i++){
        console.log("you gave us",args[i] );
    }
}

console.log(sum(1,2,3,4,5));

function min(a,b,c,d){
    console.log(arguments);
    console.log(arguments.length);
}

min(2,4,6,8);

// 

function sum(...args){
    return args.reduce((sum,el) => sum * el);
}

console.log(sum(4,5));

// min 

function min(msg, ...args){
    console.log(msg);
    return args.reduce((min,el) => {
        if(min > el){
            return el;
        }else {
            return min;
        }
    });
}

console.log(min(11,4,3,12));//3
console.log(min("hello",42,14,5,13,14,6));
 
//destructing -----

let names = ["tony","bruce","steve","peter"];
let [winner, runnerup,...others] = names ; // destructing

console.log(winner , runnerup);
console.log(others);

// destructing with objects -----

const student ={
    name:"karan",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username:"karan123",
    password:"abcd"

};

const{username:user,password:pass,subjects:sub,city ="Indore"} = student;
console.log(user);
console.log(pass);
console.log(sub);
console.log(city); //indore 

