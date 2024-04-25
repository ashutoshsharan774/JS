//ES6 mei class as syntactical sugar laya gya th

class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    UpperCasify(){
        return `${this.username.toUpperCase()}`
    }
}
const userOne=new User("ashu","chai@google.com","jiosher")
console.log(userOne.encryptPassword())
console.log(userOne.UpperCasify())

//behind the scene functioning since classes are syntactical sugar
function Users(username,email,password){
    this.username=username
    this.email=email
    this.password=password

}

Users.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
Users.prototype.UpperCasify=function(){
    return `${this.username.toUpperCase()}`
}
const user1=new Users("ash","hfgk@chai.com","1234")
console.log(user1.encryptPassword());