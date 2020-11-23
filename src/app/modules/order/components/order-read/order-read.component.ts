import { Order } from 'src/interfaces/order/order.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-read',
  templateUrl: './order-read.component.html',
  styleUrls: ['./order-read.component.scss']
})
export class OrderReadComponent implements OnInit {

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  //TODO: Criar metodos de click para ver informaçoes
  //Mlehorar html


  orders: Order[]
  ngOnInit(): void {  
    this.orders = this.activateRouter.snapshot.data['orders']
  }


  showOrder(id: string){
    this.router.navigate(['/order/', id])
  }

}
