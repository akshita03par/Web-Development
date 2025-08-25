//1-------------->
const promiseOne = new Promise(function(resolve,reject) {
    //Do an async task 
    // DB CALLS, network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000);
});


promiseOne.then(function(){
    console.log("Promise consumed"); 
});


//2------------------->
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000);
}).then(function(){
    console.log("Async 2 resolved");   
});


//3------------------->
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({username: "Akshita" , email: "akshita2@gmail.com"});
    },1000);
})

promiseThree.then(function(user){
    console.log(user);
});


//4--------------------->
const promiseFour = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"AkshitaParmar",password:"123par"});
        }else{
            reject("ERROR: SOMETHING WENT WRONG")
        }
     },1000);
});

promiseFour
.then((user)=>{
   console.log(user);
   return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected"));


//5---------------------->
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"123"});
        }else{
            reject("ERROR: JS WENT WRONG")
        }
     },1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
}
consumePromiseFive();

//api request------------->
async function getAllusers(){
   try {
    
     const response = await fetch("https://api.github.com/users/akshita03par");
     const data =  await response.json();
     console.log(data);
   } catch (error) {
     console.log("E:",error);
   }
}

getAllusers();

//2 
fetch("https://api.github.com/users/akshita03par")
.then((response)=>{
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((e) => console.log(e));


