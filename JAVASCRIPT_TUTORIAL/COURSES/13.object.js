// object literals

const student = {
    name : "Akshita",
    age :21,
    marks:94.4
};

console.log(student);

// THREAD/TWITTER POST---------

// CREATE an object for the properties of thread/twitter post which includes 
//username , content , likes , reposts , tags 

const post = {
    username: "@akshitaparmar",
    content : "this is my #firstpost",
    likes:150,
    reposts :5,
    tags :["@akshita","@likes","@follow"]
};

console.log(post);

// GET VALUES 

console.log(post.username);
console.log(post["content"]);
console.log(post.tags);

let prop = "reposts";

console.log(post[prop]); //5

