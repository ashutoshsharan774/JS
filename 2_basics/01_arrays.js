const myArr=[0,1,2,3,4]
// JavaScript arrays are resizable and can contain a mix of different data types.
//  (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies,
    //  rather than deep copies).
const myHeroes=['Shaktimaan','Nagraj','Doga'];

//Another way of declaring array
const myArr2=new Array(1,2,3,4);
// will get to know all prototypes once type this command in console 
console.log(myArr2);
console.log(myArr2.length);
console.log(myArr2[0]);

// arrays methods

myArr.push(6);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(8);
// The unshift() method of Array instances adds the specified elements to the beginning
// of an array and returns the new length of the array.
console.log(myArr);
myArr.shift();//basically unshif tkiye hue value ko remove kr deta ha
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr=myArr.join();
// the join method converts the array into string results in removal of bracket
console.log(newArr);
console.log(typeof newArr);


// slice . splice
// The slice() method returns selected elements
//  in an array, as a new array. The slice() method selects from a given start, 
// up to a (not inclusive) given end. The slice() method does not change the original array.
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr)
const myn2=myArr.splice(1,3);
console.log(myArr)
console.log(myn2);
// splice manipulates original array while slice doesn't
