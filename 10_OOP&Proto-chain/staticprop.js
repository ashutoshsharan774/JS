class User{
    constructor(userName){
        this.userName=userName
    }
    logMe(){
        console.log(`UserName : ${this.userName}`)
    }

    static createId(){
        return `123`
    }
}

// const ashu=new User("Ashutosh")
// const ash=ashu.createId()
// console.log(ash)

console.log(User.createId())
//class se directly access kr skte rather than on instances of class

/*In JavaScript, the static keyword is used in classes to define methods or properties that are associated with the class itself,
 rather than with instances of the class. This means that static methods and properties are accessed directly on the class, rather than on instances of the class.


 */
//Inheritance: Subclasses can also inherit static methods and properties from their parent classes.

class Teacher extends User{
    constructor(username,email){
        super(username)// Calls the constructor of the superclass with the 'username' parameter
        this.email=email
    }

}
const iphone=new Teacher("iphone","i@phone.com");
console.log(iphone)
iphone.logMe()
Teacher.createId()
