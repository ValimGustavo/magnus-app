import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatentRoutingModule } from './patent-routing.module';
import { PatentCreateComponent } from './components/patent-create/patent-create.component';
import { PatentFormComponent } from './components/patent-form/patent-form.component';
import { PatentReadComponent } from './components/patent-read/patent-read.component';


@NgModule({
  declarations: [PatentCreateComponent, PatentFormComponent, PatentReadComponent],
  imports: [
    CommonModule,
    PatentRoutingModule,
    ReactiveFormsModule
  ]
})
export class PatentModule { }
