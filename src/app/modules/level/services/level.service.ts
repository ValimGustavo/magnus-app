import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Level } from 'src/interfaces/level/level.interface';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) { }

  create(level: Level){
    return this.http.post<Level>(environment.levelEndpoint, level)
  }

  listAll(){
    return this.http.get<Level[]>(environment.levelEndpoint)
  }

  getLevelById(id:string){
    return this.http.get<Level>(environment.levelEndpoint + '/' + id)
  }

  updateLevel(level:Level){
    return this.http.put<Level>(environment.levelEndpoint + '/' + level.id, level)
  }

  delete(level:Level){
    
    return this.http.delete<{delete: boolean}>(environment.levelEndpoint + '/' + level.id)
  }
}
