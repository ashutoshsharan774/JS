/*const score=400;//automatically js understood that its number
//Explicitly we have to initialize score with number so we r gonna use object->number

const balance=new Number(100);
console.log(score);
console.log(balance);//specially defines that balance is a number

// We can convert into string both the ways
// console.log(balance.toString());
console.log(balance.toString().length);
const bal=String(balance)
console.log(bal.length);

console.log(balance.toFixed(2));
// toFixed is used to give precisely number of decimals
const num=23.695675;
console.log(num.toPrecision(3));

const score1=10000000;
console.log(score1.toLocaleString('en-IN'));*/


// ******MATHS********

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)