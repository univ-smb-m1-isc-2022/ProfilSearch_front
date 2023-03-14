import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureCardComponent } from './candidature-card.component';

describe('CandidatureCardComponent', () => {
  let component: CandidatureCardComponent;
  let fixture: ComponentFixture<CandidatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatureCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
