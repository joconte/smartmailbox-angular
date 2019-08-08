import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'smartmailbox-angular';

  constructor(public accountService:AccountService, private router: Router) {}

  ngOnInit() {
    if(this.accountService.isLoggedIn()) {
      this.router.navigateByUrl("/boiteAuLettres");
    }
    else {
      this.router.navigateByUrl("/login");
    }
  }
}
