import { MemberReadComponent } from './components/member-read/member-read.component';
import { MemberCreateComponent } from './components/member-create/member-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetMembersResolve } from './resolvers/get-members.service';

const routes: Routes = [
  {
    path: "member",
    children: [
      {
        path: '',
        component: MemberReadComponent,
        resolve: {
          members: GetMembersResolve
        }
      },
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
