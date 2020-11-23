import { OrderService } from './../../services/order.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private orderService: OrderService
  ) { }

  formOrder: FormGroup


  ngOnInit(): void {
    this.formOrder = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    })
  }


  create(){
    const order = this.formOrder.value

    this.orderService.create(order).subscribe(response => {

      alert('Criado com sucesso' + response.id)
    }, 
    error => {
      console.log(error)
      alert('error')
    })

  }

  onCancel(){
    this.router.navigate(['/order'])
  }

}
