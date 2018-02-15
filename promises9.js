//so now we've gone over a lot of the syntax, but we haven't actually used them in an async function, 
//which is really why they exist. So let's see how that looks:

//let's mock an async event with a timeout

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

//i've tried to use the data in a synchronous fashion, but the crown prince is undefined! (run the code to see) Oh no, let's fix that. 
//use the promise to console log the crown prince (don't actually modify the promise variable itself, use then() to
//extract the data

