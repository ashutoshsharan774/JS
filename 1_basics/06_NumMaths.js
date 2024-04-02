const score=400;//automatically js understood that its number
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
