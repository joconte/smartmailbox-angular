import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AccountService } from '../services/account.service';
import { Constants } from '../models/constants';
import { BoiteAuLettre } from '../models/boiteAuLettre';

@Injectable({
  providedIn: 'root'
})
export class BoiteAuLettreService {

  constructor(private http: HttpClient, private accountService: AccountService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accountService.getToken()}`
    })
  }

  async getAllBoiteAuLettres(){
    return await this.http.get(Constants.getAllBoiteAuLettres, this.httpOptions).toPromise();
  }

  async getBoiteAuLettres(){
    return await this.http.get(Constants.getBoiteAuLettres, this.httpOptions).toPromise();
  }
  
  async getBoiteAuLettreToken(numeroSerie: string) {
    return await this.http.get(Constants.Stringformat(Constants.getBoiteAuLettreTokenBySerialNumber,numeroSerie), this.httpOptions).toPromise();
  }

  async getBoiteAuLettreById(id: number) {
    return await this.http.get(Constants.Stringformat(Constants.getBoiteAuLettreById,id),this.httpOptions).toPromise();
  }
}
