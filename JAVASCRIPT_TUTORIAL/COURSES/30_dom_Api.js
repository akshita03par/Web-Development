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

