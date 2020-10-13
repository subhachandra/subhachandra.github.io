import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalSummaryComponent } from './profesional-summary.component';

describe('ProfesionalSummaryComponent', () => {
  let component: ProfesionalSummaryComponent;
  let fixture: ComponentFixture<ProfesionalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
