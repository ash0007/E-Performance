import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from './toolbar/toolbar.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { MaterialModule } from '../material/material.module';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SubheadContentComponent } from './toolbar/subhead-content/subhead-content.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LeftComponent, RightComponent, ContentComponent, MainComponent],
  imports: [
    ToolbarModule,
    MaterialModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, FooterComponent, LeftComponent, RightComponent, ContentComponent, MainComponent, SubheadContentComponent
  ]
})
export class LayoutModule { }
