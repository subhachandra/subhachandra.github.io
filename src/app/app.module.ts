import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfesionalSummaryComponent } from './profesional-summary/profesional-summary.component';

import { WorkingExperienceComponent } from './working-experience/working-experience.component';
import { EducationalInfoComponent } from './educational-info/educational-info.component';
import { SkillsComponent } from './skills/skills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecondarySkillsComponent } from './secondary-skills/secondary-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfesionalSummaryComponent,
    WorkingExperienceComponent,
    EducationalInfoComponent,
    SkillsComponent,
    SecondarySkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
