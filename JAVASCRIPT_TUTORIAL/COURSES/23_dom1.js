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

//innerText-------->

let para = document.querySelector("p");
console.dir(para);

console.dir(para.innerText);
console.dir(para.textContent);
console.dir(para.innerHTML);



