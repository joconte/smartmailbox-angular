import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteAuLettreComponent } from './boite-au-lettre.component';

describe('BoiteAuLettreComponent', () => {
  let component: BoiteAuLettreComponent;
  let fixture: ComponentFixture<BoiteAuLettreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteAuLettreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteAuLettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
