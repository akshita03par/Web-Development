//

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

// remove shift company
companies.shift();
console.log(companies);

//move uber and add ola in its place 
companies.splice(1,1,"Ola");
console.log(companies);

// add amozon at the end 
companies.push("Amazon");
console.log(companies);

