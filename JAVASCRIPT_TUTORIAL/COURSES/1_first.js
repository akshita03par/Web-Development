//variables----------

let age = 21;
console.log(typeof (age) );

// operations ---------

let a =2 ;
let b=5;

console.log(a+b); //sum
console.log(a-b);//diff
console.log(a*b); //mul
console.log(a/b); //div
console.log(a%b); //modulo
console.log(a**b); //exponentiation


//NaN (not a number)-----------

console.log(0/0);
console.log(NaN-1);
console.log(typeof(NaN));

//opeartor precendence --> () ,, ** ,, *,/,%  ,,+ ,-

console.log((2+1)*3 ); // 9

console.log((5+2)/7+1*2 ); // 3

console.log((3/1+2**2 )); // 7

// const ------------------
const year = 2025;
//year=year+1;
//console.log(year); // error 

// practice -------------------

let age1 = 23;
age1 +2 ; // no updation 
console.log(age1); //23

age1 = age1+2 ;
console.log(age1);//25

// Unary Oprators--------------------

let x =34;
console.log(x) ; //34
 
// increment 
console.log(x++) //34

console.log(++x) //36

//decrement 

console.log(x--) //36

console.log(--x) // 34

