//array-------------------------------------------------

console.log("Array----------------------");

let student = ["Akshita","Aman","Priya"];
console.log(student);

let nums =[2,4,6,8];
console.log(nums);

console.log(nums[0]);// 2

console.log(nums.length); //4
console.log(typeof(nums)); //object

//mixed array

console.log(" Mixed Array----------------------");

let info =["Akhsita",67,89.0];
console.log(info);

//empty array 

let empArr =[];
console.log(empArr.length);

console.log([2,4,6].length); // 3

//indexof//indexof string

console.log("indexof string----------------------");
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

console.log("Array methos---------------------");

let cars=["audi","bmw","xuv","maruti"];
console.log(cars);


//1 push (add to end)
console.log("1.push--------------------");
console.log(cars.push("toyota","ferrari"));
console.log(cars);

//2 pop (delete from end)
console.log("2.pop--------------------");
console.log(cars.pop()); // ferrari delete
console.log(cars);

//3 unshift (add to start)
console.log("3.unshift--------------------");
console.log(cars.unshift("ferrari"));
console.log(cars.unshift("swift"));
console.log(cars);

//4 shift (delete from start)
console.log("4.shift--------------------");
console.log(cars.shift()); // swift delete
console.log(cars);


//ex

let followers =["a","b","c"];

let blocked = followers.shift();
console.log(followers);
console.log(blocked);

// change array 

let months= ["january","july","march","august"]
console.log(months);

console.log(months.shift());
console.log(months.shift());
console.log(months.unshift("june"));
console.log(months.unshift("july"));
console.log(months);

// 5 indexof 
console.log("5.indexof--------------------");
let primary =["red","yellow","blue"];
console.log("primary :",primary);
let secondary=["orange","green","violet"];
console.log("secondary :",secondary);

console.log(primary.indexOf("yellow")); //1
console.log(primary.indexOf("green"));  //-1

//6 includes --> true and false 

console.log("6.includes--------------------");
console.log(primary.includes("yellow")); // true 
console.log(primary.includes("Yellow")); //false

//7 concat  (merge two array)

console.log("7.concat--------------------");
console.log(primary.concat(secondary));

//8 reverse in original  srray

console.log("8.reverse--------------------");
console.log(primary.reverse());
console.log("reverse :",primary);


//9 slice  (copies )

console.log("9.slice--------------------");
let colors=["red","yellow","blue","orange","pink","white"];

console.log(colors.slice()); //all
console.log(colors.slice(2)); //blue to white
console.log(colors.slice(2,3)); //blue
console.log(colors.slice(-2)); // pink , white
console.log(colors.slice(-1));

//10 splice (remove)

console.log("10.splice------------------------");
console.log(colors);
console.log(colors.splice(4)); // delete pink white
console.log(colors);
console.log(colors.splice(0,1)); //red
console.log(colors);
console.log(colors.splice(0,1,"black","grey")); // yellow delete
console.log(colors); // black grey add 
console.log(colors.splice(1,0,"brown"));
console.log(colors);

//11 sort 

console.log("11.sort----------------------");

let days = ["sunday","monday","tuesday","wedneday"];
console.log(days);

console.log(days.sort()); // sort according to alphabetically accending 


let squares = [25,16,4,49,36,9] // number are sort according to number precedence like 1,2,3 etc
console.log(squares);
console.log(squares.sort()); // 15,25,36,4,49,9

//practice 
console.log("practice question --------------");

//1 
let Days = ["january","july","march","august"];
console.log(Days);

// console.log(Days.splice(0,1)); // delete january
// console.log(Days);
// console.log(Days.splice(1,0,"june"));
// console.log(Days); // july,june , march, august

console.log(Days.splice(0,2,"july","june"));
console.log(Days);


//2 
let languages =["c","c++","html","javascript","python","java","c#","sql"];
console.log(languages);

// console.log(languages.reverse());
// console.log(languages.indexOf("javascript"));

console.log(languages.reverse().indexOf("javascript")); //4

// ARRAY REFERENCES (address in memory)------------------------

console.log("Array References-------------------------------");

let arr1 =[1];
let arr2 =[1];

console.log(arr1===arr2); // false (address are different)

let arr =["a","b","c"];
let arrCopy = arr;

console.log(arr===arrCopy); //true (address are same )
console.log(arr.push("d"));
console.log(arr);
console.log(arr===arrCopy);// true
console.log(arrCopy);

