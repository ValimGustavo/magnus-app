import { GetPatentService } from './resolvers/get-patent.service';
import { PatentReadComponent } from './components/patent-read/patent-read.component';
import { PatentCreateComponent } from './components/patent-create/patent-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatentFormComponent } from './components/patent-form/patent-form.component';

const routes: Routes = [
  {
    path: 'patent',
    children: [
      {
        path:'',
        component: PatentReadComponent,
        resolve: {
          patents: GetPatentService
        }
      },
      {
        path: 'create',
        component: PatentCreateComponent
      },
      {
        path: ':id',
        component: PatentFormComponent,
        resolve: {
          patents: GetPatentService
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatentRoutingModule { }
