import { PatentService } from './../../services/patent.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patent-create',
  templateUrl: './patent-create.component.html',
  styleUrls: ['./patent-create.component.scss'],
})
export class PatentCreateComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private patentService: PatentService
  ) {}

  formPatent: FormGroup;
  ngOnInit(): void {
    this.formPatent = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
    });
  }

  create() {
    const patent = this.formPatent.value;
    this.patentService.create(patent).subscribe(
      (response) => {
        alert(response.id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onCancel() {
    this.router.navigate(['/patent']);
  }
}
