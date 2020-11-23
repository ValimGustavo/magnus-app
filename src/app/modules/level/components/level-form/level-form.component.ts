import { Level } from './../../../../../interfaces/level/level.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-level-form',
  templateUrl: './level-form.component.html',
  styleUrls: ['./level-form.component.scss']
})
export class LevelFormComponent implements OnInit {

  formLevel: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private levelService: LevelService,
    private activatedRoute: ActivatedRoute
  ) {}

  mode: string;

  levelData: Level;

  ngOnInit(): void {
    this.levelData = this.activatedRoute.snapshot.data['levels'];

    let data: Level;
    if (this.levelData) {
      this.mode = modes.INFO;
      data = this.levelData;
    } else {
      this.mode = modes.CREATE;
      data = {
       name: '',
       description: ''
      };
    }

    this.formLevel = this.formBuilder.group({
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
        for (let control in this.formLevel.controls) {
          this.formLevel.controls[control].disable();
        }
      }
    }
  }

  editable() {
    this.mode = modes.EDITABLE;

    //TODO: transformar isso em um emit para poder desvincular os codigos
    if (this.mode === modes.EDITABLE) {
      for (let control in this.formLevel.controls) {
        this.formLevel.controls[control].enable();
      }
    }
  }

  delete() {
    this.levelService.delete(this.levelData).subscribe(
      (response) => {

        if(response.delete){
          alert('deletado com sucesso');
          this.router.navigate(['/level'])
        }else{
          alert('encontramos problemas para deletar o ordem');
          this.router.navigate(['/level'])
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
    const level: Level = this.formLevel.value;
    this.levelService.create(level).subscribe(
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
      ...this.formLevel.value,
      id: this.levelData.id,
    };
    this.levelService.updateLevel(data).subscribe(
      (response) => {
        console.log(response);
        alert('a');
        this.router.navigate(['/level'])
      },
      (error) => {
        console.log(error);
      }
    );
  }

  returnForList() {
    this.router.navigate(['/level']);
  }
}

enum modes {
  INFO = 'info',
  EDITABLE = 'editable',
  CREATE = 'create',
}
