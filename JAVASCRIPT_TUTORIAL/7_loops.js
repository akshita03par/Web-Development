// loops 
//for loop 
for (let i =1 ; i <=5 ; i++){
    console.log("Akshita Parmar");
}

// sum of 1 to 5 

let sum =0;
let n = 10;
for(let i = 0;i<=n;i++){
    sum = sum+i;
   // console.log("sum  = " , sum);
}
console.log(sum);

// while loop 
console.log("<----while loop---->");

let i = 1;
while(i<=5){
    console.log("i=",i);
    i++;
}

// do - while loop 

console.log("<---- do-while loop ---->");

let I = 20;
do{
  console.log("Akshita Parmar");
  I++;
}while(I<=10);

//for-of loop 

console.log("<---- for-of loop ---->"); // use for the string and arrays

// for(let val of strVar){

// }

let str = "AkshitaParmar";

let size = 0;
for(let val of str){ // iterator
    console.log("val = ",val);
    size++;
}

console.log("string size =", size);

// for-in loop
console.log("<---- for-in loop ---->"); // use for object 

// for(let key in objVar){}

let student = {
    name : "Akshita parmar",
    age:21,
    cgpa :7.5,
    isPass : true,
};

for (let key in student ){
    console.log("key =",key , " , value =",student[key]);
}
