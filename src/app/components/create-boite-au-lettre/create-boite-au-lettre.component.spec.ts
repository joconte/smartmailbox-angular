import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoiteAuLettreComponent } from './create-boite-au-lettre.component';

describe('CreateBoiteAuLettreComponent', () => {
  let component: CreateBoiteAuLettreComponent;
  let fixture: ComponentFixture<CreateBoiteAuLettreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBoiteAuLettreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoiteAuLettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
