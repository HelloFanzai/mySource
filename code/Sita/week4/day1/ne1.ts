interface IStudent {
    firstName: string;
    lastName: string;
    getFullName(): string;
}
class Student implements IStudent {
    firstName: string
    lastName: string
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
var s = new Student();
s.firstName = "Adam";
s.lastName = "Smith";
console.log(s.getFullName()); 