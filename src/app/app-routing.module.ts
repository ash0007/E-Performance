import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { ProjectsTasksGoalsModule } from './modules/projects-tasks-goals/projects-tasks-goals.module';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "projects-tasks-goals",
    loadChildren:   () => import('./modules/projects-tasks-goals/projects-tasks-goals.module').then(m => m.ProjectsTasksGoalsModule)
  },
  {
    path: "feedback",
    loadChildren:   () => import('./modules/feedback/feedback.module').then(m => m.FeedbackModule)
  },
  {
    path: "skills",
    loadChildren:   () => import('./modules/skills/skills.module').then(m => m.SkillsModule)
  },
  {
    path: "team",
    loadChildren:   () => import('./modules/team/team.module').then(m => m.TeamModule)
  },
  {
    path: "employee",
    loadChildren:   () => import('./modules/employee-management/employee-management.module').then(m => m.EmployeeManagementModule)
  },
  {
    path: "department",
    loadChildren:   () => import('./modules/department/department.module').then(m => m.DepartmentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
