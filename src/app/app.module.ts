import { MemberModule } from './modules/member/member.module';
import { SharedModule } from './modules/shared/shared.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
    MemberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
