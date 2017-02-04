'use strict';
var _a = [1, 2, 3], a = _a[0], b = _a[1], c = _a[2], d = _a[3];
// var [a, [b, c]] = [1, [2, 3]];
// var [a, , c] = [1, 2, 3];
// var [a, ...c] = [1, 2, 3, 4];
// var [a, b, c='default', d='default'] = [1, 2, 3];
// var [a, b, c] = [1, 2];
console.log('a:' + a);
console.log('b:' + b);
console.log('c:' + c);
console.log('d:' + d);
var arr = [1, 2, 3, 4];
arr.desc = 'four number';
// arr.forEach(value => console.log(value));
// for(let n in arr){
// 	console.log(arr[n])
// }
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var n = arr_1[_i];
    console.log(n);
}
