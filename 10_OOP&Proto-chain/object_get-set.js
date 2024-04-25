//Object based syntax of getter and setter
const User={
    _email:'ashu@345.com',
    _passsword:'asb',

    get email(){
        return this._email.toUpperCase()
    },

    set email(password){
        this._email=value
    }
}
//new is constructor fn ,here we can use factory functions
//Object.create()
/*Factory functions are a common pattern in JavaScript for creating objects, 
especially when the object creation process involves complex logic or when 
you want to create multiple similar objects without the overhead of constructor functions and prototypes.






 */
const tea=Object.create(User);
console.log(tea.email );//email that we used with get and set 
//have now become like properties ,not methods so it doesn't care about_email it only focuses on what we have written along with 
//get and set (i.e email)