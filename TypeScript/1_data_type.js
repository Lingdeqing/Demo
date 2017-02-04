var a = 'abc';
var b = 4;
var c = ['a', 'b', 'c'];
var d = [1, 2, 3];
var e = true;
var f = [1, 'hello'];
var g = 1;
var h = 'abc';
function fun() {
    alert(1);
    // return 1;	
}
var v = 'abc';
// v = 10;//error
var Person = (function () {
    function Person() {
    }
    return Person;
}());
;
var person = new Person;
person.age = 100;
