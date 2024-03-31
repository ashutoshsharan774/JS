// let score = "33abc"
// let score = true value 1 aayega



// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInnumber);
// console.log(valueInnumber);

// "33" gets converted to 33
// "33abc" gets converted to NaN
// true gets converted to 1 and false => 0

// let isLoggedIn = 1
// let isLoggedIn =""

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// empty string gets convrted to false in Boolean
// string gets converted to true in Boolean


// let num =33
// let stringnum=String(num);
// console.log(stringnum);
// console.log(typeof stirngnum);

// *************** Operations **************

let value =3
let negValue= -value

console.log(negValue);
console.table([value,negValue]);

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2**3); ** == ^
// console.log(2/3);
// console.log(2%3);

 let str1 ="hello"
 let str2 =" ashu"
 let str3= str1 + str2
//  + is concat operator

 console.log(str3);

 console.log(1 + "2");
 console.log("1"+2);

 console.log("1"+2+2);
 console.log(1+2 +"2");
//  This may confuse us in js 
// for eg  console.log("1"+2+2); this gave us output 122 since
// if our 1st i/p is in string so all will be converted to string 
// in case of console.log(1+2+"2") we wil recieve 32 as o/p since 
// 1+2 is number and then concatenated with a string


// console.log(+true);
// console.log(+"")

// let num1,num2,num3
// num1=num2=num3=2+2

let gameCounter=100
gameCounter++;
console.log(gameCounter);//this gives 101 as o/p as let allows variables to be updated after they are declared

let x=23;
++x;
x++;
console.log(x);
