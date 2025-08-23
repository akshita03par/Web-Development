//1 ) ----- >arthmetic operator 

let a = 5;
let b = 2;
let c = "5";
let d = 5;

console.log("a  = " , a  );
console.log(" b = " , b );
console.log("a + b = " , a + b );
console.log("a - b = " , a - b );
console.log("a * b = " , a * b );
console.log("a / b = " , a / b );
console.log("a % b = " , a % b ); // modulus
console.log("a ** b = " , a ** b ); // exponentiation 

//unary opreator 
         
// a = 5;
 //a ++ ;//a = a+1 ; //6   (postincrement) baad mai value change karta hai 
console.log("a++ = " , a++); //5

console.log("a  = " , a  );//6

//++a ; // (preincrement) pahale value change hogi 

console.log("++a = " ,++a); //7
console.log("a  = " , a  );//7


// 2) -------->Assignment operator 

console.log("Assignment operator--------->");

let x = 2 ;
let y = 4 ;  // = operator 

x += 4 ; // x = x + 4 ; 
console.log("x = " , x); //6

y **= 4 ; // y = y ** 4 
console.log("x = ", y) // 256

// Comparison operator----
console.log("Comparison operator--------->");

console.log("a==b",a==b);
console.log("a==b",a!=b);
console.log("a==c",c == d );

// ===  strict version it check in deeply 

console.log("a==c", c === d );
// <,>,<=,>=,!==

// logical operator
console.log("logical operator-------->");

let a1 = 6;
let b1 = 5;

// logical AND
let cond1 = a1 > b1 ; //true
let cond2 = a1 === 6; // true     (b0th are true)
console.log(" cond1 && cond2 = ", cond1 && cond2 ); //true 

//logical OR (any one or both true )

console.log(" cond1 || cond2 = ", a1 < b1 || a1 === 6 );

// logical NOT (opposite)

console.log("!(a1<b1) = ",!(a1 < b1));