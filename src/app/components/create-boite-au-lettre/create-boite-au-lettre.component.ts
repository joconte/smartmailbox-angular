import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BoiteAuLettreService } from 'src/app/services/boite-au-lettre.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-boite-au-lettre',
  templateUrl: './create-boite-au-lettre.component.html',
  styleUrls: ['./create-boite-au-lettre.component.css']
})
export class CreateBoiteAuLettreComponent implements OnInit {
  @Output() createdMailBox = new EventEmitter<string>();

  boiteAuLettreCreate: FormGroup = new FormGroup({
    serialNumber: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private boiteAuLettreService: BoiteAuLettreService) { }

  ngOnInit() {
  }

  async createMailBox() {
    await this.boiteAuLettreService.postCreateMailBox(this.boiteAuLettreCreate.controls['serialNumber'].value, this.boiteAuLettreCreate.controls['description'].value);
    this.createdMailBox.next();
  }

}
