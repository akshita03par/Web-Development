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

