import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../../material/material.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SubheadContentComponent } from './subhead-content/subhead-content.component';



@NgModule({
  declarations: [MenuComponent, MenuListComponent, SideMenuComponent, SubheadContentComponent],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MenuComponent,
    MenuListComponent,
    SideMenuComponent,
    SubheadContentComponent
  ]
})
export class ToolbarModule { }
