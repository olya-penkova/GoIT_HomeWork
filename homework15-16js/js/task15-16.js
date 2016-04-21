function Human() {
	this.name = 'Jack';
	this.age = 30;
	this.sex = 'male';
	this.height = 180;
	this.weight = 80;
};

function Worker() {
	this.job = 'farmer';
	this.salary = 1000;
	this.work = function() {
		alert('wake up!');
	};
};

function Student() {
	this.university = 'DNTU';
	this.grants = 500;
	this.hobby = function() {
		alert('turn on TV');
	};
};

Worker.prototype = new Human();
Student.prototype = new Human();

var worker1 = new Worker();
var worker2 = new Worker();
var worker3 = new Worker();

var student1 = new Student();
var student2 = new Student();
var student3 = new Student();

console.log(worker1, worker2, worker3);
console.log(student1, student2, student3);

worker2.work();
student3.hobby();

console.log(worker1.name, worker1.age);
console.log(worker2.height, worker2.weight);
console.log(worker3.sex, worker3.name);

console.log(student1.name, student1.university);
console.log(student2.age, student2.age);
console.log(student3.grants, student3.sex);


