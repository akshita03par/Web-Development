//array-------------------------------------------------

let student = ["Akshita","Aman","Priya"];
console.log(student);

let nums =[2,4,6,8];
console.log(nums);

console.log(nums[0]);// 2

console.log(nums.length); //4
console.log(typeof(nums)); //object

//mixed array
let info =["Akhsita",67,89.0];
console.log(info);

//empty array 

let empArr =[];
console.log(empArr.length);

console.log([2,4,6].length); // 3

//indexof//indexof string
console.log(info[0][0]); //A
console.log(info[1][0]); //undefined

console.log(info[0].length); //7

// array are mutable------------------------

let fruits = ["mango","apple","litchi"];
console.log(fruits);

fruits[0] = "banana";
console.log(fruits);

fruits[9] = "papaya";
console.log(fruits); // size 10


// Array methods----------------------------

let cars=["audi","bmw","xuv","maruti"];
console.log(cars);

//1 push (add to end)
console.log(cars.push("toyota","ferrari"));
console.log(cars);

//2 pop (delete from end)
console.log(cars.pop()); // ferrari delete
console.log(cars);

//3 unshift (add to start)
console.log(cars.unshift("ferrari"));
console.log(cars.unshift("swift"));
console.log(cars);

//4 shift (delete from start)
console.log(cars.shift()); // swift delete
console.log(cars);


//ex

let followers =["a","b","c"];

let blocked = followers.shift();
console.log(followers);
console.log(blocked);
