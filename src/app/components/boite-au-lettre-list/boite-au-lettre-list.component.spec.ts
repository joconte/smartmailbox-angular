import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteAuLettreListComponent } from './boite-au-lettre-list.component';

describe('BoiteAuLettreComponent', () => {
  let component: BoiteAuLettreListComponent;
  let fixture: ComponentFixture<BoiteAuLettreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteAuLettreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteAuLettreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
