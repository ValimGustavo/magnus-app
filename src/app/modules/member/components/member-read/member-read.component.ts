import { MemberService } from './../../services/member.service';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/interfaces/member/member.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-read',
  templateUrl: './member-read.component.html',
  styleUrls: ['./member-read.component.scss']
})
export class MemberReadComponent implements OnInit {

  constructor(
    private memberService: MemberService,
    private activateRouter: ActivatedRoute
  ) { }

  members: Member[]
  ngOnInit(): void {
  
    this.members = this.activateRouter.snapshot.data['members']

  }

}
