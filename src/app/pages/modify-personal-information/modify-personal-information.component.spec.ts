import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPersonalInformationComponent } from './modify-personal-information.component';

describe('ModifyPersonalInformationComponent', () => {
  let component: ModifyPersonalInformationComponent;
  let fixture: ComponentFixture<ModifyPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPersonalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
