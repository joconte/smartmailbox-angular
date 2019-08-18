import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Courrier } from 'src/app/models/courrier';
import { CourrierService } from 'src/app/services/courrier.service';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-courrier',
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.css']
})
export class CourrierComponent implements OnInit {
  @Input() courrier: Courrier;
  @Output() courrierVu = new EventEmitter<string>();
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  constructor(private courrierService: CourrierService) { }

  ngOnInit() {
  }

  async putCourrierVu() {
    let success = await this.courrierService.putCourrierVu(this.courrier) as Courrier;
    this.courrier.vu = success.vu;
    this.courrierVu.next();
  }
}
