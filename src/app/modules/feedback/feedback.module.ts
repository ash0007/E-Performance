import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { MyFeedbackManagementComponent } from './my-feedback-management/my-feedback-management.component';
import { TeamFeedbackManagementComponent } from './team-feedback-management/team-feedback-management.component';


@NgModule({
  declarations: [MyFeedbackManagementComponent, TeamFeedbackManagementComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
