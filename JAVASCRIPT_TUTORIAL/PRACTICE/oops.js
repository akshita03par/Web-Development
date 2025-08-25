const user = {
    username: "Akshita",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}


//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this;
}

const userOne = new User("Akshita", 12, true);
const userTwo = new User("AkshitaParmar", 11, false);
//console.log(userOne.constructor);
console.log(userTwo);


//objects---------------------->

function multipleBy5(num){

    return num*5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);

chai.printMe();

