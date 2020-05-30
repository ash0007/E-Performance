import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/core/layout/layout.module';


@NgModule({
  declarations: [CreateDepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule
  ]
})
export class DepartmentModule { }
