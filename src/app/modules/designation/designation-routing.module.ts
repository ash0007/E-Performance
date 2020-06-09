import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDesignationComponent } from './create-designation/create-designation.component';


const routes: Routes = [
  {
    path: '',
    component: CreateDesignationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRoutingModule { }
