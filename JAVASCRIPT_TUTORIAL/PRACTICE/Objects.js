// Object literals---------------->

const mySym = Symbol("key1");

const JsUser = {
    name: "Akshita",
    "full Name" : "Akshita Parmar",
    [mySym]:"myKey1",
    age:22,
    location:"Indore",
    email:"Akshita@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Friday"]
}

console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);
console.log(JsUser[mySym]);

//object not change 
Object.freeze(JsUser);
console.log(JsUser);

//singleton--------------------->

const tinderUser = new Object();

tinderUser.id = "123";
tinderUser.name = "Akshita";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

// merge object ------>

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

const obj3 = Object.assign({},obj1,obj2); // {}->target , source
console.log(obj3);


console.log(Object.entries(tinderUser)); // in form of array

//Object destructing-------->

const course = {
    courseName:"JavaScript",
    price:"999",
    courseInstructor:"Akshita"
}

const{courseInstructor : Instructor} = course;
console.log(Instructor);



