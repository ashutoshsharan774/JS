//How to create a promise

/*In JavaScript, the .then() method is used with Promises to handle asynchronous operations and their eventual results or errors. When a Promise is resolved (successfully fulfilled) or rejected (encountered an error), the .then() method allows you to specify what to do with the result or error once it becomes available.*/

const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //like DB calls,cryptography,network call etc
    //here we are gonna use setTimeout function
    setTimeout(function(){
       console.log('Async task is complete'); 
       resolve()//resolve se connect krna hoga then ko,resolve is a method

    },1000)
})//function is passed as a parameter 

//since we have created promise we need to consume it also
promiseOne.then(function(){
    console.log("Promise consumed");
})//.then has connection with resolve,we get a callback fn in then as parameter

//another way of creating promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("async 2 resolved")
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})//resolve ke inside jo bhi parameter we pass we get that in then method


const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"ashutosh", password:"ashu"})
        }
        else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})
//what if I want to recieve only username and not the entire object mentioned in resolve method

promise4.then((user)=>{
    console.log(user);
    return user.username//instead of storing then method in a variable we can use chaining of then

})
.then(function(myUserName){
    console.log(myUserName);//whatever my previous then would return this then will recieve
    
})//since we are dealing with error as well so use catch

.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("The promise is either resolved or rejected"))

// The .finally() method in JavaScript is used with Promises to specify a callback function that will be executed regardless of whether the Promise is fulfilled (resolved) or rejected. It allows you to run cleanup logic or perform actions that need to be done regardless of the outcome of the Promise.

// The .finally() method takes a single callback function as its argument, which will be executed when the Promise settles (i.e., when it is either resolved or rejected).


const PromiseFive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({username:"ashu",password:"49032"})
        }
        else{
            reject("ERROR: Js went wrong ashu")
        }
    },1000)
})
//using asycn_await instead of .then, waits till work is done then proceeds else throws error,the only problem that lies in using async aeait that it can't handle error directly so we need to wrap whole in try catch block
async function consumePromiseFive(){
    try{
        const response= await PromiseFive
    console.log(response);//promisefive is an eventual completion object so need ot store in response
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()
/*async Function:
The async keyword is used to define a function as asynchronous. An async function returns a Promise, which resolves with the return value of the function or rejects with an error thrown from within the function.
Inside an async function, you can use the await keyword to pause the execution of the function until a Promise is settled (resolved or rejected).
await Operator:
The await keyword can only be used inside an async function. It is followed by a Promise, and it pauses the execution of the async function until the Promise is settled.
When used with a Promise, await returns the resolved value of the Promise. If the Promise is rejected, an error is thrown, which can be caught using a try-catch block.*/

/*async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data =await repsonse.json()//it takes time to get converted in json so use await here also
        console.log(data);
    }
    catch(error){
        console.log("ERROR: There is an error")
    }
}
getAllUsers()*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((repsonse)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))


