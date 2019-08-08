import { Component, OnInit, Input } from '@angular/core';
import { BoiteAuLettre } from 'src/app/models/boiteAuLettre';
import { Courrier } from 'src/app/models/courrier';
import { CourrierService } from 'src/app/services/courrier.service';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-courrier',
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.css']
})
export class CourrierComponent implements OnInit {
  @Input() boiteAuLettre: BoiteAuLettre;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  public courriers: Courrier[];

  constructor(private courrierService: CourrierService) { }

  ngOnInit() {
    this.getCourriers();
  }

  async getCourriers() {  
    this.courriers  = await this.courrierService.getCourriersByIdMailBox(this.boiteAuLettre.id) as Courrier[];
    this.courriers.sort(this.compare);
  }

  async putCourrierVu(courrier: Courrier) {
    await this.courrierService.putCourrierVu(courrier);
  }

  compare(a: Courrier, b: Courrier) {
    if (a.id > b.id) {
      return -1;
    }
    if (a.id < b.id) {
      return 1;
    }
    return 0;
  }

}
