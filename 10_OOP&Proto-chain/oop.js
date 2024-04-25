const user={
    username:"Ashutosh",
    loginCount:4,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        console.log(`Username: ${this.username}`);
        //In JavaScript, the this keyword refers to the current execution context, typically the object that is currently being operated on or the context in which a function is called. 
        console.log(this);//this gives the current context
    }
}//In js this object literal is the base unit as classes are in cpp or Java


// console.log(user.loginCount);
// console.log(user.getUserDetails());

console.log(this);
//when we do console.log(this) in browser we will get window object which is global object but 
//here in this case we get{} in node environmenet

//*****Constructor function******/

// const promiseOnec=new Promise()
// const date=new Date()

/*// Constructor function for creating a Person object
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating an instance of Person using the 'new' keyword
var person1 = new Person('John', 30);
var person2 = new Person('Alice', 25);

console.log(person1.name); // Output: John
console.log(person2.age); // Output: 25

Person is the constructor function.
It accepts name and age as parameters and assigns them to the respective properties (this.name and this.age) of the newly created object.
Instances of the Person object (person1 and person2) are created using the new keyword.
Each instance has its own set of properties (name and age) that were passed during instantiation.

*/

function User(name,age,loggedInCount){
    this.name=name;
    this.age=age;
    this.loggedInCount=loggedInCount
}

//creating instances of this function using new keywrod
let user1=new User('Ashu',21,4)
// let user2=new User('Sharan',20,8)
let user2=new User();
user2.name='Hero';
user2.age=21;
user2.loggedInCount=5;
console.log(user2.name);

console.log(user1.name);


console.log(user2);

console.log(user2.constructor)//constructor fn is a reference to iteslf
//instance of---> mdn web docs
