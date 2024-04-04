 

 function saymyname(){
    const name="Ashutosh"
    console.log(Array.of(name))
 }
//  saymyname()//saymyname is reference of function and () is execution
 // function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username="sammy"){//if argument is not passed we can give default value to username
    if(!username){//username===undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))


// ********functions-part 2**********//
// For eg if we are working on project related to shopping cart so in such cases we don't know about 
// the number of arguments (because cart mei aur kya add honge wo fixed ni hota)

function calculateCartPrice(val1,val2,...num1){//...Operator is known as rest as well as spread operator
    // In this case it is known as rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500,567,984))
// 200 is passed to val1, 400 is passed to val2,rest of the numbers are passed to ...num1

// Objects and functions
const user={
    userName:"Ashutosh",
    price:299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
// handleObject(user)
// Another way to pass object in function
handleObject({
    userName:"AshSharan",
    price:499
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));