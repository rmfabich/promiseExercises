//get the console log below to run by using the then method on the promise

let promise = new Promise((resolve, reject) =>{
	console.log('get me to execute');
	resolve();
});
promise.then(()=> {
	
})