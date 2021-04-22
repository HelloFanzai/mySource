import { Component } from '@angular/core';
import { Employee } from '../employee'

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {

  originalemployees: Employee[] = [
    new Employee(1, "Scott", 4000),
    new Employee(2, "Allen", 7500),
    new Employee(3, "Jones", 9200),
    new Employee(4, "James", 9200),
    new Employee(5, "Smith", 8300)
  ];
  employees: Employee[] = [];
  constructor() {
    this.employees = this.originalemployees;
  }

  str: string = "";
  sortcolumn = "empid";
  order = 1;
  onSearchClick() {
    this.employees = this.originalemployees.filter((emp) => {
      return emp.empName.toLowerCase().indexOf(this.str.toLowerCase()) >= 0;
    });
  }
  onSortClick() {
    this.employees = this.originalemployees.sort((emp1, emp2) => {
      var n = 0;
      if (this.sortcolumn == "empId") {
        return (emp1[this.sortcolumn] - emp2[this.sortcolumn]) * this.order;
      } else if (this.sortcolumn == "empName") {
        return (emp1[this.sortcolumn].charCodeAt(0) - emp2[this.sortcolumn].charCodeAt(0)) * this.order;
      } else {
        return (emp1[this.sortcolumn] - emp2[this.sortcolumn]) * this.order;
      }
    });
  }
}


