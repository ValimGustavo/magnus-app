import { OrderFormComponent } from './components/order-form/order-form.component';
import { GetOrdersResolve } from './resolvers/get-orders.service';
import { OrderReadComponent } from './components/order-read/order-read.component';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'order',
    children: [
      {
        path: '',
        component: OrderReadComponent,
        resolve: {
          orders: GetOrdersResolve
        }
      },
      {
        path: 'create',
        component: OrderCreateComponent,
      },
      {
        path: ':id',
        component: OrderFormComponent,
        resolve: {
          orders: GetOrdersResolve
        }
      }
      
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
