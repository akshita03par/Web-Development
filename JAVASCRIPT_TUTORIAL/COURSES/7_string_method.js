// string method 

// 1 str.trim()
let msg = "   Hello   ";

console.log(msg);
console.log(msg.trim()); // start and end space remove 

let password = prompt("set your password");
let newpass = password.trim();
console.log(newpass); // create new string --- immutable

//2 str.toUpperCase()

let name="Akshita Parmar";

console.log(name.toUpperCase());

//3 str.toLowerCase()

console.log(name.toLowerCase());

//4 indexOf()

console.log(name.indexOf("Parmar")); // 8
console.log(name.indexOf("a")); //6

// method chaining 

let newMess = msg.toUpperCase().trim();
console.log(newMess);

// 6 slice()

let str = "ILoveCoding";

console.log(str.slice(5)); //coding
console.log(str.slice(1,4)); //lov
console.log(str.slice(0,5)); // ilove
console.log(str.slice(-str)); // ilovecoding
console.log(str.slice(length-str));//ilovecoding
console.log(str.slice(-5));// 11-5 // oding
console.log(str.slice(-2)); //ng

//7 replace 

console.log(str.replace("Love","do")); // Idocoding
console.log(str.replace("o","x")); //IlxveCoding
console.log(str.replace("o","x").replace("o","x"));//IlxveCxding

//8 repeat 

console.log(name.repeat(2)); //Akshita ParmarAkshita Parmar


// pratice 

// trim and uppercase

let Msg = "help!";
 let newMsg = Msg.trim().toUpperCase();
 console.log(newMsg);

// slice,indexof,replace

let Name="ApnaCollege";

console.log(Name.slice(4,9)); //Colle
console.log(Name.indexOf("na")); //2
console.log(Name.replace("Apna","Our")); //OurCollege

//
console.log(Name.slice(4).replace("l","t").replace("l","t"));

