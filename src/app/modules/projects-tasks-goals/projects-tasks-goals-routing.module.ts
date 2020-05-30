import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { MyTaskListComponent } from './my-task-list/my-task-list.component';
import { TeamTaskListComponent } from './team-task-list/team-task-list.component';
import { MyGoalListComponent } from './my-goal-list/my-goal-list.component';
import { TeamGoalListComponent } from './team-goal-list/team-goal-list.component';


const routes: Routes = [
  {
    path: "",
    component: ProjectListComponent
  },
  {
    path: "my-task",
    component: MyTaskListComponent
  },
  {
    path: "team-task",
    component: TeamTaskListComponent
  },
  {
    path: "my-goal",
    component: MyGoalListComponent
  },
  {
    path: "team-goal",
    component: TeamGoalListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsTasksGoalsRoutingModule { }
