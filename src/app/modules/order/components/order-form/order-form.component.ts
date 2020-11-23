import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/modules/order/services/order.service';
import { Order } from 'src/interfaces/order/order.interface';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  formOrder: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute
  ) {}

  mode: string;

  orderData: Order;

  ngOnInit(): void {
    this.orderData = this.activatedRoute.snapshot.data['orders'];

    let data: Order;
    if (this.orderData) {
      this.mode = modes.INFO;
      data = this.orderData;
    } else {
      this.mode = modes.CREATE;
      data = {
       name: '',
       description: ''
      };
    }

    this.formOrder = this.formBuilder.group({
      name: [
        data.name,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      description: [
        data.description,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      
    });

    //TODO: criar evento de observaçao para poder desvincular esse codigo em um observable
    if (this.mode === modes.INFO) {
      if (this.mode === modes.INFO) {
        for (let control in this.formOrder.controls) {
          this.formOrder.controls[control].disable();
        }
      }
    }
  }

  editable() {
    this.mode = modes.EDITABLE;

    //TODO: transformar isso em um emit para poder desvincular os codigos
    if (this.mode === modes.EDITABLE) {
      for (let control in this.formOrder.controls) {
        this.formOrder.controls[control].enable();
      }
    }
  }

  delete() {
    this.orderService.delete(this.orderData).subscribe(
      (response) => {

        if(response.delete){
          alert('deletado com sucesso');
          this.router.navigate(['/order'])
        }else{
          alert('encontramos problemas para deletar o ordem');
          this.router.navigate(['/order'])
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get isEditable() {
    switch (this.mode) {
      case modes.INFO:
        return true;
      case modes.EDITABLE:
        return false;
      case modes.CREATE:
        return false;
    }
  }
  create() {
    const order: Order = this.formOrder.value;
    this.orderService.create(order).subscribe(
      (response) => {
        alert('registrado com sucesso ' + response.id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  update() {
    const data = {
      ...this.formOrder.value,
      id: this.orderData.id,
    };
    this.orderService.updateOrder(data).subscribe(
      (response) => {
        console.log(response);
        alert('a');
        this.router.navigate(['/order'])
      },
      (error) => {
        console.log(error);
      }
    );
  }

  returnForList() {
    this.router.navigate(['/order']);
  }
}

enum modes {
  INFO = 'info',
  EDITABLE = 'editable',
  CREATE = 'create',
}
