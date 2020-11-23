import { LevelFormComponent } from './components/level-form/level-form.component';
import { GetLevelResolve } from './resolvers/get-level.service';
import { LevelReadComponent } from './components/level-read/level-read.component';
import { LevelCreateComponent } from './components/level-create/level-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'level',
    children: [
      {
        path: '',
        component: LevelReadComponent,
        resolve: {
          levels: GetLevelResolve
        }
      },
      {
        path: 'create',
        component: LevelCreateComponent
      },
      {
        path: ':id',
        component: LevelFormComponent,
        resolve: {
          levels: GetLevelResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelRoutingModule { }
