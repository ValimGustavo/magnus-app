import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Level } from 'src/interfaces/level/level.interface';
import { Order } from 'src/interfaces/order/order.interface';

@Component({
  selector: 'app-level-read',
  templateUrl: './level-read.component.html',
  styleUrls: ['./level-read.component.scss']
})
export class LevelReadComponent implements OnInit {

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  //TODO: Criar metodos de click para ver informaçoes
  //Mlehorar html


  levels: Level[]
  ngOnInit(): void {  
    this.levels = this.activateRouter.snapshot.data['levels']
  }


  showLevel(id: string){
    this.router.navigate(['/level/', id])
  }


}
