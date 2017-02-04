let str = `abc
def
ghi`;
console.log(str);

let myName = 'YaoMengMeng';
let getAge = function() {
	return 18;
};
let tpl = `<div>
<span>${myName}</span>,<span>${getAge()}</span>岁
</div>`;
console.log(tpl);

function test(tpl, name, age) {
	console.log(tpl)
	console.log(name)
	console.log(age)
}
test`hello, my name is ${myName}, i'm ${getAge()}`