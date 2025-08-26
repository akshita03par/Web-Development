//call and this------------>

function SetUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    // new object created using constructor
    SetUsername.call(this, username);
   
    this.email = email;
    this.password = password;
}

// new object created using constructor
const printAkshita = new createUser("akshita", "akshita@fb.com", "123");
console.log(printAkshita);





