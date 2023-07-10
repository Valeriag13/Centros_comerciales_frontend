import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }

  getLogin(email:any,password:any):Observable<Login>{

    let body = {
      "email":email,
      "password": password,
    }
    let data = this.http.post<Login>(this.URL + 'Login',body)
    return data;
  }

  getRegistro(email:any,password:any, rol:any):Observable<Login>{

    let body = {
      "user":email,
      "password": password,
      "rol": rol
    }
    let data = this.http.post<Login>(this.URL + 'InsertUser',body)
    return data;
  }

  getEmail(email:any):Observable<Login>{

    let body = {
      "user":email,
    }
    let data = this.http.post<Login>(this.URL + 'ConsultEmail',body)
    return data;
  }
}
