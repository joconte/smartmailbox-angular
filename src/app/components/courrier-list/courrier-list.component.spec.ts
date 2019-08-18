import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierListComponent } from './courrier-list.component';

describe('CourrierListComponent', () => {
  let component: CourrierListComponent;
  let fixture: ComponentFixture<CourrierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourrierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
