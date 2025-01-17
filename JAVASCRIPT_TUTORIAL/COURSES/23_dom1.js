// getElementById();

let image = document.getElementById("mainImg");

console.dir(image);

//getElementsByClassName();

let smallImages = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImages.length; i++){
    console.log(smallImages[i].src);
}

// change image 

// for(let i=0; i<smallImages.length; i++){
//     smallImages[i].src = "./Images/spider man.jpg";
//     console.log(`value of image no.${i} is changed`);
// }

//getElementByTagName();

let tagname = document.getElementsByTagName("p");
console.log(tagname);

//query Selectors ----------->

console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div div a"));

console.dir(document.querySelectorAll("div a"));


//using properties & Method ------------>

//innerText, textContent , innerHTML -------->

let para = document.querySelector("p");
console.dir(para);

console.dir(para.innerText);
console.dir(para.textContent);
console.dir(para.innerHTML);

let heading = document.querySelector("h1");
console.dir(heading); //h1

// heading.innerHTML= `<u> ${heading.innerHTML}</u>`;
// console.dir(heading.innerHTML);

// Manipulating Attributes ------>

let img = document.querySelector("img");
console.dir(img);

console.dir(img.getAttribute("id")); // get id 

// console.dir(img.setAttribute("id","spidermanImg")); //change id name 

// manipulating style

// 1 style property 

let Img = document.querySelector("img");
 console.dir(Img.style);


// console.dir(heading.style.color = "purple"); // change color 


// let links = document.querySelectorAll(".box a");

// for(let i = 0; i < links.length; i++){
//     links[i].style.color = "purple";
// }

// for(link of links){
//     link.style.color = "green";
// }

// 2 classlist  

// let Img = document.querySelector("img");
console.dir(Img.classList); //2

console.dir(heading.classList); //0

// add 
let Heading = document.querySelector("h1");
console.dir(Heading);

Heading.classList.add("spider-man");
console.log(Heading.classList); //1 

// remove 

// console.dir(Heading.remove("spider-man"));
// console.log(Heading.classList);

// 3 contains 

console.dir(Heading.classList.contains("spider-man"));
console.dir(Heading.classList); //1 

// 4 toggle 

console.dir(Heading.classList.toggle("spider-man"));
console.dir(Heading.classList); // change style to original  means it remove and return false 

// Navigation 

//parentElement

let h3 = document.querySelector("h3");
console.log(h3.parentElement);

//children 

let box = document.querySelector(".box");
console.dir(box.children); //h3 ,ul

//childElementCount 

console.dir(box.childElementCount); //2

// previousElementSibling 

console.dir(box.previousElementSibling); //p

//nextElementSibling 

console.dir(box.nextElementSibling); //div 


//Adding Elements--------------->

// //createElement 

// let newP = document.createElement("p");

// console.dir(newP);

// newP.innerText = "Hi, I am a new para";
// console.dir(newP);

// //appendChild(element)-----------

// let body = document.querySelector("body");
// console.dir(body.appendChild(newP)); // add in last html page


// console.dir(box.appendChild(newP)); //  add in last of publication info box


// // create button
// let btn = document.createElement("button");
// console.dir(btn);

// btn.innerText = " click me!";
// console.dir(box.appendChild(btn));

// //append(element) -->add last--------------

// console.dir(newP.append(" .This is new text- "));
// console.dir(newP.append(btn));
// console.dir(newP.append(" do not click this button"));

//prepend(element) -->add first

// console.dir(box.prepend(newP));

//insertAdjacent(where, element )

let btn = document.createElement("button");

btn.innerHTML = "NEW BUTTON!!!";
console.dir(btn.innerHTML);

let p = document.querySelector("p");
console.dir(p);

p.insertAdjacentElement("beforebegin",btn); // before para 
p.insertAdjacentElement("afterbegin",btn); // before para in same line 

p.insertAdjacentElement("beforeend",btn); 
p.insertAdjacentElement("afterend",btn);



