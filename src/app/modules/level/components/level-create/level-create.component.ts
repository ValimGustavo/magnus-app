import { Level } from './../../../../../interfaces/level/level.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-level-create',
  templateUrl: './level-create.component.html',
  styleUrls: ['./level-create.component.scss'],
})
export class LevelCreateComponent implements OnInit {
  constructor(
    private router: Router,
    private levelService: LevelService,
    private formBuilder: FormBuilder
  ) {}

  formLevel: FormGroup;

  ngOnInit(): void {
    this.formLevel = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
    });
  }

  create(){

    const level = this.formLevel.value
    this.levelService.create(level).subscribe( response => {
      alert(response.id)
    }, error => {
      console.log(error)
    })
  }


  onCancel(){
    this.router.navigate(['/level'])
  }
}
