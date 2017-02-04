var str = "abc\ndef\nghi";
console.log(str);
var myName = 'YaoMengMeng';
var getAge = function () {
    return 18;
};
var tpl = "<div>\n<span>" + myName + "</span>,<span>" + getAge() + "</span>\u5C81\n</div>";
console.log(tpl);
function test(tpl, name, age) {
    console.log(tpl);
    console.log(name);
    console.log(age);
}
(_a = ["hello, my name is ", ", i'm ", ""], _a.raw = ["hello, my name is ", ", i'm ", ""], test(_a, myName, getAge()));
var _a;
