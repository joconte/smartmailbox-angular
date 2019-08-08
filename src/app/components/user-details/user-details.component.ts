import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'
import { Utilisateur } from '../../models/utilisateur';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Router } from '@angular/router';
import { UtilisateurRegister } from 'src/app/models/utilisateurRegister';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: FormGroup;
  public user: Utilisateur;

  constructor(private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit() {
    this.utilisateurService.getConnectedUserData()
      .subscribe(
        data => {
          this.user = data as Utilisateur;
          this.userDetails = new FormGroup({
            firstName: new FormControl(this.user.firstName),
            lastName: new FormControl(this.user.lastName),
            email: new FormControl(this.user.email),
          });
        },
        err => console.log(err)
      );
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  async saveUserDetails() {
    this.resetErrorMessage();
    this.user.firstName = this.userDetails.controls['firstName'].value;
    this.user.lastName = this.userDetails.controls['lastName'].value;
    this.user.email = this.userDetails.controls['email'].value;
    let objectToSend: UtilisateurRegister = new UtilisateurRegister(this.user);
    let response = await this.utilisateurService.putSaveUserData(objectToSend);
    if (response.errors !== undefined) {
      const entries = Object.entries(response.errors);
      for (const [errorLabel, errorMessage] of entries) {
        let elements = document.getElementsByClassName(errorLabel) as HTMLCollectionOf<HTMLElement>;
        let element = elements[0];
        element.innerHTML = errorMessage[0];
        element.style.display = "block";
        element.style.color = "red";
      }
    }
    else {
      this.router.navigateByUrl("/boiteAuLettres");
    }
  }

  resetErrorMessage() {
    let elements = document.getElementsByClassName("errorMessage") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  }

}

