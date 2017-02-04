var Person = (function () {
    function Person(config) {
        this.config = config;
    }
    return Person;
}());
var p = new Person({
    name: 'xiaohua',
    age: 10
});
var Sheap = (function () {
    function Sheap() {
    }
    Sheap.prototype.eat = function () {
        console.log('i eat grass');
    };
    return Sheap;
}());
