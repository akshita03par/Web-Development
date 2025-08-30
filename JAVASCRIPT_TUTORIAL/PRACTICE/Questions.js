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

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const squareNumber = nums.map((currNum) => {
  if (currNum % 2 == 0) {
    return currNum * currNum;
  } else {
    return currNum;
  }
});

console.log(squareNumber);

//8 Write a JavaScript function that prints the letters 'a' through 'z' in the console.
//  You should use a loop to iterate through the letters and print each one on a new line.

function printLetter() {
  for (let i = 97; i < 97 + 26; i++) {
    console.log(String.fromCharCode(i));
  }
}

printLetter();

//9Write a function to count the number of vowels in a string?

function countVowel(str) {
  let count = 0;
  for (let char = 0; char < str.length; char++) {
    if (
      str[char] == "a" ||
      str[char] == "e" ||
      str[char] == "i" ||
      str[char] == "o" ||
      str[char] == "u" ||
      str[char] == "A" ||
      str[char] == "E" ||
      str[char] == "I" ||
      str[char] == "O" ||
      str[char] == "U"
    ) {
      count++;
    }
  }
  console.log(`Total number of vowel in "${str}" is ${count}`);
}

countVowel("Akshita Parmar");

// optimized better approch ->

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Education"));
console.log(countVowels("Akshita Parmar"));

//10 Write a function to check if all the vowels presents in a string or not?

const checkAllVowelPresentOrNot = (str) => {
  const vowels = "aeiou";

  for (let char of vowels) {
    if (!str.includes(char)) {
      return false;
    }
  }

  return true;
};

console.log(checkAllVowelPresentOrNot("My name is Akshita Parmar"));

//11 Write a JavaScript function isPangram that takes a string as input and returns true
// if the string is a pangram (contains all letters of the alphabet) and false otherwise.
//  The function should be case-insensitive and ignore spaces

const pangramChecker = (str) => {
  let inputArr = str.toLowerCase().split("");
  // console.log(inputArr);

  const values = inputArr.filter((curElem) => 
    curElem.charCodeAt() >= "a".charCodeAt() &&
     curElem.charCodeAt() <= "z".charCodeAt()
  );

  return new Set(values).size ===26;
  // return [...new Set(values)].length === 26;
};

console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));


