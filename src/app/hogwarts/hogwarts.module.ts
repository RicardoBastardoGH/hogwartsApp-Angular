import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HogwartsRoutingModule } from './hogwarts-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentAplicationComponent } from './student-aplication/student-aplication.component';


@NgModule({
  declarations: [
    CharactersComponent,
    StudentsComponent,
    TeachersComponent,
    StudentAplicationComponent
  ],
  imports: [
    CommonModule,
    HogwartsRoutingModule
  ]
})
export class HogwartsModule { }
