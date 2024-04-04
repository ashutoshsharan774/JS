// The Object type represents one of JavaScript's data types. It is 
// used to store various keyed collections and more complex entities. 
// Objects can be created using the Object() constructor or the object initializer /literal syntax.

//Declaring object using constructor
// singleton
// object.create 

// declaring symbol and using is at keys in an object
const mySymbol=Symbol("key1");

// Declaring object literal
const jsUser={
    name:"Ashutosh",
    "full name":"Ashutosh Sharan", //this key :value pair can't be accesed using dot since here we have clearly defined type of key as string
    age:21,
    // declaring mySymbol as Symbol in an object
    [mySymbol]: "myKey1",
    email:"ashu@ksfkd.com",
    isLoggedIn:false,
    lastLogInDay:["Monday","Saturday"]
}
// ways to access members of an object
//since we know key declared name is. automatically of type String
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySymbol]);//we can access symbol from an object only if we declare Suymbol in a particular way in object

// We can override values of an object member
jsUser.email="ashu@sharan890.com";
 console.log(jsUser.email);

// Can also make values of object data menbers permanent by frezing it
// Object.freeze(jsUser)
//check if now can we chamge the values of onbject data members
jsUser.email="afbuuihsdf@gmail.com"
 console.log(jsUser.email);


// *********Defining a Function*********
jsUser.greeting = function(){
    console.log("Hello jsUser wassup");
}
console.log(jsUser.greeting());

jsUser.greetingTwo=function(){
    console.log(`Hello user ,${this.name}`);
}
// this keyword basically refers to data memeber defined in object
console.log(jsUser.greetingTwo());