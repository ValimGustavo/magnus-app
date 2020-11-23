import { LevelModule } from './modules/level/level.module';
import { OrderModule } from './modules/order/order.module';
import { MemberModule } from './modules/member/member.module';
import { SharedModule } from './modules/shared/shared.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelCreateComponent } from './modules/level/components/level-create/level-create.component';
import { LevelReadComponent } from './modules/level/components/level-read/level-read.component';
import { LevelFormComponent } from './modules/level/components/level-form/level-form.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
    MemberModule,
    OrderModule,
    LevelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
