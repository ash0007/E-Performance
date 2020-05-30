import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartModule } from './ng-chart/ng-chart.module';

import { TeamListCardComponent } from './team-list-card/team-list-card.component';
import { StatusChartComponent } from './status-chart/status-chart.component';



@NgModule({
  declarations: [TeamListCardComponent, StatusChartComponent],
  imports: [
    CommonModule,
    NgChartModule
  ],
  exports: [
    TeamListCardComponent,
    StatusChartComponent
  ]
})
export class CommonComponentsModule { }
