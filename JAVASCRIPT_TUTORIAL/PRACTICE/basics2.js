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

// spread concept------------->

const marvel_heroes = ['Thor','IronMan','SpiderMan'];
const dc_heroes = ['SuperMan' , 'Flash' , 'BatMan'];

const allHeores = [...marvel_heroes,...dc_heroes];
console.log(allHeores);

// flat------>

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[10,11]]];
console.log(anotherArray);
const realArray = anotherArray.flat(Infinity);
console.log(realArray);

//is form -------->
console.log(Array.from("Akshita"));

// make array --->

let src1 = 100;
let src2 = 200;
let src3 = 300;

console.log(Array.of(src1,src2,src3));
