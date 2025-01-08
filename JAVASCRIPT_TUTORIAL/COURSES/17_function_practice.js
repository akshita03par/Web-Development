//1 write a javascipt function that returns array elements larger than a number .

let arr = [8,9,10,1,2,3,4,5,6,7];
let num = 5;

console.log("1-----------------------larger than number");

function getElements(arr,num){
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}

getElements(arr,num);


//2 write a javascript function to extract unique characters from a string 

console.log("2--------------------extract unique character from a string");

let str = "abcdabaaaakcefgggh";

function getUnique(str){
    let ans = "";
    for(let i = 0; i<str.length;i++){
          let currChar = str[i];
          if(ans.indexOf(currChar)== -1){
            ans += currChar;
          }
    }
    return ans;
}

console.log(getUnique(str));

//3 accepts a list of country names as input and returns the longest country name as output 

console.log("3--------------------longest country name ");

let country = ["Australia","Germany","United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for(let i = 0;i <country.length;i++){
        let anslen = country[ansIdx].length;
        let currlen = country[i].length;
        if(currlen > anslen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

console.log(longestName(country));

// 4 write a javascript function to count the number of vowels in a string argument 

console.log("4--------------------count vowels ")

let Str = "akshita Parmar";

function countVowels(Str){
    let count = 0;
    for(let i = 0; i < Str.length; i++){
        if(
            Str.charAt(i) == "a" ||
            Str.charAt(i) == "e" ||
            Str.charAt(i) == "i" ||
            Str.charAt(i) == "o" ||
            Str.charAt(i) == "u"
        ){
            count++;
        }
    }

    return count;
}

console.log(countVowels(Str));

// 5 wite a javascript function to generate a random number within a range (start,end).

console.log("5-------------------generate random number with range");

let start = 100;

let end = 200;

function generateRandom(start,end){
    let diff = end- start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start,end));

