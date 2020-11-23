import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/interfaces/order/order.interface';
import { Patent } from 'src/interfaces/patent/patent.interface';

@Component({
  selector: 'app-patent-read',
  templateUrl: './patent-read.component.html',
  styleUrls: ['./patent-read.component.scss']
})
export class PatentReadComponent implements OnInit {

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  //TODO: Criar metodos de click para ver informaçoes
  //Mlehorar html


  patents: Patent[]
  ngOnInit(): void {  
    this.patents = this.activateRouter.snapshot.data['patents']
  }


  showPatent(id: string){
    this.router.navigate(['/patent/', id])
  }

}
