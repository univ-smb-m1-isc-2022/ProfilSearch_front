import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAuth2RedirectHandlerComponentComponent } from './oauth2-redirect-handler-component.component';

describe('OAuth2RedirectHandlerComponentComponent', () => {
  let component: OAuth2RedirectHandlerComponentComponent;
  let fixture: ComponentFixture<OAuth2RedirectHandlerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OAuth2RedirectHandlerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OAuth2RedirectHandlerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
