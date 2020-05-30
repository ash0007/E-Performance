import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsTasksGoalsRoutingModule } from './projects-tasks-goals-routing.module';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { TableViewModule } from '../common-components/table-view/table-view.module';

import { ProjectListComponent } from './project-list/project-list.component';
import { MyTaskListComponent } from './my-task-list/my-task-list.component';
import { TeamTaskListComponent } from './team-task-list/team-task-list.component';
import { MyGoalListComponent } from './my-goal-list/my-goal-list.component';
import { TeamGoalListComponent } from './team-goal-list/team-goal-list.component';


@NgModule({
  declarations: [ProjectListComponent, MyTaskListComponent, TeamTaskListComponent, MyGoalListComponent, TeamGoalListComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    TableViewModule,
    ProjectsTasksGoalsRoutingModule
  ]
})
export class ProjectsTasksGoalsModule { }
