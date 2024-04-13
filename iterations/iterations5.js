const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )
//here we are using callback function it doesn't have name
//since we are writing fn within forEach loop therefore 'val' apne aap parameter ki tarah value lekar aayega

coding.forEach( (item) => {
    console.log(item);
} )
//call back fn using arrow fn
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

/*myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )*/