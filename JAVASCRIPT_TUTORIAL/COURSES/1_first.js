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

// strings -----------------------------

let name = 'Akshita Parmar';
console.log(name);
console.log(typeof(name));

// string Indices ------------------

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

console.log(name.length); //14

console.log(name.length-4); //10

console.log(typeof(name.length));  //number

console.log(name[name.length-1]);  //r

console.log(name[name.length-5]);  //a

//concatenation 

console.log("Akshita"+7); 

let firstName = "Akshita";
let lastName = "Parmar";

let fullName = firstName + " " +lastName;
console.log(fullName);

