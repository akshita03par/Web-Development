//

console.log("hello duniya");


// ternary operator 

let age = 21;
let Status = (age >=18) ? 'I can vote': 'No vote';

console.log(Status);

// object --------

let rectangle = {
    length : 1 ,
    breadth : 2,

    draw: function(){
        console.log('drawing rectangle');
    }
};

console.log(rectangle);
console.log(rectangle.draw()); 

// object creation -----> how ? 
//1 factory function 

function  createRectangle(len , bre) {
    return rectangle = {
        length : len , // property
        breadth : bre,
    
        draw: function(){
            console.log('drawing rectangle'); // method 
        }
    };
}

let rectangleObj1 = createRectangle(6,8);
console.log(rectangleObj1);

//2 constructor function 

function Rectangle(len ,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log("drawing rectangle");
    }
}

let RectangleObject = new Rectangle(12,5);
console.log(RectangleObject);

// dynamic nature of object 

RectangleObject.color = "yellow";
console.log(RectangleObject);

// constructor property 

// let rectangle1 = new Function(
//     'length',
//   `  this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log("drawing rectangle");
//     }`
// );


