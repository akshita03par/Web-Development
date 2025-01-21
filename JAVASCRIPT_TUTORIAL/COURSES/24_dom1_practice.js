// a<p> with red text that says "Hey I'm red"

let para1 = document.createElement("p");
para1.innerText="Hey I'm red!";

document.querySelector("body").append(para1);
para1.classList.add("red");

//a <h3> with blue text that says I'm a blue h3

let h3 = document.createElement("h3");
h3.innerText="I'm a blue h3!";

document.querySelector("body").append(h3);
h3.classList.add("blue");

// a<div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says "I'm in a div"
// a<p> that says "ME TOO"


let div = document.createElement("div");
document.querySelector("body").append(div);

div.classList.add("div");

//h1
let h1 = document.createElement("h1");
h1.innerText="I'm in a div!";

// document.querySelector("div").append(h1);
div.append(h1);

//p

let p = document.createElement("p");
p.innerText = "ME TOO!";

// document.querySelector("div").append(p);
div.append(p);

