import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  formulario: FormGroup

  constructor(

    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.formulario = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.service.save(this.formulario.value).subscribe(result => this.onSuccess(), error => this.onError());

  }

  onCancel(){
    this.location.back();
  }

  onSuccess()
  {
    this._snackBar.open("Curso salvo com sucesso", '', {duration: 5000});
    this.onCancel();
  }

  private onError()
  {
    this._snackBar.open("Erro ao salvar curso", '', {duration: 3000});
  }
}
