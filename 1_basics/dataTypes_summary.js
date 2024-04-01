// Data types are divided broadly on basis of call by value and call by reference
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// Basically these are call by value i.e whenever they are copied their copy is created and sent rather than making reference to the original location


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/



    //    ******** Memory *******
    // Stack(primitive). Heap(Non-primitive)

    let myName="Ashutosh Sharan";

    let anotherName=myName;
    anotherName="Panda";

    // Basically anotherName consists a copy of myName so any changes made in anotherName won't reflect in original myName
    // So this is example of primitive (stack) data type

    console.log(myName);
    console.log(anotherName);

    //object data type example
    // The variable userOne will be in stack memory but the componenets or member of userOne i.e email and upiId will be stored in heap memory

    let userOne={
        email: "Ashu@gmail.com",
        upiId: "Ashu@ybl"
    }
    let userTwo=userOne;
    //userTwo won't have copy of components of userOne rather it would have direct reference to the actual location of 
    // componenets/data members in heap
    userTwo.email="ash@yahoo.com";//since actual reference was made so changes made reflects in actual location(object)
    console.log(userOne.email)
    console.log(userTwo.email);
    // email changes in both the objects