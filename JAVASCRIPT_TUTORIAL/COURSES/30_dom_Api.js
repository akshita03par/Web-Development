//json data ---> js object

// let jsonRes =
//  '{"fact":"On average, cats spend 2\/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.","length":129}';

// let validRes = JSON.parse(jsonRes);
// console.groupCollapsed(validRes);

// js object------> json data

// let student = {
//     name: "Akshita",
//     age:21,
//     marks:95
// };

// let jsJson = JSON.stringify(student);
// console.log(jsJson);

// api request -------------------------->
// using fetch

let url = "https://catfact.ninja/fact";

fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data1) => {
    console.log("data1 : ", data1);
    return fetch(url);
  })
  .then((response) => {
    return response.json();
  })
  .then((data2) => {
    console.log("data2 : ", data2);
  })
  .catch((e) => {
    console.log("ERROR - ", e);
  });

// using fetch with async and await ----->

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("error - ", e);
  }
}

getFacts();

// axios ------------>

let btn = document.querySelector("#factb");

btn.addEventListener("click",async()=>{
  let fact = await GetFacts();
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});

let Url = "https://catfact.ninja/fact";

async function GetFacts(){
  try{
    let res = await axios.get(Url);
    return res.data.fact;
  }catch(e){
    console.log("error - ",e);
    return "No fact found";
  }
}

GetFacts();

// dog picture api

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#dogimg");

btn2.addEventListener("click",async()=>{
   let link = await getImage();
  let img = document.querySelector("#randomimg");
  img.setAttribute("src",link);
  console.log(link);
});

async function getImage(){
  try{
    let res = await axios.get(url2);
    return res.data.message;
  }catch(e){
    console.log("error - ",e);
    return "No img found";
  }
}

getImage();

// sending headers

const url3 = "https://icanhazdadjoke.com/";

async function getJokes(){
  try{
    const config = {headers: { Accept: "application/json"}};
    let res = await axios.get(url3,config);
    console.log(res.data);
  }
  catch(e){
    console.log(e);
  }
}

getJokes();

// Axios --> updating query Strings

let url4 = "http://universities.hipolabs.com/search?name=";
let btn3 = document.querySelector("#un");

btn3.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);

  let collarr = await getColleges(country);
  show(collarr);
});

function show(collarr){
  let list = document.querySelector("#list");
  list.innerText = "";
  for(col of collarr){
    console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}


async function getColleges(country) {
  try {
    let res = await axios.get(url4 + country);
    return res.data;
  } catch (e) {
    console.log("error : ", e);
    return [];
  }
}
