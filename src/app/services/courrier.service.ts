import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AccountService } from './account.service';
import { Constants } from '../models/constants';
import { Courrier } from '../models/courrier';
import { Observable } from 'rxjs';
import { BoiteAuLettre } from '../models/boiteAuLettre';
import { BoiteAuLettreService } from './boite-au-lettre.service';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {

  constructor(private http: HttpClient, private accountService: AccountService, private boiteAuLettreService: BoiteAuLettreService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accountService.getToken()}`
    })
  }

  async getCourriersByIdMailBox(idMailBox: number) {
    return await this.http.get(Constants.Stringformat(Constants.getCourrierByIdMailBox, idMailBox), this.httpOptions).toPromise();
  }

  postCourrierFinish: boolean;

  async postCourrier(boiteAuLettre: BoiteAuLettre) {
    let tokenObj;
    let asyncResult = await this.boiteAuLettreService.getBoiteAuLettreToken(boiteAuLettre.numeroSerie);
    tokenObj = {
      token: asyncResult['token']
    };
    let courrier: Courrier = await this.http.post(Constants.postCourrier, tokenObj, this.httpOptions).toPromise() as Courrier;
    return courrier!=undefined ? true : false;
  }

  async putCourrierVu(courrier: Courrier) {
    return await this.http.put(Constants.Stringformat(Constants.putCourrierVu, courrier.id),null, this.httpOptions).toPromise();
  }

}
