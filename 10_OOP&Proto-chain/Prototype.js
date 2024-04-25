//Lets know about prototypes in detail 
let myName="Ashutosh      "
//Instead of using a trim fn again and again I need that by creating one function I should be able to find true length of any string
// console.log(myName.trim().length);
//So we need a method called trueLength not property



let myHeroes=["Superman","herohiralal","thor"]

let heropower={
    thor:"hammer",
    herohiralal:"hira",
    Superman:"laserbeam",

    getSupermanPower: function(){
        console.log(`Superman's power is ${this.Superman}`);
    }
}
//Array,string,func all of them has to pas through object , so what if we 
//add prototype in object only so all fns ,array,string will have same methods and properties
//So what we did is that we accesed highest level in heirarchy that is object and added
//property in it so automatically that property is added in all other fns,array,string etc.


Object.prototype.ashu=function(){
    console.log(`ashu is present in all objects`);
}

heropower.ashu()
myHeroes.ashu()

/*In JavaScript, __proto__ (double underscore proto double underscore) is a
 non-standard property that is used for accessing an object's prototype
 In modern JavaScript development, it's generally recommended to avoid direct manipulation of 
 __proto__ and instead use the Object.getPrototypeOf() and Object.setPrototypeOf() methods 
 for better code readability and compatibility.*/

 // inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

//solved our issue that we discussed on top by adding truelength property in string data type
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()//this means jisne call kra uska context or reference mil jyega
"iceTea".trueLength()


 