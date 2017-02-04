var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        return this.name + "\u5411\u4F60\u95EE\u597D";
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, major) {
        var _this = _super.call(this, name) || this;
        _this.major = major;
        return _this;
    }
    Student.prototype.greet = function () {
        return _super.prototype.greet.call(this) + (this.major + "\u7684" + this.name + "\u5411\u4F60\u95EE\u597D");
    };
    return Student;
}(Person));
var people = [];
people[0] = new Person('xiaoming');
people[1] = new Student('xiaohua', 'shuxue');
people.forEach(function (p) { return console.log(p.greet()); });
