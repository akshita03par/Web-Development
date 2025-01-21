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

//