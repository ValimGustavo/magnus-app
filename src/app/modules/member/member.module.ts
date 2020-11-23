import { MemberRoutingModule } from './member.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCreateComponent } from './components/member-create/member-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemberReadComponent } from './components/member-read/member-read.component';
import { MemberFormComponent } from './components/member-form/member-form.component';

@NgModule({
  declarations: [MemberCreateComponent, MemberReadComponent, MemberFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
