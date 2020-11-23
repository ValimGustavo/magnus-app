import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Level } from 'src/interfaces/level/level.interface';
import { LevelService } from '../services/level.service';

@Injectable({
  providedIn: 'root'
})
export class GetLevelResolve implements Resolve<Level[] | Level> {
  constructor(
    private levelService: LevelService,
    private router: ActivatedRoute
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Level[] | Level> {


    //const user = route.paramMap.get('user')
    const id = route.paramMap.get('id')

    if(id){
      return new Observable((subscriber) => {
        let level: Level;
  
        this.levelService.getLevelById(id).subscribe(
          (response) => {
            level = response;
            subscriber.next(level);
            subscriber.complete();
          },
          (error) => {
            subscriber.error(error);
          }
        );
      });
    }else{
      return new Observable((subscriber) => {
        let levels: Level[];
  
        this.levelService.listAll().subscribe(
          (response) => {
            levels = response;
            subscriber.next(levels);
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