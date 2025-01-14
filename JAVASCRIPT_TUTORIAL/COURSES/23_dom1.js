// getElementById();

let image = document.getElementById("mainImg");

console.dir(image);

//getElementsByClassName();

let smallImages = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImages.length; i++){
    console.log(smallImages[i].src);
}

// change image 

// for(let i=0; i<smallImages.length; i++){
//     smallImages[i].src = "./Images/spider man.jpg";
//     console.log(`value of image no.${i} is changed`);
// }

//getElementByTagName();

let tagname = document.getElementsByTagName("p");
console.log(tagname);

//query Selectors ----------->


