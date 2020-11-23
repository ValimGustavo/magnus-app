import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Level } from 'src/interfaces/level/level.interface';
import { Patent } from 'src/interfaces/patent/patent.interface';

@Injectable({
  providedIn: 'root'
})
export class PatentService {

  constructor(private http: HttpClient) { }


  create(patent:Patent){
    
    return this.http.post<Patent>(environment.patentEndpoint, patent)
  }

  listAll(){
    return this.http.get<Patent[]>(environment.patentEndpoint)
  }

  getPatentById(id:string){
    return this.http.get<Patent>(environment.patentEndpoint + '/' + id)
  }

  updatePatent(patent:Level){
    
    return this.http.put<Patent>(environment.patentEndpoint + '/' + patent.id, patent)
  }

  delete(patent: Patent){
    
    return this.http.delete<{delete: boolean}>(environment.patentEndpoint + '/' + patent.id)
  }
}
