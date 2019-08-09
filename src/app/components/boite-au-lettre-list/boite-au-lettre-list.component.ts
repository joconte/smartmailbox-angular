import { Component, OnInit } from '@angular/core';
import { BoiteAuLettre } from '../../models/boiteAuLettre';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Utilisateur, Role } from 'src/app/models/utilisateur';
import { BoiteAuLettreService } from 'src/app/services/boite-au-lettre.service';
import { CourrierService } from 'src/app/services/courrier.service';
import { Courrier } from 'src/app/models/courrier';
import { timer } from 'rxjs';
import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'app-boite-au-lettre-list',
  templateUrl: './boite-au-lettre-list.component.html',
  styleUrls: ['./boite-au-lettre-list.component.css']
})
export class BoiteAuLettreListComponent implements OnInit {

  public isAdmin: boolean;
  public boiteAuLettres: BoiteAuLettre[];

  constructor(private utilisateurService: UtilisateurService, private boiteAuLettreService: BoiteAuLettreService, private courrierService: CourrierService) { }

  ngOnInit() {
    this.utilisateurService.getConnectedUserData()
      .subscribe(
        data => {
          let user: Utilisateur = data as Utilisateur;
          let isAdmin: boolean = user.role.toString() === Role[Role.Admin];
          this.isAdmin = isAdmin;
        }
      );
    this.getMyBoiteAuLettres();
  }



  async getAllBoiteAuLettres() {
    this.boiteAuLettres = await this.boiteAuLettreService.getAllBoiteAuLettres() as BoiteAuLettre[];
    this.boiteAuLettres.sort(this.compare);
    for (let i = 0; i < this.boiteAuLettres.length; i++) {
      let courriers: Courrier[] = await this.courrierService.getCourriersByIdMailBox(this.boiteAuLettres[i].id) as Courrier[];
      this.boiteAuLettres[i].courriersTotal = courriers.length;
      this.boiteAuLettres[i].courriersNonVu = courriers.filter(courrier => !courrier.vu).length;
    }
  }

  async getMyBoiteAuLettres() {
    let tempBoiteAuLettre: BoiteAuLettre[] = await this.boiteAuLettreService.getBoiteAuLettres() as BoiteAuLettre[];
    tempBoiteAuLettre.sort(this.compare);
    for (let i = 0; i < tempBoiteAuLettre.length; i++) {
      let courriers: Courrier[] = await this.courrierService.getCourriersByIdMailBox(tempBoiteAuLettre[i].id) as Courrier[];
      tempBoiteAuLettre[i].courriersTotal = courriers.length;
      tempBoiteAuLettre[i].courriersNonVu = courriers.filter(courrier => !courrier.vu).length;
    }
    if (this.boiteAuLettres == undefined) {
      this.boiteAuLettres = tempBoiteAuLettre;
    }
    else {
      for (let i = 0; i < this.boiteAuLettres.length; i++) {
        if (!Constants.equalsBoiteAuLettre(this.boiteAuLettres[i], tempBoiteAuLettre[i])) {
          this.boiteAuLettres[i] = tempBoiteAuLettre[i];
        }
      }
    }

    /*
    this.boiteAuLettres = await this.boiteAuLettreService.getBoiteAuLettres() as BoiteAuLettre[];
    this.boiteAuLettres.sort(this.compare);
    for (let i = 0; i < this.boiteAuLettres.length; i++) {
      let courriers: Courrier[] = await this.courrierService.getCourriersByIdMailBox(this.boiteAuLettres[i].id) as Courrier[];
      this.boiteAuLettres[i].courriersTotal = courriers.length;
      this.boiteAuLettres[i].courriersNonVu = courriers.filter(courrier => !courrier.vu).length;
    }*/
  }

  compare(a: BoiteAuLettre, b: BoiteAuLettre) {
    if (a.id > b.id) {
      return -1;
    }
    if (a.id < b.id) {
      return 1;
    }
    return 0;
  }




}
