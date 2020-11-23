import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/interfaces/order/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


  create(order:Order){
    return this.http.post<Order>(environment.orderEndpoint, order)
  }

  listAll(){
    return this.http.get<Order[]>(environment.orderEndpoint)
  }

  getOrderById(id:string){
    return this.http.get<Order>(environment.orderEndpoint + '/' + id)
  }

  updateOrder(order:Order){
    return this.http.put<Order>(environment.orderEndpoint + '/' + order.id, order)
  }

  delete(order: Order){
    
    return this.http.delete<{delete: boolean}>(environment.orderEndpoint + '/' + order.id)
  }
}
