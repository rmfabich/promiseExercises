//look at that resolve and reject parameters - they are important.
//executing "resolve" is what causes the "then" method to run. 
//modify the code below to run the console log

var promise = new Promise((resolve, reject)=>{
	resolve();
});

promise.then(()=>{
	console.log('make me run');
});
