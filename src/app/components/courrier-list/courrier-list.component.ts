import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { BoiteAuLettre } from 'src/app/models/boiteAuLettre';
import { Courrier } from 'src/app/models/courrier';
import { CourrierService } from 'src/app/services/courrier.service';


@Component({
  selector: 'app-courrier-list',
  templateUrl: './courrier-list.component.html',
  styleUrls: ['./courrier-list.component.css']
})
export class CourrierListComponent implements OnInit {
  @Input() boiteAuLettre: BoiteAuLettre;
  @Output() courrierVu = new EventEmitter<string>();
  public courriers: Courrier[];

  constructor(private courrierService: CourrierService) { }

  ngOnInit() {
    this.getCourriers();
  }

  async getCourriers() {  
    this.courriers  = await this.courrierService.getCourriersByIdMailBox(this.boiteAuLettre.id) as Courrier[];
    this.courriers.sort(this.compare);
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

  async courrierVuFromList() {
    this.courrierVu.next();
  }
  
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      if(propName=="boiteAuLettre") {
        this.getCourriers();
      }
    }
  }

}
