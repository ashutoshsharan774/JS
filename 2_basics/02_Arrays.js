const superheroes=["shaktimaan","nagraj","doga"];
const marvel_heroes=["ironman","thor","hulk"];
/*marvel_heroes.push(superheroes);
console.log(marvel_heroes);
console.log(marvel_heroes[3][0]);*/
// Adds superheroes to marvel_heroes as a single element

/*const heroes=superheroes.concat(marvel_heroes);
console.log(heroes);*/
// concat requires two arrays to concat in a diff array

// Spread Operator
const all_new_heroes=[...superheroes,...marvel_heroes]
console.log(all_new_heroes);


// flat Operator
const arr1=[1,2,[3,4,5],6,7,8,[5,7,6]]
console.log(arr1);
console.log(arr1.flat(Infinity));
// prefer to give depth (exact) instead of using Infinity


console.log(Array.isArray("ashutosh"));
// checking if ashutosh is an array or not
// converting ashutosh to an array
console.log(Array.from("ashutosh"));

// There is an interesting case
console.log(Array.from({name:"Ashutosh"}))
// This above statement gives an empty array as we need to specify wheteher to convert keys or values


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))