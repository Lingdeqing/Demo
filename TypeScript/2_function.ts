function hello(name:string="default"):string {
	return 'hello '+name;
}
console.log(hello())

let hello2 = (name:string='default'):string => `hello ${name}`;
console.log(hello2('es6'))

let obj = {a:1, b:2};
let add = ({a, b}:{a:number, b:number}):number => {return a+b;};
console.log(add(obj))

let double = arg => arg*2;
console.log(double(5));

function test(a:string, b?:string, c:string='abcd') {
	console.log(a);
	console.log(b);
	console.log(c);
}
test('xxxx');


function test2(...args) {
	args.forEach(function(arg) {
		console.log(arg);
	});
}
test2(1,2,3,4,5,6,7,8)
test2(1,2,3,4);

function test3(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
let args1 = [1,2,3,4,5,6]
test3(...args1);
let args2 = [1,2,3,4,5,6,7,8];
test3(...args2);




