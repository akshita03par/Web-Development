// square and sum the array elements using the arrow function and then find the average of the arrray 

let num = [2,3,5,7,9];

const square = num.map((num) => num * num);
console.log(square);

let sum = num.reduce((acc,cur) => acc + cur ,0);
console.log(sum);

let avg = sum / num.length;
console.log(avg);

//2 create a new array using the map function whose each element is equal to the original element plus 5 .

let numbers = [2,4,6,8,-2,-4];
console.log(numbers.map((number) => number + 5));

// create a new whose elements are in uppercase of words present in the original array 

let name = ["akshita","aman","karan"];

console.log(name.map((string) => string.toUpperCase()));

//4  Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr,...args) => [
    ...arr,
    ...args.map((v) => v * 2), 
];

console.log(doubleAndReturnArgs([1,2,3],4,4)); 
console.log(doubleAndReturnArgs([2],10,4));

//5. Write a function called mergeObjects that accepts two objects and returns a new
//object which contains all the keys and values of the first object and second object

const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2});

console.log(mergeObjects({a:1,b:2},{c:3,d:4}));
