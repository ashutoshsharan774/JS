const coding=["js","ruby","java","python","cpp"]

/*const values=coding.forEach((item)=>{
    console.log(item);
    return item
    //forEach fn doesn't return values
})*/

const myNums=[1,2,3,4,5,6,7,8,9,10]
//filter has also callback function and requires a condition based on which its gonna return values
const newNums=myNums.filter((num)=>num>4)//this is case of implicit return
console.log(newNums);
//since in above lines we haven't used scope so filter is returning value

// but if we want to use scope (actual way of declaring arrow fn i.e we need to use return keyword)
//This is called explicit return

const newNum=myNums.filter( (nums)=>{
     return nums>4
})
console.log(newNum)

//If we want to use property of filter fn in forEach loop
const ans=[]

myNums.forEach( (nums)=>{
    if(nums>4){
        ans.push(nums)
    }
})
console.log(ans);

//Example for more properties of filter fn
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);