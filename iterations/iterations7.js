const myNum=[1,2,3,4,5,6,7,8,9,10]
// The map() method of Array instances creates a new array populated 
// with the results of calling a provided function on every element in the calling array.

// const newNums=myNum.map( (nums)=>nums+10)
//const newNums=myNum.map((nums)=>{return nums+10})

//Concept of Chanining(can use more than one method one after another)
const newNums=myNum
    .map((num)=>num*10)
    .map((num)=>num+1)
    .filter((num)=> num>=40)

// console.log(newNums)


//REDUCE Method (for more info go to mdn)
const arr=[1,2,3,4]

const initialValue=0
// const myTotal= arr.reduce(function (accumulator,currval){
//     console.log(`accumulator: ${accumulator} and curval: ${currval}`);
//     return accumulator+currval
// },initialValue)
//currval mei aray ka present elements hota ha
//accumulator mei jo value return hua h wo hota ha

const myTotal=arr.reduce((acc,curval)=>acc+curval,initialVal)




//Here we have provided initial value
/*The first time that the callback is run there is no "return value of the previous calculation". 
If supplied, an initial value may be used in its place. Otherwise the array
 element at index 0 is used as the initial value and iteration starts from the next element 
 (index 1 instead of index 0).*/

 console.log(myTotal)


 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);