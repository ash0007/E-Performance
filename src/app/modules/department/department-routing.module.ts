import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDepartmentComponent } from './create-department/create-department.component';


const routes: Routes = [
  {
    path: '',
    component: CreateDepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
