import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { EvaluateEmployeeSkillComponent } from './evaluate-employee-skill/evaluate-employee-skill.component';


@NgModule({
  declarations: [MySkillsComponent, EvaluateEmployeeSkillComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
