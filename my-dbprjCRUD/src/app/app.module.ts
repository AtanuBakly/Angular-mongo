import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import {Routes,RouterModule} from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { ByIdEmployeeComponent } from './by-id-employee/by-id-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

import {HttpClientModule} from '@angular/common/http' // for database connection

import {FormsModule} from '@angular/forms'; // for <form> tag for Add employee page

const appRoutes:Routes=[
  {path: "",component:AllEmployeeComponent},
  {path: "Add-Employee",component:AddEmployeeComponent},
  {path: "Edit-Employee",component:EditEmployeeComponent},
  {path: "All-Employee",component:AllEmployeeComponent},
  {path: "ById-Employee",component:ByIdEmployeeComponent},
  {path: "Delete-Employee",component:DeleteEmployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    AllEmployeeComponent,
    ByIdEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
