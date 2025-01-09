//1 write an arrow function that returns the square of a number n 

const square = (n) => (
    n * n 
);

console.log(square(5));

//2 write a function that prints "helllo world" 5 times at intervals of 2s each 

let id = setInterval( () => {
    console.log("hello world");
},2000);

setTimeout(() => {
  clearInterval(id);
  console.log("clear interval sucessfully run");
},10000);



// 3 write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers 

const arrayAverage = (arr) => {
  let total = 0;
  for (let number of arr){
    total += number;
  }
  return total / arr.length;
}

let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));

// 4 write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.


let num = 4;

const isEven = (num) =>(
  num%2 == 0
);

console.log(isEven(num));

//5 

const object = {
   message:'Hello,World!',
   logMessage(){
    console.log(this.message);
   }
}

setTimeout(object.logMessage,1000);

//6 

let length = 4;
function callback() {
  console.log(this.length);
}

const Object = {
  length:5,
  method(callback){
    callback();
  },
};

Object.method(callback,1,2);