// In JavaScript, the prototype property is a fundamental aspect of how objects and inheritance work. Every JavaScript function 
// has a prototype property by default, which is an object that serves as a blueprint for properties and methods that will be 
// inherited by all instances created from that function.

/*Prototype Chain: Each object in JavaScript has a prototype, which may itself have a prototype, forming a chain. This chain continues until an object with a null prototype is reached.
Constructor's Prototype Property: When you create a function in JavaScript, it automatically gets a prototype property. This property points to an object that becomes the prototype of all instances created using that constructor function.
Inheritance: Objects created from a constructor function inherit properties and methods defined in the constructor's prototype.*/

function multipleBy5(num){
    return num*5
}
multipleBy5.power=2;

console.log(multipleBy5.power);
console.log(multipleBy5(5));
console.log(multipleBy5.prototype);
//By this eg we can understand that almost everything in js is an object 
//function behaves like function should but we can also make it behave like an object
//JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype and acts as the final link in this prototype chain.

function createUser(userName,score){
    this.userName=userName;
    this.score=score;
}
// In JavaScript, the this keyword is a special keyword that refers to the object that is currently executing the code. The value of this depends on how a function is called. Its behavior can vary depending on whether the function is invoked in the global scope, as a method of an object, using the new keyword, or with other functions like call(), apply(), or bind()


//Adding a method to the prototype
createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}

const user1= new createUser('Ashutosh',94);
const user2= new createUser('Sharan',89)
//here there will be an issue with increment method ,
// the problem is that increment fn doesn't have context about which
//user's score to increase

//Here this keyword comes into play, this.score gives context to the increment fn,
// 'this' ka matlab jisne abhi call kiya

user1.printMe()
//user1 mei jab createUser se value transfer krenge then
//user1 won't know about printMe and increment prototype method
// so 'new' keyword comes into play here

/*Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

"JAVASCRIPT CLASSES KE THROUGH CONSTRUCTOR FN NI DETI HAI ,NEW KEYWORD KE THROUGH DETI HAI"

******NEW KEYWORD******
In JavaScript, the new keyword is used to create instances of user-defined constructor functions. When used with a constructor function, new performs the following actions:

Creates a new empty object.
Sets the prototype of the new object to the prototype of the constructor function.
Executes the constructor function with the newly created object as the this context.
Returns the newly created object unless the constructor function explicitly returns another object.
*/