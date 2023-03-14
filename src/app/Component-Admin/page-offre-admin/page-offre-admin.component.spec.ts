import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOffreAdminComponent } from './page-offre-admin.component';

describe('PageOffreAdminComponent', () => {
  let component: PageOffreAdminComponent;
  let fixture: ComponentFixture<PageOffreAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOffreAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOffreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
