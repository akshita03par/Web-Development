// call stack

function hello() {
  console.log("inside hello");
  console.log("hello");
}

function demo() {
  console.log("calling hello function");
  hello();
}

console.log("calling demo function");
demo();
console.log("done");

// visualizing the call stack ---->

function one() {
  return 1;
}

function two() {
  return one() + one(); //2
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three(); //3

// js is single threaded ------------>

let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a + b); // synchrounous nature

setTimeout(() => {
  // -----> browser settime execute karwata hai
  console.log("Akshita Parmar"); //2---> after 2s
}, 2000); //asynchrounous nature

console.log("hello..."); // 1

// callback hell ----> callback nesting

let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("purple", 1000, () => {
//   changeColor("Orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("blue", 1000);
//     });
//   });
// });

console.log("---------------------------------");

// promises apply ----->

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

//  let requestPromise = changeColor("red",1000);
//  console.log(requestPromise);

changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color was completed");
    return changeColor("green", 2000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("blue", 3000);
  })
  .then(() => {
    console.log("blue color was completed");
  });

// setTimeout(()=>{
//     h1.style.color = "purple";
// },1000);

// setTimeout(()=>{
//     h1.style.color = "Orange";
// },2000);

// Promises-------------------------------------------------------------->

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Akshita Parmar",
//   () => {
//     console.log("success: your data was saved ");
//     savetoDb(
//       "hello World",
//       () => {
//         console.log("sucess2: data2 saved");
//         savetoDb(
//           "Akshita",
//           () => {
//             console.log("sucess3: data3 saved");
//           },
//           () => {
//             console.log("failure3: weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure: weak connection,data not saved");
//   }
// );

// refactoring with promise ------>

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}

// savetoDb("akshita parmar");

// then() & catch()------------------------------------------->

// let request = savetoDb("Akshita Parmar"); // req = promise object

// request.then(() =>{
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// });

// savetoDb("Akshita Parmar")
//  .then(() =>{
//     console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// });

// chaining promises --> improved version --------------------->

savetoDb("Akshita Parmar")
  .then(() => {
    console.log("data1 saved");
    return savetoDb("hello world");
  })
  .then(() => {
    console.log("data2 saved");
    return savetoDb("Akshita");
  })
  .then(() => {
    console.log("data3 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });

// promises are rejectes and resolved eith some data (valid resilts or errors)---->

savetoDb("Akshita Parmar")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise:", result);
    return savetoDb("hello world");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise:", result);
    return savetoDb("Akshita");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise:", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise:", error);
  });

// Async function ------->

async function greet() {
  //throw "some random error";
  return "hello";
}

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result was : ", result);
  })
  .catch((error) => {
    console.log("promise was rejected with error:", error);
  });

//  let demo =  async ()=>{
//   return 5;
// }

// demo();

// Await keyword -------->

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log("num :",num);
      resolve();
    }, 1000);
  });
}

async function Demo() {
  await getNum();
  await getNum();
  await getNum();
 
}

 Demo();


 // change color with async function ---->

 h2 = document.querySelector("h2");

 function ChangeColor(color,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      

      h2.style.color = color;
      console.log(`color changed to : ${color}!`);
      resolve("color chnaged!");
    },delay);
  });
 }

 async function Demochange(){
   await ChangeColor("brown",1000);
   await ChangeColor("pink",1000);
   await ChangeColor("violet",1000);
   await ChangeColor("purple",1000);


 }

 Demochange();


