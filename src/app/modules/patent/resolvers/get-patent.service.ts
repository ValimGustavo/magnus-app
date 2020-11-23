import { Patent } from './../../../../interfaces/patent/patent.interface';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PatentService } from '../services/patent.service';

@Injectable({
  providedIn: 'root'
})
export class GetPatentService {
  constructor(
    private patentService: PatentService,
    private router: ActivatedRoute
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Patent[] | Patent> {


    //const user = route.paramMap.get('user')
    const id = route.paramMap.get('id')

    if(id){
      return new Observable((subscriber) => {
        let patent: Patent;
  
        this.patentService.getPatentById(id).subscribe(
          (response) => {
            patent = response;
            subscriber.next(patent);
            subscriber.complete();
          },
          (error) => {
            subscriber.error(error);
          }
        );
      });
    }else{
      return new Observable((subscriber) => {
        let patents: Patent[];
  
        this.patentService.listAll().subscribe(
          (response) => {
            patents = response;
            subscriber.next(patents);
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
