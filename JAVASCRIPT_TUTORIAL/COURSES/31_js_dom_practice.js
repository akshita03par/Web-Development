const t3 = performance.now();
let myDiv = document.createElement("div");

function paraStatus(event) {
  console.log("Para - " + event.target.textContent);
}

myDiv.addEventListener("click", paraStatus);

for (let i = 1; i <= 10; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para : " + i;

  myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("this took : " + (t4 - t3) + " ms");

// nodeName----->

let element = document.querySelector("#wrapper");

element.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN") {
    console.log("span pr click kia hai" + event.target.textContent);
  }
});

// performance -----> performance.now();

// const t1 = performance.now();
// for (let i = 1; i <= 10; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para : " + i;

//   document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took : " + (t2 - t1) + " ms");


const t1 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 10; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para : " + i;

  fragment.appendChild(newElement);
}

document.body.appendChild(fragment);

const t2 = performance.now();
console.log("this took : " + (t2 - t1) + " ms");//1 reflow //1repaint



// promise ---->

let meraPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I am inside Promise")
  }, 2000);
  resolve();
});

console.log("Pehla");

// classes and export modules in js 


// closure------------->

function init() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

let a = init(); // refrences not copy
a();

