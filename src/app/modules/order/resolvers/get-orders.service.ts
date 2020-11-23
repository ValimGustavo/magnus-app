import { Order } from 'src/interfaces/order/order.interface';
import { Observable } from 'rxjs';
import { OrderService } from '../services/order.service';
import { Injectable } from '@angular/core';
import {
  ActivationEnd,
  Resolve,
  ResolveEnd,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Member } from 'src/interfaces/member/member.interface';

@Injectable({
  providedIn: 'root',
})
export class GetOrdersResolve implements Resolve<Order[] | Order> {
  constructor(
    private orderService: OrderService,
    private router: ActivatedRoute
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Order[] | Order> {


    //const user = route.paramMap.get('user')
    const id = route.paramMap.get('id')

    if(id){
      return new Observable((subscriber) => {
        let order: Order;
  
        this.orderService.getOrderById(id).subscribe(
          (response) => {
            order = response;
            subscriber.next(order);
            subscriber.complete();
          },
          (error) => {
            subscriber.error(error);
          }
        );
      });
    }else{
      return new Observable((subscriber) => {
        let orders: Order[];
  
        this.orderService.listAll().subscribe(
          (response) => {
            orders = response;
            subscriber.next(orders);
            subscriber.complete();
          },
          (error) => {
            subscriber.error(error);
          }
        );
      });
    }

    
  }
}
