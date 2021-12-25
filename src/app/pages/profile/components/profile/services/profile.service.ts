import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {IcurrentUserId} from '../../../../../core/models/user'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  endpoint: string = 'https://inmobiliaria-bootcamp.herokuapp.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }

  getPisoId(id:String): Observable<any> {
    let api = `${this.endpoint}/usuario/${id}`;
    console.log('api: ',api)
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        console.log(res.data.usuarios)
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
  
  
  // findOne(id:String):Observable<any> {
  //   return this.http.get('https://inmobiliaria-bootcamp.herokuapp.com'+id).pipe(
  //     map((user:any)=>user)
  //   )
  
    // }
 


