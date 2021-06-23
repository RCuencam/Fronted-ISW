import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePostulantOrEmployerComponent } from './choose-postulant-or-employer.component';

describe('ChoosePostulantOrEmployerComponent', () => {
  let component: ChoosePostulantOrEmployerComponent;
  let fixture: ComponentFixture<ChoosePostulantOrEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePostulantOrEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePostulantOrEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
