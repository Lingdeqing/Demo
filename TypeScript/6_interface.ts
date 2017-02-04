interface IPerson{
	name:string;
	age:number;
}
class Person{
	constructor(public config:IPerson){
	}
}

let p = new Person({
	name:'xiaohua',
	age:10
});


interface Animal{
	eat();
}
class Sheap implements Animal{
	eat(){
		console.log('i eat grass');
	}
}