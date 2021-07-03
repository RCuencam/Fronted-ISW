import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPersonalInformationPostulantComponent } from './modify-personal-information-postulant.component';

describe('ModifyInformationPostulantComponent', () => {
  let component: ModifyPersonalInformationPostulantComponent;
  let fixture: ComponentFixture<ModifyPersonalInformationPostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPersonalInformationPostulantComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPersonalInformationPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
