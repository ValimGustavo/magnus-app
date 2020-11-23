import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Patent } from 'src/interfaces/patent/patent.interface';
import { PatentService } from '../../services/patent.service';

@Component({
  selector: 'app-patent-form',
  templateUrl: './patent-form.component.html',
  styleUrls: ['./patent-form.component.scss']
})
export class PatentFormComponent implements OnInit {

  formPatent: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private patentService: PatentService,
    private activatedRoute: ActivatedRoute
  ) {}

  mode: string;

  patentData: Patent;

  ngOnInit(): void {
    this.patentData = this.activatedRoute.snapshot.data['patents'];

    let data: Patent;
    if (this.patentData) {
      this.mode = modes.INFO;
      data = this.patentData;
    } else {
      this.mode = modes.CREATE;
      data = {
       name: '',
       description: ''
      };
    }

    this.formPatent = this.formBuilder.group({
      name: [
        data.name,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      description: [
        data.description,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      
    });

    //TODO: criar evento de observaçao para poder desvincular esse codigo em um observable
    if (this.mode === modes.INFO) {
      if (this.mode === modes.INFO) {
        for (let control in this.formPatent.controls) {
          this.formPatent.controls[control].disable();
        }
      }
    }
  }

  editable() {
    this.mode = modes.EDITABLE;

    //TODO: transformar isso em um emit para poder desvincular os codigos
    if (this.mode === modes.EDITABLE) {
      for (let control in this.formPatent.controls) {
        this.formPatent.controls[control].enable();
      }
    }
  }

  delete() {
    this.patentService.delete(this.patentData).subscribe(
      (response) => {

        if(response.delete){
          alert('deletado com sucesso');
          this.router.navigate(['/patent'])
        }else{
          alert('encontramos problemas para deletar o ordem');
          this.router.navigate(['/patent'])
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
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
    const patent: Patent = this.formPatent.value;
    this.patentService.create(patent).subscribe(
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
      ...this.formPatent.value,
      id: this.patentData.id,
    };
    this.patentService.updatePatent(data).subscribe(
      (response) => {
        console.log(response);
        alert('a');
        this.router.navigate(['/patent'])
      },
      (error) => {
        console.log(error);
      }
    );
  }

  returnForList() {
    this.router.navigate(['/patent']);
  }
}

enum modes {
  INFO = 'info',
  EDITABLE = 'editable',
  CREATE = 'create',
}
