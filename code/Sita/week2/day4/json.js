// var test = {"array":[1,2,3],"boolean":true,"color":"gold","null":null,"number":123,"object":{"a":"b","c":"d"},"string":"Hello World"}
// console.log(test);
// console.log(JSON.stringify(test));
// //{"array":[1,2,3],"boolean":true,"color":"gold","null":null,"number":123,"object":{"a":"b","c":"d"},"string":"Hello World"}
// let theA=JSON.parse('{"array":[1,2,3],"boolean":true}')
// console.log( theA );
// console.log('----------------');

// function Employee(a, b, c) {
// 	this.empid = a;
// 	this.empname = b;
// 	this.salary = c;
// }

// Employee.prototype.marks = 70; //effct for OBJ and new Obj
// Employee.marks = 70; //only effct for the OBJ

// console.log( Employee.prototype.marks,' Employee.prototype.marks ' ); //got 70
// console.log( Employee.marks,' Employee.marks ' ); //got 70


// let theA= new Employee(101, "Scott", 4000)
// let theB= new Employee(101, "BBBBB", 4666)
// // console.log(theA);
// console.log(theA.marks,'lalala');


// var employees =
// 	[
// 		new Employee(101, "Scott", 4000),
// 		new Employee(102, "Smith", 5690),
// 		new Employee(103, "Allen", 9500),
// 		new Employee(104, "John", 7400)
// 	];
// console.log(employees);
// for (var i = 0; i < employees.length; i++) {
// 	console.log(employees[i]);
// }




// function Person(a, b) {
// 	this.name = a;
// 	this.email = b;
// }
// function Student(a, b, c) {
// 	Person.call(this, a, b);
// 	this.marks = c;
// }
// var stu = new Student("scott", "scott@gmail.com", 70);
// console.log(stu);


let theJson = {
	"DATA": [{ "id": 11, "name": "ajax", "subject": "OR", "mark": 63 },
	{ "id": 12, "name": "javascript", "subject": "OR", "mark": 63 },
	{ "id": 13, "name": "jquery", "subject": "OR", "mark": 63 },
	{ "id": 14, "name": "ajax", "subject": "OR", "mark": 63 },
	{ "id": 15, "name": "jquery", "subject": "OR", "mark": 63 },
	{ "id": 16, "name": "ajax", "subject": "OR", "mark": 63 },
	{ "id": 20, "name": "ajax", "subject": "OR", "mark": 63 }], "COUNT": "120"
}

function myFn(theJ) {
	for (const theKey in theJ) {
		console.log(theJ[theKey]);
	}
	console.log(JSON.stringify(theJson));

}
console.log(myFn(theJson));


data = theJson.DATA;

var uniqueNames = [];
for (i = 0; i < data.length; i++) {
	if (uniqueNames.indexOf(data[i].name) === -1) {
		uniqueNames.push(data[i].name);
	}
}

console.log(uniqueNames);


