import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationalInfoComponent } from './educational-info/educational-info.component';
import { ProfesionalSummaryComponent } from './profesional-summary/profesional-summary.component';
import { SecondarySkillsComponent } from './secondary-skills/secondary-skills.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkingExperienceComponent } from './working-experience/working-experience.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
