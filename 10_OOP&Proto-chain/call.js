function setUserName(username){
    //complex DB calls
    this.username=username;
    console.log("called");
}

function createUser(username,email,password){
    setUserName.call(this,username)
    //In this case bs reference gaya h username ka call ni hua ha
    //this.username=username
    //.call lagane se call toh hoga setUSernmae fn but 
    //but call hote hi uska execution context call stack se nikal jyega 
    //toh username variable bhi hat jyega therefore in 
    //fn setUserName this keyword us context ka ni createUser ka this dena hoga
    //syntax same rhega but createUser wala this use hoga
    this.email=email;
    this.password=password;
}

const chai=new createUser("chai","chai@345.com","ashubhaiya");
console.log(chai);

/*In JavaScript, the .call() method is used to invoke a function with a specified this value and arguments provided individually. It allows you to explicitly set the the context (this value) for a function invocation, regardless of how it's defined.  
var person = {
  name: 'John',
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

var anotherPerson = {
  name: 'Alice'
};

// Using .call() to invoke the greet function with 'anotherPerson' as the context
person.greet.call(anotherPerson); // Output: Hello, my name is Alice


We have an object person with a greet method.
We also have another object anotherPerson with a name property.
By using .call(anotherPerson), we're invoking the greet method of person, but within the context of anotherPerson. As a result, the output reflects the name property of anotherPerson.


*/

