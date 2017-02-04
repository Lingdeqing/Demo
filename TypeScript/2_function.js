function hello(name) {
    if (name === void 0) { name = "default"; }
    return 'hello ' + name;
}
console.log(hello());
var hello2 = function (name) {
    if (name === void 0) { name = 'default'; }
    return "hello " + name;
};
console.log(hello2('es6'));
var obj = { a: 1, b: 2 };
var add = function (_a) {
    var a = _a.a, b = _a.b;
    return a + b;
};
console.log(add(obj));
var double = function (arg) { return arg * 2; };
console.log(double(5));
function test(a, b, c) {
    if (c === void 0) { c = 'abcd'; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test('xxxx');
function test2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
test2(1, 2, 3, 4, 5, 6, 7, 8);
test2(1, 2, 3, 4);
function test3(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
var args1 = [1, 2, 3, 4, 5, 6];
test3.apply(void 0, args1);
var args2 = [1, 2, 3, 4, 5, 6, 7, 8];
test3.apply(void 0, args2);
