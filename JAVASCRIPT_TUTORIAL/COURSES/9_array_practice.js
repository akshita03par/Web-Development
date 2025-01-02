// first n elements of an array n should be positive n=3;

let arr =[7,9,0,-2];
console.log(arr);

// console.log(arr.splice(3));
let n=3;
let ans = arr.slice(0,n);

console.log(ans);

//2 last n elements of an array n should be positive n=3;

let Ans = arr.slice(arr.length-n);
console.log(Ans);

// 3check string is blank or not 

let str= prompt("please enter a string");

if(str.length==0){
    console.log("string is empty");
}else{
    console.log("string is not empty");
}

//4 test whether the character at the given index is lower case 

let name = "Akshita Parmar";
let idx = 0;

if(name[idx]==name[idx].toLowerCase()){
    console.log("character is lowercase");
}else{
    console.log("character is not lowercase");
}

// 5 strip leading and trailing spaces from a string .

let str1 = prompt("please enter a string");
console.log(`original string = ${str1}`);
console.log(`string without spaces = ${str1.trim()}`);


//6 check if an element exists in an array or not .

let arr2 =["hello",'a',23,64,99,-6];

let item =64;

if(arr2.indexOf(item) !=-1){
    console.log("element exits in array");
}else {
    console.log("element does not exits in array");
}

