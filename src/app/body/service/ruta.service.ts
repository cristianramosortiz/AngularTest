import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioInfo } from '../interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class RutaService {

  private apiurl: string = 'https://jsonplaceholder.typicode.com/';


  constructor( private http: HttpClient ) {}

    buscarUsuarios(termino: String): Observable<UsuarioInfo[]> {
      const url = `${ this.apiurl }users?q=${ termino }`;
      return this.http.get<UsuarioInfo[]>( url );
    }
}
