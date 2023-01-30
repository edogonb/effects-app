import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers():any{
     return this.http.get(`${ this.url }/users?per_page=6&&delay=1000`)
        .pipe(
          map ( (resp: any)  => resp.data )
        );
  };

  getUserById( id: string ):any{
    return this.http.get(`${ this.url }/users/${ id }`)
       .pipe(
         map ( (resp: any)  => {
          return resp.data;
        } )
       );
 };

}
