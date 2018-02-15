//I know what you're thinking - if the great wall of china was designed
//to keep foreigners out, then why did they open it as a tourist attraction?
//but let's get back to promises - we sort of have an idea what resolve does,
//but what about reject?

//reject is used to error handling! coolio right? 
//well, EVERY promise has (or it should have) a case where reject is called. 
//AND there is a corresponding function that gets run when reject() gets called,
//where is that function? It's the second arg to the then() method!
//read and run the code below to see it work.

 
let promise = new Promise((resolve, reject)=>{
	reject();
})

promise.then(()=>{
	console.log('this will never get run');
}, ()=>{
	console.log('this, the second function, gets run after reject()');
});

