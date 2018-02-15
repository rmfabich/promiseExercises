//one thing you'll see often is objects, strings, numbers, or whatever getting passed through the promises' resolve and reject function. 


let promise = new Promise((resolve, reject)=>{
	if (true){
		resolve( {
			message: "Promise resolved",
			code:200
		})
	} else {	
		reject({
			message: "Your promise was rejected",
			code:404
		});
	}
});

promise.then((obj) =>{
	console.log(obj.message);
	}, (kick)=>{
	console.log(kick.message);
});



//modify the code above to throw a rejection, and change the message to be "your promise got rejected, or something like that"
