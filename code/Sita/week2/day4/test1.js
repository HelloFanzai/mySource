// constructor function
var stu = { "studentid":1, "student name": "scott", "marks": 80 };
console.log(stu);
console.log(stu.studentid);
console.log(stu.studentname);
console.log(stu.marks);

stu['studentname']='asd'
console.log(stu);
delete stu.studentname
console.log(stu);

var stu = {
	studentid: 1, 
	studentname: "scott", 
	marks: 80, 
	"result": function (){
		if (this.marks >= 35){
			return "Pass";
		}else{
			return "Fail";
		}
	}
};
console.log(stu);
console.log(stu.studentid);
console.log(stu.studentname);
console.log(stu.marks);
console.log(stu.result());

