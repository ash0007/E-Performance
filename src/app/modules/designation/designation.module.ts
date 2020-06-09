import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRoutingModule } from './designation-routing.module';
import { CreateDesignationComponent } from './create-designation/create-designation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/core/layout/layout.module';

@NgModule({
  declarations: [CreateDesignationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    DesignationRoutingModule
  ]
})
export class DesignationModule { }
