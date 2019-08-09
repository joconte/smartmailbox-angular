import { Component, OnInit, Input } from '@angular/core';
import { BoiteAuLettre } from 'src/app/models/boiteAuLettre';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { BoiteAuLettreService } from 'src/app/services/boite-au-lettre.service';
import { CourrierService } from 'src/app/services/courrier.service';
import { Courrier } from 'src/app/models/courrier';

@Component({
  selector: 'app-boite-au-lettre',
  templateUrl: './boite-au-lettre.component.html',
  styleUrls: ['./boite-au-lettre.component.css']
})
export class BoiteAuLettreComponent implements OnInit {
  @Input() boiteAuLettre: BoiteAuLettre;
  @Input() isAdmin: boolean;
  constructor(private utilisateurService: UtilisateurService, private boiteAuLettreService: BoiteAuLettreService, private courrierService: CourrierService) { }

  ngOnInit() {
  }


  async postNewMail() {
    let loaded: boolean = await this.courrierService.postCourrier(this.boiteAuLettre);
    let boiteAuLettreInDb: BoiteAuLettre = await this.boiteAuLettreService.getBoiteAuLettreById(this.boiteAuLettre.id) as BoiteAuLettre;
    let courriers: Courrier[] = await this.courrierService.getCourriersByIdMailBox(boiteAuLettreInDb.id) as Courrier[];
    boiteAuLettreInDb.courriersTotal = courriers.length;
    boiteAuLettreInDb.courriersNonVu = courriers.filter(courrier => !courrier.vu).length;
    boiteAuLettreInDb.opened = this.boiteAuLettre.opened;
    this.boiteAuLettre = boiteAuLettreInDb;
    
  }


}
