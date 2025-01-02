//1 delete all occurrences of element num=2 

let arr = [1,2,3,4,5,6,2,3];
let num = 2;

for (let i=0; i <arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}

console.log(arr);

//2 find the no of digits in a number 

let number = 287152;
let count=0;

let copy = number;
while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}

console.log(count);


//3 find the sum of digits in a number 

let Number = 287152;

let sum = 0 ;

let Copy = Number;
while(Copy > 0){
    digit = Copy % 10;
    sum = sum + digit;
    Copy = Math.floor(Copy/10);
}

console.log(sum);

//4 factorial of n 

let n=6;
let factorial = 1;

for (let i =1 ; i <=n;i++){
   factorial*=i;
}

console.log(`factorial of ${n} is ${factorial}`);

//5 largest number in an array with only positive numbers 

let Arr = [2,5,10,4,2,7,1,19];
let largest = 0;

for(let i =0; i<=Arr.length;i++){
    if(largest < Arr[i]){
        largest = Arr[i];
    }
}

console.log(largest);