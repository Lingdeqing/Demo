class Promise{
	constructor(){
		this.callbacks = [];
		this.oncatch = null;
	}
	then(onsuccess, onfail){
		this.callbacks.push({
			resolve:onsuccess,
			reject:onfail
		});
		return this;
	}
	catch(oncatch){
		this.oncatch = oncatch;
		return this;
	}
	resolve(data){
		this.complete('resolve', data);
	}
	reject(data){
		this.complete('reject', data);
	}
	complete(type, data){
		if(type == 'reject' && this.oncatch){
			this.callbacks = [];
			this.oncatch(data);
		} else if(this.callbacks[0]){
			let fn = this.callbacks.shift();
			if(fn[type]){
				fn[type](data);
			}
		}

	}
}

function asyn0 (arg) {
	setTimeout(function () {
		console.log(123);
		promise.resolve(123);
	}, 1000);
}

function asyn1 (arg) {
	setTimeout(function () {
		console.log('456'+arg);
		promise.resolve('456'+arg);
	}, 500);
}

function asyn2 (arg) {
	setTimeout(function () {
		console.log('789'+arg);
		promise.resolve('789'+arg);
	}, 100);
}

var promise = new Promise();
promise.then(asyn0)
	.then(asyn1)
	.then(asyn2)
	.catch(err => {
		console.log('catch err');
	})
promise.resolve();