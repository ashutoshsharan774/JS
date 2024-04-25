//old ways of using getter setter 
/*In JavaScript, getter and setter functions are special methods that allow you to define custom behavior for getting and setting the values of object properties. They are used to control access to the properties of an object, enabling you to execute code when a property is read (get) or written (set).
Before JavaScript had native support for getter and setter functions, developers used various techniques to achieve similar functionality. Here are some common approaches:

Using Object.defineProperty():
The Object.defineProperty() method allows you to define a new property directly on an object or modify an existing one.
You can specify a getter and a setter function as part of the property descriptor.

var obj = {};

Object.defineProperty(obj, 'name', {
  get: function() {
    return this._name.toUpperCase();
  },
  set: function(value) {
    this._name = value.toLowerCase();
  },
  enumerable: true,
  configurable: true
});

obj.name = 'John';
console.log(obj.name); // Output: JOHN


*/
function User(email,password){
    this.email=email;
    this.password=password
}
Object.defineProperty(this,'email',{
    get:function(){//get is also a method
        return this._email.toUpperCase()
    },
    set: function(value){
        this_email=value
    }
})

Object.defineProperty(this,'password',{
    get:function(){//get is also a method
        return this._password.toUpperCase()
    },
    set: function(value){
        this_password=value
    }
})




const usr1=new User('Ashu@gmail.com','sharansir')
console.log(usr1.email);

