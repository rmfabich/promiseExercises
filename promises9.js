//one of the best parts of chaining multiple promises together using Promise.all is that error handling only needs to be done once (so much better than callbacks).
//If I reject any of these promises, then my error handler function (the second arg in Promise.all) gets called. Test it out by rejecting promise1, promise2, or
//promise3 and see that you can catch it one place

let promise1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
                resolve("dude, ");
        }, 1000)
});

let promise2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
                reject("wheres my car");
        }, 300)
});

let promise3 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("is a terrible movie!");
	}, 300);
});

var allPromises = [promise1, promise2, promise3];

Promise.all(allPromises).then((values)=>{
        console.log(values);
}, (error)=>{
	console.log(error)
});

