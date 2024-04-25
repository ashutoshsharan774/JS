class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
        

    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }

}

const user1=new Teacher("sir","sirjee@gmail.com","123")
user1.addCourse();

const user2=new Teacher("studenet")
user2.logMe();

console.log(user1===user2)
console.log(user1 instanceof Teacher  );