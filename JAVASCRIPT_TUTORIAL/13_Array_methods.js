// Array methods 
let foodItems = ["potato","apple","litchi","tomato"];
console.log(foodItems);

// push()---->add to end 
foodItems.push("chips","burger","paneer");
console.log(foodItems);

// pop()---> delete and return 
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deleted",deletedItem); // paneer

let deletedItem2 = foodItems.pop()
console.log(foodItems);
console.log("deleted",deletedItem2);//burger

//toString()--->converts array to string 
console.log(foodItems.toString());// string ---> it return new string not original
console.log(foodItems);

//concat()-->joins array and return result

let marverlHeroes = ["thor","spiderman","ironman","Dr.strange"];
console.log(marverlHeroes);
let dcHeroes = ["superman","batman"];
console.log(dcHeroes);
let indianHeroes =["shaktiMan","krish"]
console.log(indianHeroes);

let heroes= marverlHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes); // new array 

// unshift()-----> add to start 

marverlHeroes.unshift("antman");
console.log(marverlHeroes);

// shift()-----> delete from start
marverlHeroes.shift();
console.log(marverlHeroes);

// slice()---> return a piece (not change in original array )
            //startindex,endingindex ----> end index noninclusive hai 
console.log(marverlHeroes.slice(2,4));

//splice()---> change original array (add,remove, replace )
  
let arr =[1,2,3,4,5,6,7];
console.log(arr);

arr.splice(2,1,101,102); // index 1 mean (0,1 two element)ke badd 1 elem delete hoga aur new element add hoge uske baad bache hue
console.log(arr); // 1,2,101,102,4,5,6,7

// add 
arr.splice(4,0,56);// 102 ke baad add hoga 
console.log(arr);

// delete
arr.splice(3,1); // idx 3 par ek elem del karna hai 
console.log(arr);

// replace
arr.splice(2,1,3); //idx 2 delete karke 3 add kardo
console.log(arr);

arr.splice(4); // delete element after idx 3
console.log(arr);

