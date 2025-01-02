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

// WHILE LOOP 

console.log("while loop:")
// let i =1;
// while(i <=5){
//     console.log(i);
//     i++;
// }

console.log(" backward while loop:")
let i =5;
while(i >=1){
    console.log(i);
    i--;
}


// favourite movie game 

let favMovie = "avatar" ;

let guess = prompt(" Guess my favourite movie!");

while((guess!=favMovie) ){
    if((guess== "quit")){
        console.log("you quit!");
        break;
    }
    guess = prompt("Wrong guess.Please try again");
}

if(guess==favMovie){
    console.log("congrats!!!");
}

// BREAK

let j=1;
while(j<=5){
    if(j==3){
        break;
    }
    console.log(j); // 1,2
    j++;
}

console.log("we used break at 3");


// LOOPS WITH ARRAY 

 let fruits = ["mango","apple","banana","litchi","orange"];
fruits.push("pineapple");
 for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
 }


//NESTED LOOP  WITH ARRAY 

let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

for(let i=0;i<heroes.length;i++){
    console.log(i,heroes[i],heroes[i].length);
    for(let j=0; j<heroes[i].length;j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}

let student =[["Akshita",95],["shradha",96],["karan",100]];

for(let i=0; i<student.length;i++){
    console.log(`info of student #${i+1}`);
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}

// for of loop 

let Fruits = ["mango","apple","banana","litchi","orange"];
for(fruit of Fruits){
    console.log(fruit);
}

for(char of "AkshitaParmar"){
    console.log(char);
}

// Nested for of loop

let Heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

for(list of Heroes){
    for(hero of list){
        console.log(hero);
    }
}

