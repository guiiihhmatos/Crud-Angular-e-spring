import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //private readonly API = '/assets/courses.json' //Por enquanto esse é o caminho pois não temos back-end ainda -- atributo
  private readonly API = 'api/courses'

  constructor(private httpCliente: HttpClient) { } //injeção de dependencia vamos precisar colocar o import do httpclientemodule no app-module

  lista() // O Course indica qual tipo vai ser esse return desse metodo
  {
    return this.httpCliente.get<Course[]>(this.API)
    .pipe(

      first(), //Vai pegar apenas a primeira informação passa pelo http ou podemos fazer um take(1), para pegar a primeira ou um take(4) para pegar a 4
      //delay(3000),
      tap(cursos => console.log(cursos)) //o nome cursos pode ser qualquer um nessa chamada, inclusive pamonha tap(pamonha => console.log(pamonha))

    ); //as informações vão passar por esse "cano" = pipe em inglês. E vão poder ser manipuladas
  }

  save(curso: Course)
  {
    return this.httpCliente.post<Course>(this.API, curso).pipe(first());
  }
  /*
  lista() : Course[] // O Course indica qual tipo vai ser esse return desse metodo
  {
    return [
      { _id: '1', name: 'Angular', category: 'front-end'}
    ];
  }
  */ //posso declarar dessa maneira mas vamos usar o httpclient la em cima pois vamos pegar o que o usario digitar
}

//parte de cima envolve HTTP
//Colocar o httpClient evita erros de compilação mas sem ele pode funcionar. Apenas utilizado para não ocorrer erros na compilação

//Services são utilizados para a manipulação de dados e dados para que o componente receba esses dados de maneira simples e boa, Os services ajudam os componentes


//metodos HTTPClient

//Get usado quando vamos pegar informações
//Post usado quando vamos criar informações
//Put usado quando vamos fazer um update ou um atualização
//delete para pooder pedir a remoção
//Patch quando vamos fazer update mas passamos parcealmente as informações
//Request é um metodo generico, ou seja, posso utilizar todos esses metodos de cima

