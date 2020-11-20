import { MemberModule } from './../member/member.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component'



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
