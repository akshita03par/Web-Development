// Js array is resizeable 

// Array---------------------------->
const myArr = [0,1,2,3,4,5];
console.log(myArr);

const myArr2 = new Array(1,2,3,4);
console.log(myArr2);

//Array methods ->

myArr.push(6);
console.log(myArr);

myArr.unshift(9); // add in start
myArr.shift(); // remove from start
console.log(myArr);

// join --> change in string 

const newArr = myArr.join();
console.log(newArr);
console.log(typeof(newArr));

