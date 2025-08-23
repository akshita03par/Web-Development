
function countVowels(str){
    let count =0;
    for(let char of str){
      if(char==="a" || char ==="e"|| char ==="i" || char ==="o" || char ==="u"){
         count++;
      }
    }
    console.log(count);
    return count;
}

countVowels("akshita");


// arrow function --->

const arrowCountVowels=(str)=>{
     let count =0;
     for(let char of str){
        if(char==="a" || char ==="e"|| char ==="i" || char ==="o" || char ==="u"){
            count++;
        }
     }
     console.log(count);
    return count;
}

countVowels("akshita parmar");

