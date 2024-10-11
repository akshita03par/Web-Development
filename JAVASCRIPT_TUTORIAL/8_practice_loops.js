// print all even number from 0 to 100 

let num;
for(let num = 0 ; num  <=100; num ++){
    if(num%2==0){    // num%2 !==0 ----> odd number
        console.log(num);
    }
}

// create a game number and ask from the user 

let gameNum = 26 ;

let userNum = prompt("Guess the game number : ");
console.log(userNum);

while(userNum != gameNum){
    userNum = prompt("you enter wrong number,please Guess the another number : ");
}

console.log("congratulations,you entered the right number");