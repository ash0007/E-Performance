import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    MaterialModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [LayoutModule]
})
export class CoreModule { }
