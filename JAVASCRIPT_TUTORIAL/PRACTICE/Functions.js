// function with object 

function calCartPrice(...num1){ // rest
     return num1;
}

console.log(calCartPrice(200,300,400));

const user = {
    userName : "Akshita",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price} `);
}

handleObject(user);




