// object literals

const student = {
    name : "Akshita",
    age :21,
    marks:94.4
};

console.log(student);

// THREAD/TWITTER POST---------

// CREATE an object for the properties of thread/twitter post which includes 
//username , content , likes , reposts , tags 

const post = {
    username: "@akshitaparmar",
    content : "this is my #firstpost",
    likes:150,
    reposts :5,
    tags :["@akshita","@likes","@follow"]
};

console.log(post);

// GET VALUES 

console.log(post.username);
console.log(post["content"]);
console.log(post.tags);

let prop = "reposts";

console.log(post[prop]); //5


// conversion in get values 

const obj ={
     1:"a",
     2:"b",
     true:"c",
     null : "d",
     undefined:"e"
};

console.log(obj); // converting into string 
console.log(obj[null]); //d
console.log(obj.true); //c

//Add and Update values 

const Student ={
    name : "Akshita",
    age :21,
    marks:94.4,
    city :"Indore"
};

console.log(Student);
console.log(Student.city); // Indore 

console.log(Student.city="Mumbai"); // update
console.log(Student.city); // Mumbai 

console.log(Student.gender="Female"); // add
console.log(Student.gender); //female 

console.log(Student);

console.log(Student.marks=[99,98,89]);
console.log(Student);

console.log(delete Student.marks);
console.log(Student);


// Object of Objects

const classInfo = {
    Akshita :{
        grade : "O",
        city : "Delhi"
    },
    Aman : {
         grade : "A+",
        city : "Pune"
    },
    karan : {
         grade : "A+",
        city : "Mumbai"
    }
};

console.log(classInfo);
console.log(classInfo.Akshita.city); // delhi

console.log(classInfo.Akshita.city="Indore");
console.log(classInfo.Akshita);  


// ARRAY OF OBJECTS 

const ClassInfo = [
    {
        name :"akshita",
        grade : "O",
        city : "Delhi"
    },
    {
        name :"aman",
        grade : "O",
        city : "Delhi"
    },
    {
        name :"karan",
        grade : "O",
        city : "Mumbai"
    }
];

console.log(ClassInfo);
console.log(ClassInfo[0]);
console.log(ClassInfo[1]);
console.log(ClassInfo[2]);

console.log(ClassInfo[1].name); // aman 

console.log(ClassInfo[0].gender ="female ");
console.log(ClassInfo[0]);

// Math Object 

console.log("Math Object -------------");

// properties
console.log(Math.PI) // 3.1415926
console.log(Math.E) //  2.718281

//Methods 

//1 Math.abs (five only postive value)

console.log("Math.abs");
console.log(Math.abs(12)) // 12
console.log(Math.abs(-12))  // 12 

//2 Math.pow(2,3)

console.log("Math.pow------");
console.log(Math.pow(2,3))  //8

// 3 Math.floor  (round off to nearest smallest number)
console.log("Math.floor------");
console.log(Math.floor(2.56777)) // 2

// 4 Math.ceil( round off to nearest greater number)
console.log("Math.ceil--------");
console.log(Math.ceil(5.123)) // 6 

// 5 Math.random()
console.log("Math.random--------");
console.log(Math.random());

// RANDOM INTEGERS 

// step1
 let num = Math.random();
 console.log(num );

 //step2
 num = num * 10 ;
 console.log(num );

 //step3 
 num = Math.floor(num);
 console.log(num );


 // step4
 num = num+1;
 console.log(num );

// all steps in one line 

console.log("Random number between 1 to 10------");
let random = Math.floor(Math.random()*10 )+1;
console.log(random);

// practice 

// 1 generate a random number between 1 to 100 

console.log("Random number between 1 to 100------");
let Random = Math.floor(Math.random()*100)+1;
console.log(Random);

// 2 generate a random number betwwen 1 to 5

console.log("Random number between 1 to 5------");
let rAndom = Math.floor(Math.random()*5)+1;
console.log(rAndom);


