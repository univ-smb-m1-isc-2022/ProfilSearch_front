import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCandidatureComponent } from './delete-candidature.component';

describe('DeleteCandidatureComponent', () => {
  let component: DeleteCandidatureComponent;
  let fixture: ComponentFixture<DeleteCandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCandidatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
