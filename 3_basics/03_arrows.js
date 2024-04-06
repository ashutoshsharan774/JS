// The this keyword refers to the context where a piece of code, 
// such as a function's body, is supposed to run.
// Most typically, it is used in object methods, where this refers to 
// the object that the method is attached to, thus allowing the same method 
// to be reused on different objects.


const user={
    userName:"Ashutosh",
    price:999,
    //declaring a function inside an object
    welcomeMessage:function(){
        // console.log(`${this.userName},welcome to this website`);
        console.log(this);
    }
    //this keyword is used for reference to the current data member i.e 
    // in this case "this " keyword refers to properties of this object
}
user.welcomeMessage()
// suppose if I change the user name
user.userName ="Sharan"
user.welcomeMessage()

console.log(this)// output:{} since this value ko node environment ke bahar print krne pe {} is output


/*function chai(){
    let username="Ashutosh"
    console.log(this.username)//this doesn't works insdie fn it gives undefined as output
    console.log(this)//if this is printed inside a function
}
chai()*/
/*const chai= function(){ this is also a way of declaring function
    let userName="Ashutosh"
    console.log(this)
}
*/


const chai=() =>{
    let username="Ashutosh"
    console.log(this);//empty parantheses is the output
}
chai()

//****Arrow function **** **//
//An arrow function expression is a compact alternative to a 
// traditional function expression, with some semantic differences and deliberate limitations in usage

const addTwo=(num1,num2)=>{
    return num1+num2//Example of explicit return as we use return keyword
}
console.log(addTwo(3,4));

const addtwo=(num1,num2)=>num1+num2//Example of implicit return as we don't use return keyword and don't use parantheses
console.log(addTwo(5,6));

//Even in case of implicit return we need to wrap objects in () to run it
const objects1=(num1,num2)=>({username:"Ashutosh"})
console.log(objects1(3,4));