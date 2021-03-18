import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {environment} from 'src/environments/environment';
import { IUserRespond, Response } from '../interfaces/user';
import {catchError} from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {
    console.log(this.URL_FINAL)
   }
   //se obtiene url para llamada a la api
    URL_FINAL= environment.URL_BASE + environment.URL_ENDPOINT
    
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
          return throwError(
        'Something bad happened; please try again later.');
    }
// metodo que devuelve  todos los usuarios
    getUsers(){
      let header = new HttpHeaders()
      .set('Type-content','aplication/json')
      return this.http.get(this.URL_FINAL,{headers: header})
    }
//metodo que agrega un usuario nuevo
    addUser(user: IUserRespond): Observable<Response>{

      return this.http.post<Response>(this.URL_FINAL,user, {headers: new HttpHeaders({
        'Content-type':'application/jason'
      })
    })
      .pipe(catchError(this.handleError))

    }

}
