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

for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
    btn.addEventListener("dbclick", function (){
        console.log("you double click");
    });
}

function sayName() {
    console.log("Akshita parmar");
}

