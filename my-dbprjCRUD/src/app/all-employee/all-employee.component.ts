import { Component, OnInit, Input } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
import {Employee} from '../employeeModel';
import { from } from 'rxjs';


@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {

  // @Input()
  // individualEmp:Employee;
  
  allEmployee:Employee[];
  constructor(private service:EmployeeServiceService) { }

  ngOnInit() {
   this.service.GetAllEmployee().subscribe((data:Employee[])=>this.allEmployee=data);
  }

}
