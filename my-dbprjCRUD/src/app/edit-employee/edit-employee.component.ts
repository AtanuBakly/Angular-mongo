import { Component, OnInit } from '@angular/core';
import {Employee} from '../employeeModel';
import {EmployeeServiceService} from '../employee-service.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public employeeData:any = {};
  allEmployee:any={};
  constructor(private service:EmployeeServiceService) { }

  ngOnInit() {
  }
  onSearch(empValue:number)
  {
    this.service.GetEmployeeById(empValue).subscribe((data:Employee[]) => {
      this.employeeData = data;
    });
  }
  UpdateEmployee(allEmployee:Employee)
  {
    this.service.UpdateEmployee(this.employeeData).subscribe((data:Employee)=>this.allEmployee=data);
  }
}
