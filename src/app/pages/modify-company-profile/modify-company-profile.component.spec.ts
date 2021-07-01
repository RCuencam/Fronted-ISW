import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCompanyProfileComponent } from './modify-company-profile.component';

describe('ModifyCompanyProfileComponent', () => {
  let component: ModifyCompanyProfileComponent;
  let fixture: ComponentFixture<ModifyCompanyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCompanyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCompanyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
