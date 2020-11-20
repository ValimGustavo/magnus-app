import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Member } from 'src/interfaces/member/member.interface';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss'],
})
export class MemberFormComponent implements OnInit {
  formMember: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute
  ) {}

  mode: string;

  memberData: Member;

  ngOnInit(): void {
    this.memberData = this.activatedRoute.snapshot.data['member'];

    let data: Member;
    if (this.memberData) {
      this.mode = modes.INFO;
      data = this.memberData;
    } else {
      this.mode = modes.CREATE;
      data = {
        firstName: '',
        lastName: '',
        birthDate: new Date(''),

        contacts: {
          phone: '',
          cel: '',
          email: '',
        },

        address: {
          city: '',
          neighborhood: '',
          number: '',
          street: '',
        },
      };
    }

    this.formMember = this.formBuilder.group({
      firstName: [
        data.firstName,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      lastName: [
        data.lastName,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      contacts: this.formBuilder.group({
        phone: [
          data.contacts.phone,
          Validators.compose([
            Validators.required,
            Validators.pattern('[0-9]{10}'),
          ]),
        ],
        cel: [
          data.contacts.cel,
          Validators.compose([
            Validators.required,
            Validators.pattern('[0-9]{11}'),
          ]),
        ],
        email: [
          data.contacts.email,
          Validators.compose([Validators.required, Validators.email]),
        ],
      }),
      address: this.formBuilder.group({
        street: [
          data.address.street,
          Validators.compose([Validators.required]),
        ],
        number: [
          data.address.number,
          Validators.compose([
            Validators.required,
            // Validators.pattern("[0-9]+")
          ]),
        ],
        neighborhood: [
          data.address.neighborhood,
          Validators.compose([Validators.required]),
        ],
        city: [data.address.city, Validators.compose([Validators.required])],
      }),
      birthDate: [data.birthDate, Validators.compose([Validators.required])],
    });

    //TODO: criar evento de observaçao para poder desvincular esse codigo em um observable
    if (this.mode === modes.INFO) {
      if (this.mode === modes.INFO) {
        for (let control in this.formMember.controls) {
          this.formMember.controls[control].disable();
        }
      }
    }
  }

  editable() {
    this.mode = modes.EDITABLE;

    //TODO: transformar isso em um emit para poder desvincular os codigos
    if (this.mode === modes.EDITABLE) {
      for (let control in this.formMember.controls) {
        this.formMember.controls[control].enable();
      }
    }
  }

  get isEditable() {
    switch (this.mode) {
      case modes.INFO:
        return true;
      case modes.EDITABLE:
        return false;
      case modes.CREATE:
        return false;
    }
  }
  create() {
    const member: Member = this.formMember.value;
    this.memberService.create(member).subscribe(
      (response) => {
        alert('registrado com sucesso ' + response.id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  update() {
    const data = {
      ...this.formMember.value,
      id: this.memberData.id,
    };
    this.memberService.updateMember(data).subscribe(
      (response) => {
        console.log(response)
        alert('a')
      },
      (error) => {
        console.log(error)
      }
    );
  }

  returnForList(){
    this.router.navigate(['/member'])
  }
}

enum modes {
  INFO = 'info',
  EDITABLE = 'editable',
  CREATE = 'create',
}
