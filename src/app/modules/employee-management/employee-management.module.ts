import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/core/layout/layout.module';


@NgModule({
  declarations: [EmployeesListComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule
  ]
})
export class EmployeeManagementModule { }
