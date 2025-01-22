// Dom events ------------------>

// onclick 

let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function () {
    console.log("button was clicked");
};

// for all button--->

let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("you entered a button");

    };
}

function sayHello() {
    alert("Hello!");
}

// Event Listener ------->

//addEventListener

// btn.addEventListener("click",function() {
//     console.log("button click");
// });

// for(btn of btns){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
//     btn.addEventListener("dbclick", function (){
//         console.log("you double click");
//     });
// }

function sayName() {
    console.log("Akshita parmar");
}

let p = document.querySelector("p");

p.addEventListener("click",function () {
   console.log("parah was clicked");
});

let box = document.querySelector(".box");

box.addEventListener("mouseenter",function(){
     console.log("mouse inside box");
});


// this in event listeners ---------


let btn2 = document.querySelector("button");

// btn2.addEventListener("click",function(){
//     console.log(this);
//     this.style.backgroundColor = "blue";
// });

let P = document.querySelector("p");
let H1 = document.querySelector("h1");
let H3 = document.querySelector("h3");

function changeColor() {
    console.log(this.innerText);
    this.style.color = "red";
}

btn2.addEventListener("click",changeColor);
P.addEventListener("click",changeColor);
H1.addEventListener("click",changeColor);
H3.addEventListener("click",changeColor);

