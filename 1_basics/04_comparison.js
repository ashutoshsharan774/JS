// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);
// These are normal comparisons between variables of same data type

//Confusion may arise if we have to compare between variables of diff data type
console.log("2">1);
console.log("02">1);
// In these cases js autmatically convrted "2" in number 
// so basically we need to refrain from doing such comparisons as they may arise issues as they don't produce predictable results

console.log(null>0);
console.log(null==0);
console.log(null>=0);
// In case of null sometime null gets converted to NaN and sometimes get converted to 0
// In js == works in a diff way ,it attempts to convert and compare operands that are of different types.

// In js === represents strict equal ,Returns true if the operands are equal and of the same type.
console.log("2"===2);

// strict not equal !== Returns true if the operands are of the same type but not equal, or are of different type.

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);
// In case of undefined all comparisons with 0 always gives false
