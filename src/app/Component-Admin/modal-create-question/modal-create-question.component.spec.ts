import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateQuestionComponent } from './modal-create-question.component';

describe('ModalCreateQuestionComponent', () => {
  let component: ModalCreateQuestionComponent;
  let fixture: ComponentFixture<ModalCreateQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
