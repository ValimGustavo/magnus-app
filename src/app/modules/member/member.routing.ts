import { MemberCreateComponent } from './components/member-create/member-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "member",
    children: [
      {
        path: 'create',
        component: MemberCreateComponent,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRoutingModule {}
