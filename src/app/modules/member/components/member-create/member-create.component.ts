import { MemberService } from './../../services/member.service';
import { Member } from './../../../../../interfaces/member/member.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss']
})
export class MemberCreateComponent implements OnInit {

  formMember: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private memberService: MemberService
  ) { }
  
  ngOnInit(): void {
    this.formMember = this.formBuilder.group({
      firstName: ["Mario", Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      lastName: ["Bros", Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      contacts: this.formBuilder.group({
        phone: ["1111111111", Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]{10}")
      ])],
        cel: ["11111111111", Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]{11}")
      ])],
        email: ["mariobros@email.com", Validators.compose([
        Validators.required,
        Validators.email
      ])],
      }),
      address: this.formBuilder.group({
        street: ["Rua Ilha dos Bros", Validators.compose([
        Validators.required
      ])],
        number: [123, Validators.compose([
        Validators.required,
       // Validators.pattern("[0-9]+")
      ])],
        neighborhood: ["YARD", Validators.compose([
        Validators.required
      ])],
        city: ["Cogumelandia", Validators.compose([
        Validators.required
      ])]
      }),
      birthDate: ["01/01/1236", Validators.compose([
        Validators.required
      ])],
    }
    )
  }



  create(){
    const member:Member = this.formMember.value
    this.memberService.create(member).subscribe( response => {

      alert('registrado com sucesso ' + response.id )
    },
    error => {
      console.log(error)
    })
  }

  onCancel(){
    this.router.navigate(['/member'])
  }


}
