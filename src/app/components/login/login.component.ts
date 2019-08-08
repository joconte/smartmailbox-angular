import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpClientModule, HttpHeaders } from '@angular/common/http'
import { AccountService } from '../../services/account.service';
import { Login } from '../../models/login'
import { UtilisateurService } from '../../services/utilisateur.service';
import { Utilisateur } from '../../models/utilisateur';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public token;
  userData: Utilisateur;

  loginForm = new FormGroup({
    email: new FormControl('admin@contejonathan.net'),
    password: new FormControl('mydil34000')
  });

  login: boolean;

  constructor(private accountService: AccountService, private utilisateurService: UtilisateurService, private router: Router) {
    this.login = false;
  }

  ngOnInit() {
    if (this.accountService.isLoggedIn()) {
      this.router.navigateByUrl("/userDetails");
    }
  }

  async submitForm() {
    this.login = true;
    let resp = this.loginForm.value;
    let login: Login = new Login(resp.email, resp.password);
    let data = await this.accountService.login(login);
    this.token = data['token'];
    await this.accountService.setToken(this.token);
    this.router.navigateByUrl('/boiteAuLettres');
  }
}
