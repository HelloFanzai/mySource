import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  employees:Employee[]=[
    new Employee(1,'Nama1',2331),
    new Employee(2,'Nama2',2332),
    new Employee(3,'Nama3',2333),
    new Employee(4,'Nama4',2334),
    new Employee(5,'Nama5',2335)
  ]
  newEmployee:Employee = new Employee(null, null, null)

  onInsertClick(){
    if(!this.newEmployee.empId) {
      return alert('do it! enter ID')
 
    }
    this.employees.push(
      new Employee(
        this.newEmployee.empId, 
        this.newEmployee.empName, 
        this.newEmployee.salary, 
      )
    )
   
    // this.newEmployee.empId = Infinity
    // this.newEmployee.empName = ''
    // this.newEmployee.salary = -1
    this.newEmployee=new Employee(null, null, null)
  }
  onDeleteClick(n:any){
    if (confirm('really?')) {
      this.employees.splice(n,1)
    }
  }

  marks:number=70;
  myColor:string=''
  myClass:string=''
  theB:boolean=true
  b1:string='abc'
  country:string='USA'
  boys:string[]=['boy1','boy2','boya','boyb']

  constructor() { 
    if (this.marks >= 35) {
      this.myColor = 'blue'
      this.myClass = 'class1'
      this.theB=true
    } else {
      this.myColor = 'red'
      this.myClass = 'class2'
      this.theB=false
    }
  }

  ngOnInit(): void {
  }

}
