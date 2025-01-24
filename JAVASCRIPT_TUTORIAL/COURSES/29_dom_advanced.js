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

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

changeColor("purple", 1000, () => {
  changeColor("Orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("blue", 1000);
    });
  });
});

// setTimeout(()=>{
//     h1.style.color = "purple";
// },1000);

// setTimeout(()=>{
//     h1.style.color = "Orange";
// },2000);

// Promises----------->

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
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("success: data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}

// savetoDb("akshita parmar");


// then() & catch()----->

// let request = savetoDb("Akshita Parmar"); // req = promise object

// request.then(() =>{
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// });

savetoDb("Akshita Parmar")
 .then(() =>{
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was rejected");
});

