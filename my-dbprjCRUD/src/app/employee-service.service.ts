import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Employee} from './employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient:HttpClient) { }
 
  public GetAllEmployee()
  {
    let url="http://localhost:999/retrieveAll";
    return this.httpClient.get(url);
  }
  public GetEmployeeById(Id:any)
  {
    let url="http://localhost:999/getEmployeeById/"+Id;
    return this.httpClient.get(url);
  }

  public SaveEmployee(empdata:Employee)
  {
    let url="http://localhost:999/addEmployee";
    return this.httpClient.post(url,empdata,
      {
      headers: new HttpHeaders({
      'Content-Type':'application/json'
      })
      });
  }
  public DeleteEmployee(Id:number)
  {
    let url="http://localhost:999/DeleteEmployee/"+Id;
    return this.httpClient.delete(url,{
      headers: new HttpHeaders({
      'Content-Type':'application/json'
      })
      });
  }

  public UpdateEmployee(empdata:Employee)
  {
    let url="http://localhost:999/UpdateEmployee";
    return this.httpClient.put(url,empdata,
      {
      headers: new HttpHeaders({
      'Content-Type':'application/json'
      })
      });
  }
}
