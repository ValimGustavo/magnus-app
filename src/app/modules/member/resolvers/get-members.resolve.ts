import { Observable } from 'rxjs';
import { MemberService } from '../services/member.service';
import { Injectable } from '@angular/core';
import {
  ActivationEnd,
  Resolve,
  ResolveEnd,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Member } from 'src/interfaces/member/member.interface';

@Injectable({
  providedIn: 'root',
})
export class GetMembersResolve implements Resolve<Member[] | Member> {
  constructor(
    private memberService: MemberService,
    private router: ActivatedRoute
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Member[] | Member> {


    //const user = route.paramMap.get('user')
    const id = route.paramMap.get('id')

    if(id){
      return new Observable((subscriber) => {
        let member: Member;
  
        this.memberService.getMemberById(id).subscribe(
          (response) => {
            member = response;
            subscriber.next(member);
            subscriber.complete();
          },
          (error) => {
            subscriber.error(error);
          }
        );
      });
    }else{
      return new Observable((subscriber) => {
        let members: Member[];
  
        this.memberService.listAll().subscribe(
          (response) => {
            members = response;
            subscriber.next(members);
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
