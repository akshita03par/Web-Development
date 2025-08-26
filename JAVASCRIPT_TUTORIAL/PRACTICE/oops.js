// --------------------------- OBJECT LITERAL ---------------------------

const user = {
  username: "Akshita",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // `this` => current object ko point karega

    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);

    console.log(this); // pura object print karega
  },
};

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);  // global context (browser me "window", node me "{}")

// --------------------------- CONSTRUCTOR FUNCTION ---------------------------

// Constructor function -> new object create karne ke liye use hota hai
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; // `new` ke saath return karna zaroori nahi
}

const userOne = new User("Akshita", 12, true);
const userTwo = new User("AkshitaParmar", 11, false);

// console.log(userOne.constructor); // constructor ka reference
console.log(userTwo); // ek object print karega

// --------------------------- FUNCTION AS OBJECT ---------------------------

// JS me function bhi object hote hain
function multipleBy5(num) {
  return num * 5;
}

// function par custom property set kar di
multipleBy5.power = 2;

console.log(multipleBy5(5)); // 25
console.log(multipleBy5.power); // 2
console.log(multipleBy5.prototype); // function ka prototype object

// --------------------------- PROTOTYPE WITH CONSTRUCTOR ---------------------------

// Constructor for user creation
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// Common methods ko prototype me add karte hain (memory efficient)
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

// New objects
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.increment(); // chai ka score +1
chai.printMe(); // "price is 26"

// --------------------------- PROTOTYPE EXTENSION ---------------------------

let myName = "Akshita     ";
console.log(myName.trueLength); // abhi undefined (add karenge niche)

// Arrays example
let myHeros = ["thor", "spiderman"];

// Normal object
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// Object.prototype me function add karne se sabhi objects ke paas method aata hai
Object.prototype.akshita = function () {
  console.log(`akshita is present in all objects`);
};

// Array.prototype me function add karne se sirf arrays ke paas method aata hai
Array.prototype.heyakshita = function () {
  console.log(`Akshita says hello`);
};

// --------------------------- INHERITANCE ---------------------------

const Users = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // old style inheritance
};

Teacher.__proto__ = Users; // Teacher inherits from Users

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

// --------------------------- STRING PROTOTYPE EXTENSION ---------------------------

let anotherUsername = "AkshitaParmar     ";

// String ke prototype ko extend karke custom method add ki
String.prototype.trueLength = function () {
  console.log(`${this}`); // original string
  console.log(`True length is: ${this.trim().length}`); // trim() se spaces hatake length
};

// Ab sab strings ke paas trueLength method hai
anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
