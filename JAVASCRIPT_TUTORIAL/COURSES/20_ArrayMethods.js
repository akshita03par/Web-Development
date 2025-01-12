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
