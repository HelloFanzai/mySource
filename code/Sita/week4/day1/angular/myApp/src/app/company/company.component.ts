import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyName: string = 'ABC'
  // @ViewChild(EmployeeComponent) emp!: EmployeeComponent
  @ViewChildren(EmployeeComponent) emp: QueryList<EmployeeComponent>

  thismyFN() {
    console.log(this.emp);
    // if (this.emp.empName == 'XiaoMing') {
    //   this.emp.empName = 'XiaoHong'
    // } else {
    //   this.emp.empName = 'XiaoMing'
    // }
    // this.emp.empName == 'XiaoMing' ? this.emp.empName = 'XiaoHong' : this.emp.empName = 'XiaoMing'

    // var a = this.emp.toArray();
    // for (var i = 0; i < this.emp.length; i++) {
    //   this.emp[i].empName = `${i}XiaoMing`;
    // }
    this.emp.map(p => p.empName == 'XiaoMing' ? p.empName = 'XiaoHong' : p.empName = 'XiaoMing')


  }

  constructor() { }

  ngOnInit(): void {
  }

}
