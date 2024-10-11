// average 

let marks = [85,97,44,37,76,60];
console.log(marks);

let sum = 0;
for(let val of marks ){
    sum = sum+val;
}
let avg = sum / marks.length;
console.log(`Avrage of marks of the entire class is ${avg}`);

// 10% offer items 

let items =[250,645,300,900,50];
console.log(items);

let i =0;

// for of

// for(let val of items){
//     console.log(`value at index ${i}=${val}`);
//     let offer = val / 10;
//     items[i] = items[i]-offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// for loop 

for(let i = 0;i <items.length;i++){
    let offer = items[i]/10;
    items[i]=items[i]-offer;
}
console.log(items);

