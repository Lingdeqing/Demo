class Person{
	name:string;

	constructor(name:string){
		this.name = name;
	}

	greet(){
		return `${this.name}向你问好`;
	}
}

let xiaoming = new Person('xiaoming');
console.log(xiaoming.greet());

class Student extends Person{
	major:string;

	constructor(name:string, major:string){
		super(name);
		this.major = major;
	}

	greet(){
		return super.greet()+`${this.major}的${this.name}向你问好`;
	}
}
let xiaohua:Person = new Student('xiaohua', 'shuxuexi');
console.log(xiaohua.greet())