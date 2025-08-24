// document.getElementById("owl").onclick = function(){
//     alert("owl clicked");
// };

//attachEvent()
//jQuery - on

//interview ke liye padna hai----->

// type, timestamp,defaultPrevented,target , toElement , srcElement , currentTarget,
// position related - > clientX, clientY, screenX , screenY
// altKey , ctrlKey , shiftKey , keyCode 


// document.getElementById("images").addEventListener("click",function(e){
//     console.log("clicked inside the ul");
// },true);

document.getElementById("images").addEventListener("click",function(e){
    console.log("clicked inside the ul");
},false);

document.getElementById("owl").addEventListener("click",function(e){
    console.log("owl clicked");
  //  e.stopPropagation();
},false);

//event propagation
// bubbling -> inside to outside move (false) 
//capturing -> outside to inside move (true)

document.getElementById("google").addEventListener("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked");
},false);


//when click in image remove image ---->

document.querySelector("#images").addEventListener("click",function(e){
     console.log(e.target.tagName);
     if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
     }
     
    // removeIt.parentNode.removeChild(removeIt);

},false);




