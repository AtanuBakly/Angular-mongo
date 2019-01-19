import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
import {Employee} from '../employeeModel';
import { from } from 'rxjs';


@Component({
  selector: 'app-by-id-employee',
  templateUrl: './by-id-employee.component.html',
  styleUrls: ['./by-id-employee.component.css']
})
export class ByIdEmployeeComponent implements OnInit {
  allEmployee:any={};
  //allEmployee:Employee[];
  constructor(private service:EmployeeServiceService) { }
  public _id:number;
  ngOnInit() {
  }
  onSubmit(empValue:number)
  {
    console.log(empValue);
    this.service.GetEmployeeById(empValue).subscribe((data:Employee[])=>{
      this.allEmployee=data;
     // console.log(this.allEmployee.Name);
      //console.log(this.allEmployee.Name);
    });
  }
}
