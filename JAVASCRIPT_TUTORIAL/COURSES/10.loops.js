//FOR LOOP 

for(let i =1 ;i <=5;i++){
    console.log(i);
}

for(let i=5;i>=1;i--){
    console.log(i);
}

// print odd number 1to 15
console.log("Odd numbers")
for(let i=1;i<=15;i=i+2){
   console.log(i);
}

// even number
console.log("Even numbers");
for(let i=2;i<=10;i=i+2){
    console.log(i);
}


// multiplication of 5 
console.log("multiplication of 5 ");
for(let i =5 ;i<=50;i=i+5){
    console.log(i);
}

// multiplication of any number

let n = prompt("write your number : ");
n = parseInt(n); // convert into int

console.log("multiplication of ",n);
for(let i = n ; i<=n*10 ; i = i+n){
    console.log(i);
}

// nested loop

for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}

