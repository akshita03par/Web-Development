const parent = document.querySelector(".parent");
console.log(parent);

console.log(parent.children[1]);

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}

parent.children[2].style.color = "orange";

// firstElementChild->
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

//parent Element-->
const dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);

//nextElementSibling->
console.log(dayOne.nextElementSibling);

//childNodes->
console.log("Nodes:" , parent.childNodes);


// create new element--------------------------------->

const div = document.createElement("div");
console.log(div);

div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title","generated title");
div.style.backgroundColor = "purple";
div.style.padding = "10px";
div.style.margin = "5px";

//div.innerText = "Akshita Parmar";

// for add text->
const addText =  document.createTextNode("Akshita Parmar");
div.appendChild(addText);

// Attachment in document -------->
document.body.appendChild(div);


// EDIT AND REMOVE DOM ==========================>

 // 1 method
function addLanguage(langName){
   const li =  document.createElement("li");
   li.innerHTML = `${langName}`;
   document.querySelector(".language")
   .appendChild(li);
}    

addLanguage("python");
addLanguage("cpp");
// addLanguage("java");


// 2 method
function addOptiLanguage(langName){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(langName));
    document.querySelector(".language").appendChild(li);
}

addOptiLanguage("java");


//EDIT---------------------------->

//1 edit
const secLang = document.querySelector("li:nth-child(3)");
console.log(secLang);
// secLang.innerHTML= "Mojo";

const newLi = document.createElement("li");
newLi.textContent = "Mojo";

secLang.replaceWith(newLi);

//2 edit

const thirdLang = document.querySelector("li:first-child");
console.log(thirdLang);

thirdLang.outerHTML = "<li>TypeScript</li>";

//REMOVE---------------------------->

const lastLang = document.querySelector("li:last-child");
console.log(lastLang);
lastLang.remove();


