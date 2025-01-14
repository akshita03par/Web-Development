//

console.log("hello duniya");


// ternary operator 

let age = 21;
let Status = (age >=18) ? 'I can vote': 'No vote';

console.log(Status);

// object --------

let rectangle = {
    length : 1 ,
    breadth : 2,

    draw: function(){
        console.log('drawing rectangle');
    }
};

console.log(rectangle);
console.log(rectangle.draw()); 

// object creation -----> how ? 
//1 factory function 

function  createRectangle(len , bre) {
    return rectangle = {
        length : len , // property
        breadth : bre,
    
        draw: function(){
            console.log('drawing rectangle'); // method 
        }
    };
}

let rectangleObj1 = createRectangle(6,8);
console.log(rectangleObj1);

//2 constructor function 

function Rectangle(len ,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log("drawing rectangle");
    }
}

let RectangleObject = new Rectangle(12,5);
console.log(RectangleObject);

// dynamic nature of object 

RectangleObject.color = "yellow";
console.log(RectangleObject);

// constructor property 

let rectangle1 = new Function(
    'length','breadth',
  `  this.length = length;
    this.breadth = breadth;
    this.draw = function(){
        console.log("drawing rectangle");
    }`
);

//object creation using rectangle1

let rect = new rectangle1(2,3);
console.log(rect);

// for-in loop 

let rectangle2 = {
   length :2 ,
   breadth :4
};

for (let key in rectangle2){
    console.log(key,rectangle2[key]);
}

// for-of loop 

for (let key of Object.keys(rectangle2)){
    console.log(key); // length , breadth
}

for (let key of Object.entries(rectangle2)){
    console.log(key); 
}

// how check property exit are not ?

if('color' in rectangle2){
    console.log('Present');
}else{
    console.log('Absent');// Absent
}

// OBJECT CLONING ---------------------------->

//1 ITERATION 

console.log("iteration-----");

let src = {
    a:10,
    b:20,
    c:30
};

let dest = {};
for(let key in src){
    dest[key] = src[key];
}

console.log(dest);
src.a++;
console.log(src);
console.log(dest);

//2 Assign 

console.log("assign-----");

let src2 = {
    a:20,
    b:30,
    c:40
};

let src1 = {value:25};

let dest2 = Object.assign({},src2,src1);
console.log(dest2);

src2.a++;
console.log(src2);
console.log(dest2);

//3 spread 

console.log("spread------");

let src3 = {
    a:30,
    b:40,
    c:50
};

let dest3 = {...src3};
console.log(dest3);

src3.a++;
console.log(src3);
console.log(dest3);

// STRING 

let firstName = "Akshita Parmar";
console.log(firstName);

console.log(firstName.length); //14

console.log(firstName.includes("pa")); //false
console.log(firstName.startsWith("Akshita")); //true
console.log(firstName.endsWith("ar"));   //true

let message = "this is my first message";
let words = message.split(" ");
console.log(words);

// Date and Time 

let date = new Date();
console.log(date);

let date2 = new Date("June 26 2003 02:30");
console.log(date2);

let date3 = new Date(2003,5,26,2,30,50);
console.log(date3);

date3.setFullYear(2002);
console.log(date3);

//Array ------->

// find elements in object 

let courses = [
    {no:1, name:"Akshita"},
    {no:2, name:"Rahul"}
];

console.log(courses);

let course = courses.find(function(course){
    return course.name === "Akshita";
});

console.log(course);

// arrow function -------------->

let Course = courses.find(Course =>  Course.name === "Rahul");
console.log(Course);

// Empty an array --------------->

let numbers = [1,2,3,4,5];
let numbers2 = numbers;

// numbers = []; //1
numbers.length = 0; //2
numbers.splice(0,numbers.length); //3
console.log(numbers);
console.log(numbers2);

// concat (combining)--------->

let first = [1,2,3];
let second = [4,5,6];

let combined = first.concat(second);
console.log(combined);

let combine = [...first,"a",...second,"b"];
console.log(combine);

// for-each------->

let arr = [10,20,30,40,50];

arr.forEach(function(number){
    console.log(number);
});


// arrow function 
console.log("arrow function------");

arr.forEach(number => console.log(number));

// joining an array 

let Numbers = [10,20,30,40,50];
const joined = Numbers.join(',');

console.log(joined);

// array to object mapping 

let numbers3 = [1,2,8,-5,-8];
let filtered = numbers3.filter(value => value >=0);
console.log(filtered);

let items = filtered.map(function(num){
    return {value:num} ;
});   

console.log(items);

// function -------------

// function declaration 

function run() {
    console.log("running");
}

run();

// named function assignment 

let stand = function walk(){
    console.log("walking");
};

stand();

// Anonymous function assignment 

let stand2 = function(){
    console.log("walking");
};

stand2();

// pass multiple parameter

function sum(a,b){
    console.log(arguments); // reamining value store in arguments 
    return a+b;
}

console.log(sum(1,2,3,4,5,6,7));

// multiple parameter sum 

function Sum(){
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
}

console.log(Sum(1,2,3,4,5,6,7));

// rest operator 

function sum2(num,value,...args){
    console.log(args);
    console.log(num);// 1
    console.log(num); //2
}
sum2(1,2,3,4,5,6); // array 


// getter and setter ------->

let person = {
    fName : "Akshita",
    lName : "Parmar",
    get fullName() {
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value) {
        if(typeof value !== "string"){
            throw new Error("you have not sent a string");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

try{
    person.fullName = "Akshita Parmar";
    console.log(person.fullName);
}catch(e){
    alert(e);
}

// console.log(person.fullName);// Akshita Parmar

person.fullName = "Rahul Kumar";
console.log(person.fullName);




