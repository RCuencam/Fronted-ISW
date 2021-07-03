import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPersonalInformationEmployeerComponent } from './modify-personal-information-employeer.component';

describe('ModifyPersonalInformationEmployeerComponent', () => {
  let component: ModifyPersonalInformationEmployeerComponent;
  let fixture: ComponentFixture<ModifyPersonalInformationEmployeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPersonalInformationEmployeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPersonalInformationEmployeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
