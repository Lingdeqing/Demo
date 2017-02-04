
	'use strict';
	var [a, b, c, d] = [1, 2, 3];
	// var [a, [b, c]] = [1, [2, 3]];
	// var [a, , c] = [1, 2, 3];
	// var [a, ...c] = [1, 2, 3, 4];
	// var [a, b, c='default', d='default'] = [1, 2, 3];
	// var [a, b, c] = [1, 2];
	console.log('a:'+a);
	console.log('b:'+b);
	console.log('c:'+c);
	console.log('d:'+d);

	let arr = [1,2,3,4];
	arr.desc = 'four number';
	// arr.forEach(value => console.log(value));
	// for(let n in arr){
	// 	console.log(arr[n])
	// }
	for(let n of arr){
		console.log(n)
	}