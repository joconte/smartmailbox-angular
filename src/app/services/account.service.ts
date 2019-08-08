import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from  '../models/login';
import { Constants } from '../models/constants';


@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit{
  
  storageKey: string = 'smartMailBox-jwt';

  private token;

  constructor(private http: HttpClient) { }

  async setToken(token: string) {
    await localStorage.setItem(this.storageKey, token);
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem(this.storageKey);
  }



  ngOnInit() {
    
  }


  async login (login: Login) {
     return this.http.post<Login>(Constants.loginUrl,login).toPromise();
  }

}
