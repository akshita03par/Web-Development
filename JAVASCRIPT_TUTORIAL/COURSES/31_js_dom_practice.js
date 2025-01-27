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

// nodeName----->

let element = document.querySelector("#wrapper");

element.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN") {
    console.log("span pr click kia hai" + event.target.textContent);
  }
});

// performance ----->

