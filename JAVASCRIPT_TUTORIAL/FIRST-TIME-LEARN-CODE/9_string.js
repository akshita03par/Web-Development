// strings ---->immutable 

let str = "Akshita parmar"; // create string 

console.log(str.length); // string length

console.log(str[0],str[1],str[2],str[3],str[4],str[5],str[6],str[7]); // string indices 

//template literals ------>   `string text ${expression} string text`========> STRING INTERPOLATION

let specialString = `this is a template literal`;
console.log(specialString);
console.log(typeof specialString);

// it is used for the easy way of pirnt 

let obj ={
    item :"pen",
    price :10 
};

console.log("the cost of",obj.item,"is",obj.price,"rupees");

// better way to use template literals 
let output =`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// string methods -------> str.toUpperCase() , str.toLowerCase(),str.trim(),str.slice(start,end?),str1.concat(str2),str.replace(searchVal,newVal),str.charAt(idx)

let stri = "Akshita Parmar";
console.log(stri.toUpperCase());// it doesnot change original value , it give new return value 

console.log(stri.toLowerCase());

console.log(stri);// original string 

stri=stri.toUpperCase();
console.log(stri);// it can change to uppercase

// str.trim ---------> it removes whitespaces form the starting and ending string 

let str1 ="       Akshita   Parmar   ";
console.log(str1);
console.log(str1.trim());

// str.slice(start,end?)-----> returs part of string (start will count and end index is not count-- non inclusive )

console.log(str.slice(2,5)); // shi 

console.log(str.slice(8)) // last are not complusory 
 
// concat ---------> str1.concat(str2)

let str2 = "Abhijeet ";
let str3 = "Parmar";

console.log(str2.concat(str3));

let res = str2 + str3;
console.log(res);

let join = "hello" + 123;
console.log(join);

//replace----> str.replace(searchVal,newVal)

console.log(str2.replace("A","a"));
console.log(str2.replace("Abhijeet","Akshita"));

// str.charAt(idx)

let str4 = "ILoveJS";

console.log(str4.charAt(0));//I
console.log(str4.charAt(5));

