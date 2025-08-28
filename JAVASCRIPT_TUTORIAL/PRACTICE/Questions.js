//1
console.log("Question 1:");

function greet(name) {
  console.log(`Hello ${name} , Welcome to js Course `);
}

greet("Akshita");

console.log("");

//2

console.log("Question 2 : calculator");

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      if (num2 == 0) {
        result = "Error";
      } else {
        result = num1 / num2;
      }
      break;

    case "%":
      if (num2 == 0) {
        result = "Error";
      } else {
        result = num1 % num2;
      }
      break;

    default:
      result = "Invalid Operator";
  }
  return result;
}

console.log(calculator(5, 2, "+"));
console.log(calculator(5, 0, "/"));
console.log("");

//3 Reverse a String: Write a function to reverse a given string 
// without using built-in reverse methods.

console.log("Question 3 : Reverse a string");

const isReverse = (str) => {
  let rev = "";
  for (let char = str.length - 1; char >= 0; char--) {
    rev = rev + str[char];
  }
  return rev;
};

console.log(isReverse("Akshita Parmar"));

//4  Given an array of products where each product has a name and a 
// price, write a function that uses the filter method to return an 
// array containing only the products with a price less than or 
// equal to 500.
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];


console.log("Question 4 : Array Filter");

const products = [
  {
    name: "Laptop",
    price: 1200,
  },
  {
    name: "Phone",
    price: 800,
  },
  {
    name: "Tablet",
    price: 300,
  },
  {
    name: "SmartWatch",
    price: 150,
  },
];

const filterProduct = products.filter((curElement) => {
  return curElement.price <= 500;
});

console.log(filterProduct);

//5 filter unique values 

console.log("Question 5 : filter unique values");

const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
let uniqueVlaues = numbers.filter((curElem, index, arr) => {
  // 1
  return arr.indexOf(curElem) === index;
});

console.log(uniqueVlaues);

//2
console.log(...new Set(numbers));


//6 Using the map method, write a function that takes an array of 
//strings and returns a new array where each string is capitalized.

console.log("Question 6 : using map , string capitalized");

const fruits = ["apple ", "banana", "cherry", "date"];

const capitFruits = fruits.map((curElem) => {
  return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
});

console.log(capitFruits);


//7 Using the map method, write a function that takes an array of 
// numbers and returns a new array where each number is squared, but 
// only if it's an even number.


const nums = [1,2,3,4,5,6,7,8];

const squareNumber = nums.map((currNum)=>{
    if(currNum % 2 == 0){
        return currNum*currNum;
    }else{
        return currNum;
    }
});

console.log(squareNumber);




