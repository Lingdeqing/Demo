class Person{
	name:string;

	constructor(name:string){
		this.name = name;
	}

	greet(){
		return `${this.name}向你问好`;
	}
}

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

let people:Array<Person> = [];
people[0] = new Person('xiaoming');
people[1] = new Student('xiaohua', 'shuxue');
people.forEach(p => console.log(p.greet()));