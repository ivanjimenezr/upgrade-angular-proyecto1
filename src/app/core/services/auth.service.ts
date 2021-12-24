import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService { 
	//Definimos el endpoint y los headers para poder realizar la petición
  endpoint: string = 'https://inmobiliaria-bootcamp.herokuapp.com'; 
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {}; //Aquí almacenaremos el usuario 

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/usuario/register`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  public signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/usuario/authenticate`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
				//Seteamos el token
        // this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          // this.router.navigate(['user-profile/' + res.msg._id]);
				//Volvemos al user-profile una vez ejecutada la función
        // })
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
	//
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }

  // User profile
  // getUserProfile(id: string): Observable<any> {
  //   let api = `${this.endpoint}/user-profile/${id}`;
    
  //   return this.http.get(api, { headers: this.headers }).pipe(
  //     map((res: any) => {
  //       return res || {}
  //     }),
  //     catchError(this.handleError)
  //   )
  // }

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