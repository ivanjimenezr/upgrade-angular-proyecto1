import { Injectable } from '@angular/core';
import { User, IuserLogin, IcurrentUserId } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService { 
	//Definimos el endpoint y los headers para poder realizar la petición
  public endpoint: string = 'https://inmobiliaria-bootcamp.herokuapp.com'; 
  public headers = new HttpHeaders().set('Content-Type', 'application/json');
  public currentUser : Object = {}; //Aquí almacenaremos el login => token + ID
  public currentUserId! : IcurrentUserId

  constructor(private http: HttpClient,public router: Router) { /* Empty */}

  // Sign-up
  signUp(user: User): Observable<any> {
    return this.http.post(`${this.endpoint}/usuario/register`, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  public signIn(iuserLogin: IuserLogin) {

    return this.http.post<any>(`${this.endpoint}/usuario/authenticate`, iuserLogin).subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        
				//Seteamos el token
        this.getUserProfile(res._id).subscribe((res) => {
          // this.currentUser = res.data.usuarios._id;
          // console.log(res.data.usuarios._id)
          // this.router.navigate(['profile/' + res.data.usuarios._id]);
          this.currentUser = res;
          this.currentUserId = res.data.usuarios._id
          
          this.router.navigate(['profile/' + this.currentUserId]);
          
          
				//Volvemos al user-profile una vez ejecutada la función
        })
      })
  }
  public idUsuario = this.currentUserId
  public getToken() {
    return localStorage.getItem('access_token');
  }

  

  // Logout
  public doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }

	// Comprobar si el usuario tiene Token
  get isLoggedIn(): boolean {
  // public isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null ? true : false;
  }

  

  // User profile
  getUserProfile(id: string): Observable<any> {
    let api = `${this.endpoint}/usuario/${id}`;
    
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
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