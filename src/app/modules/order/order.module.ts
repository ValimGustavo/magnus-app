import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { OrderReadComponent } from './components/order-read/order-read.component';
import { OrderFormComponent } from './components/order-form/order-form.component';


@NgModule({
  declarations: [OrderCreateComponent, OrderReadComponent, OrderFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    OrderRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
