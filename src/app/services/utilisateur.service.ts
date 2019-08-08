import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { AccountService } from './account.service';
import { Constants } from '../models/constants';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurRegister } from '../models/utilisateurRegister';
import { ResponseError } from '../models/responseError';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient, private accountService: AccountService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accountService.getToken()}`
    })
  }

  getConnectedUserData(){
    return this.http.get(Constants.getConnectedUserData, this.httpOptions);
  }

  async putSaveUserData(user: UtilisateurRegister) {
    let errorReponse: ResponseError = new ResponseError();
    let response = await this.http.put(Constants.putSaveUserData,user,this.httpOptions).toPromise().catch(
      err => errorReponse.errors = err.error
    );
    errorReponse.response = response;
    return errorReponse;
  }
}
