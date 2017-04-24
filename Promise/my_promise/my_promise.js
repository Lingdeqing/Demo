function Promise () {
	this.callbacks = [];
}

Promise.prototype.then = function (fn) {
	this.callbacks.push(fn);
	return this;
}

Promise.prototype.resolve = function () {
	var fn = this.callbacks.shift();
	fn && fn(arguments);
}


var promise = new Promise();


// function async0 () {
// 	setTimeout(function () {
// 		console.log(123);
// 		promise.resolve(123);
// 	}, 1000);
// }

function async0 () {
	setTimeout(function () {
		console.log(123);
		promise.resolve(123);
	}, 1000);
	return promise;
}

function async1 () {
	setTimeout(function(){
		console.log(456);
		promise.resolve(456);
	}, 500);
}

function async2 () {
	setTimeout(function(){
		console.log(789);
		promise.resolve(789);
	}, 500);
}

// promise.then(async0)
// 	.then(async1)
// 	.then(async2);

// promise.resolve();


async0().then(async1).then(async2);