// getElementById-------------------------------->

console.log(document.getElementById("title"));

console.dir(document.getElementById("title").className);

// setAttribute() kuch return nahi karta
const title = document.getElementById("title");
title.setAttribute("class","test heading");
console.log(title);

//styling
title.style.backgroundColor = "green";
title.style.padding = "15px";

//textContent , innerHTML , innerText

console.log(title.textContent); // with hidden text
console.log(title.innerHTML); // with html tags
console.log(title.innerText); // only visible text

// querySelector()----------------------------------->

const selec1 = document.querySelector("h2");
console.log(selec1);

const selec2 = document.querySelector("#title");
console.log(selec2);

const selec3 = document.querySelector(".heading");
console.log(selec3);

const pass = document.querySelector("input[type='password']");
console.log(pass);

const myUl = document.querySelector("ul");
console.log(myUl);

const turnRed = myUl.querySelector("li");
turnRed.style.color = "Red";

turnRed.innerText = "ONE"; // change text into ONE

//querySelectorAll()-------NodeList(not array)---------------->

const tempLi = document.querySelectorAll("li");
console.log(tempLi);

tempLi[1].style.color = "yellow";

tempLi.forEach(function(li){
    li.style.backgroundColor="black";
    li.style.padding="10px";
    // li.style.borderRadius="50px";
    // li.style.margin="5px";
});

//getElementByClassName()---------HTMLCollection---------------->

const listItem = document.getElementsByClassName("list-item");
console.log(listItem);

//convert into array 
const myConvertArray = Array.from(listItem);

myConvertArray.forEach(function(li){
    li.style.borderRadius="50px";
    li.style.margin="5px";
});



