import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
import {Employee} from '../employeeModel';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  allEmployee:any={};
  public _id:number;
  constructor(private service:EmployeeServiceService) { }

  ngOnInit() {
  }
  onSubmit(empValue:number)
  {
    this.service.GetEmployeeById(empValue).subscribe((data:Employee[])=>this.allEmployee=data);
  }
  deleteEmployee(empValue:number)
  {
    this.service.DeleteEmployee(empValue).subscribe();
  }
}
