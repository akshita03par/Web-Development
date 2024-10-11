// arrays (mutable)----> it is not any type ,array has itself an object 

let marks = [67,89,67,78,90];
console.log(marks);
console.log("length of array is ",marks.length);

let heroes = ["ironman","spiderman","thor","Captain America","hulk","shaktiman"];
console.log(heroes);

console.log(typeof marks); // object 

// Array indices (index)
console.log("the value in index 3 ",marks[3]);

console.log("the value in index 3 ",marks[7]);// undefined 

marks[1]=92;
console.log(marks); // new array update 

// looping over an array 
  // loops -> iterable(strings,objects,arrays)

  //for loop
for(let i =0;i < heroes.length;i++){
    console.log(heroes[i]);
}

// for of 
let cities =["delhi", "indore","pune","mumbai","hyderabad"];

for (let city of cities){
    console.log(city.toUpperCase());
}


