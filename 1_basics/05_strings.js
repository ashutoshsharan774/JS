const name="Ashu"
const repoCount=50

// console.log(name+repCount+"Value");
// old-fasioned way of using syntax for concat

console.log(`Hello my name is ${name} and my repCount is ${repoCount} `);
// Newer version of concatenating strings

// Another way of declaring stirng
// here String is an object , in key:value pair
const gameName= new String('Ashutosh');
// since index:character at that index therfore we can acess it
console.log(gameName[0]);

// console.log(gameName.__proto__);
// __proto__ is no longer required to access functions of object string

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
// charAt is used to check which char is at particular index

console.log(gameName.indexOf('u'));
// indexOf is used to find which position does a char lies

const newString=gameName.substring(0,2);
// substring(start,end) i-> starting index and ending index is length
// whereas substr(starting index, len);
console.log(newString);

const anotherString= gameName.slice(-7,5);
// slice is same as substirng but it does not obeys negative index value
console.log(anotherString);

const newStr= "  Ashu   ";
console.log(newStr);
console.log(newStr.trim());
// trim removes starting and ending extra space(whitespaces and line terminators)
// we also have methods like trimStart and trimEnd

const url="https://ashu.com/ashiu%saahran"
console.log(url.replace('%s','_'));
// replace('what to replace','with what to replace');
console.log(url.includes('ashiu'));
// includes helps to verify whether that particular piece of stirng is in our string or not

// The split() method of String values takes a pattern and divides 
// this string into an ordered list of substrings by searching
// for the pattern, puts these substrings into an array, and returns the array.
// Syntax: Split(Separator,limit);
// split(separator);
const sentence="Long Live the revolution !!";
const words=sentence.split(' ');
// here we are splitting on the basis of space 
console.log(words[2]);

const letters=sentence.split('');
// splitting on the basis of letters 
console.log(letters[2]);