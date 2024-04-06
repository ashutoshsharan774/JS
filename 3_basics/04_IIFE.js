//Immediately Invoked Function Expression(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})(); // to immediately invoke, jo execution parenthesis hota h that is given just after completing the function to avoid pollution like variables etc from global scope
//But we also need to wrap the entire fn in a '()' to because after using () automatically ek block ban jata h and we can work in that

//we need to use semicolon to end the previous IIFE because fn toh invoke ho gya but usko pata ni h ki context kaha end krna h
( (name)=>{
    //Passed a parameter in unnamed IIFE
    console.log(`DB connected two ${name}`);
})("Ashu")//since this the execution parenthesis so yaha argument pass kro