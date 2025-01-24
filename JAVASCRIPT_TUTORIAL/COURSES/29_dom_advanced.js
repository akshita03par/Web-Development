// call stack 

function hello(){
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

function one(){
    return 1;
}

function two(){
    return one() + one(); //2
}

function three(){
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

 setTimeout(()=>{ // -----> browser settime execute karwata hai 
    console.log("Akshita Parmar"); //2---> after 2s 
 },2000); //asynchrounous nature

 console.log("hello..."); // 1

// callback hell ----> callback nesting 

let h1 = document.querySelector("h1");

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
    
}

changeColor("purple",1000,()=>{
    changeColor("Orange",1000,()=>{
       changeColor("green",1000,()=>{
        changeColor("blue",1000);
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

