import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavPostulantComponent } from './main-nav-postulant.component';

describe('MainNavPostulantComponent', () => {
  let component: MainNavPostulantComponent;
  let fixture: ComponentFixture<MainNavPostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavPostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
