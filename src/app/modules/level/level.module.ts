import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelRoutingModule } from './level-routing.module';
import { LevelCreateComponent } from './components/level-create/level-create.component';
import { LevelReadComponent } from './components/level-read/level-read.component';
import { LevelFormComponent } from './components/level-form/level-form.component';


@NgModule({
  declarations: [LevelCreateComponent, LevelReadComponent, LevelFormComponent],
  imports: [
    CommonModule,
    LevelRoutingModule,
    ReactiveFormsModule
  ]
})
export class LevelModule { }
