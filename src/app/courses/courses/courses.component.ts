import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service'
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>; //quando coloca $ no final da variavel quer dizer que é um observable e não um subscribe

  displayedColumns = ['name', 'category', 'actions']

  //coursesService: CoursesService; antes de utilizar o modo http

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private roteador: Router,
    private rotaAtual: ActivatedRoute
    ) {
    //this.courses = [] posso iniciar a variavel aqui ou la fora como foi feito = courses: Course[] = [];
    //this.coursesService = new CoursesService(); antes de utilizar o modo http
     this.courses$ = this.coursesService.lista()
     .pipe(
      catchError(error => {
        //alert("Não foi possivel achar dados na tabela"); funciona mas fica mais feinho
        this.Erro('Erro ao carregar cursos.');
        return of([]);
      })
     );
  }

  Erro(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
    //this.courses = this.coursesService.lista(); posso passar no ngOnInit também a diferença é que no ngOnInit essa linha de texto so exeecutaria quando o componente fosse inicializado no html
  }

  onAdd(){
    //console.log('Botão apertado')

    this.roteador.navigate(['formulario'], {relativeTo: this.rotaAtual})
  }

}
