import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProfessionalProfileComponent } from './modify-professional-profile.component';

describe('ModifyProfessionalProfileComponent', () => {
  let component: ModifyProfessionalProfileComponent;
  let fixture: ComponentFixture<ModifyProfessionalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyProfessionalProfileComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyProfessionalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
