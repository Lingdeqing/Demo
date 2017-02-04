let a:string = 'abc';
let b:number = 4;
let c:string[] = ['a', 'b', 'c'];
let d:number[] = [1, 2, 3];
let e:boolean = true;
let f:[number, string] = [1, 'hello'];
let g:any = 1;
let h:any = 'abc';
function fun():void {
	alert(1);
	// return 1;	
}


let v = 'abc';
// v = 10;//error

class Person{
	fullName:string;
	age:number;
};
let person:Person = new Person;
person.age = 100;
