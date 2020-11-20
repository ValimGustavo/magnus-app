import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/interfaces/member/member.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  create(member:Member):Observable<Member>{
    return this.http.post<Member>(environment.memberEndpoint, member)
  }

  listAll(){
    return this.http.get<Member[]>(environment.memberEndpoint)
  }
}
