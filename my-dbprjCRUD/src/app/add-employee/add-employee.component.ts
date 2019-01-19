import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
import {Employee} from '../employeeModel';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public employeeData:any = {};
  allEmployee:any={};
  constructor(private service:EmployeeServiceService) { }
  ngOnInit() {
  }
  addEmployee()
  {
    this.service.SaveEmployee(this.employeeData).subscribe((data:Employee)=>this.allEmployee=data);
  }

}
