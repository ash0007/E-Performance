import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    CdkTreeModule,
    MatTreeModule
  ]
})
export class MaterialModule { }
