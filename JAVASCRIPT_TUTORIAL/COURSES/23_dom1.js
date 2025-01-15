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




