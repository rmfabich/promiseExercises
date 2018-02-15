//here's another way to handle async javascript, in a way that avoids callback
//hell

//A promise!

//here's what they look like :

var stuff = new Promise((resolve, reject)=>{
	console.log('running some code inside promise');
	resolve(); //resolve is used the same as callback. Does not matter what you call it.

});

//console.log(promise);

//execute the file to see the output - notice that its just a 
//dang promise object. A promise doesn't do anything until 
//tell it to. Essentially, you run a promise by using the
//"then" method on the promise object
//comment the console log above, and uncomment out the code below
//to see how you use the then method 

 stuff.then(()=>{   //stuff.then(function()){     this is the same thing.
 	console.log('running code after promise');
 });
