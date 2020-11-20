import { Observable } from 'rxjs';
import { MemberService } from './../services/member.service';
import { Injectable } from '@angular/core';
import { Resolve, ResolveEnd } from '@angular/router';
import { Member } from 'src/interfaces/member/member.interface';

@Injectable({
  providedIn: 'root',
})
export class GetMembersResolve implements Resolve<Member[]> {
  constructor(private memberService: MemberService) {}

  resolve(): Observable<Member[]> {
    return new Observable((subscriber) => {
      let members: Member[];

      this.memberService.listAll().subscribe(
        (response) => {
          members = response;
          subscriber.next(members);
          subscriber.complete();
        },
        (error) => {
          subscriber.error(error)
        }
      );
    });
  }
}
