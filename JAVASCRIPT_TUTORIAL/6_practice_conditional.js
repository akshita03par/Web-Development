//alert("hello"); // one time show 

// let name = prompt("hello");
// console.log(name);  // take input by user 


let number = prompt("Enter a value");
console.log(number);

if(number%5===0){
    console.log(number,"is divisible by 5");
}else{
    console.log(number,"is not divisible by 5");
}

// students grade system ---->

// let score = prompt("Enter a score(0-100)") ;

// if(score >=80 && score <=100){
//     console.log("A grade");
// }else if (score >=70 && score <=79){
//     console.log("B grade");
// }else if (score >=60 && score <=69){
//     console.log("C grade");
// }else if (score >=50 && score <=59){
//     console.log("D grade");
// }else if (score >=0 && score <=49){
//     console.log("F grade");
// }

let score = 94;
let grade ;

if(score >=90 && score <=100){
    grade = "O";
}else if (score >=80 && score <=89){
    grade="A";
}else if (score >=70 && score <=79){
     grade="B";
}else if (score >=60 && score <=69){
      grade="C";
}else if (score >=50 && score <=59){
       grade="D";
}else if (score >=0 && score <=49){
       grade="F";
}
   
console.log("according to your scores, you grade was ",grade);
