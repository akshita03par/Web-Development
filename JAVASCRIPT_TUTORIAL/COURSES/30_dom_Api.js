//json data ---> js object

let jsonRes = 
 '{"fact":"On average, cats spend 2\/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.","length":129}';

let validRes = JSON.parse(jsonRes);
console.groupCollapsed(validRes);

// js object------> json data 

let student = {
    name: "Akshita",
    age:21,
    marks:95
};

let jsJson = JSON.stringify(student);
console.log(jsJson);

// testing API requests ----->


