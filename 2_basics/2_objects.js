// Singleton object declaration
// const tinderUser=new Object()

// Non Singleton object declaration
const tinderUser={}

tinderUser.name="Jake"
tinderUser.age=24
tinderUser.Id="123abc"
tinderUser.IsLoggedIn=false
// console.log(tinderUser);

// Declaring an object within another object
const regularUser={
    email: "some@gmail.com",
    fullName:{
        userFullName:{
            firstNme:"Ashutosh",
            lastName:"Sharan"
        }
    }
}

// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstNme)

// Merging objects
const obj1={1:"a",2:"b"}
const obj2={3:"A",4:"B"}
// const obj3={obj1,obj2} //same problem arises as like in array that objects will be merged but they will be merged as objects

// const obj3 =Object.assign({},obj1,obj2)//{} this acts as target and rest obj as source 
// so basically assign is used to merge source in target and return a modified object
// refer to object.assign mdn

// Similar to what we did in array using ***spread operator*** ,the same goes for object
const obj3={...obj1,...obj2}
// saari values ko spread kar diya and combined in form of object
console.log(obj3);
// 

// Creating objects in an array
users=[
    id={
        email:"Ashu@4983u9.com",
        isLoggedIn:false,
        password:"dhfshi;doas"
    }
   
]

console.log(users[0].email);


// What if we want all keys or all values of an obejct
console.log(Object.keys(tinderUser));//returns all keys in terms of array
console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));return array[arr[key:value]] 

// To confirm if object has a value or not
console.log(tinderUser.hasOwnProperty('IsLoggedIn'))


// *********** Destructuring Of an Object***********//
const course={
    courseName:"Learn Js",
    price:"999",
     courseInstructor:"Ashutosh"
}
    
// Suppose if we want to extract courseInstructor
// const {courseInstructor}=course
// if we want to just call instructor
const {courseInstructor:Instructor}=course //destructuring an object
console.log(Instructor);

//Json structure(basically api from backend comes in json structure)
// JSON (JavaScript Object Notation) is a text-based, human-readable data interchange format 
// used to exchange data between web clients and web servers. 
// The format defines a set of structuring rules for the representation of structured data.
// {
//     "name":"Ashutosh",
//     "coursename":"Js lectures"
//     "price":"free"
// }