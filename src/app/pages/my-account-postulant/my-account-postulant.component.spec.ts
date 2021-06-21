import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountPostulantComponent } from './my-account-postulant.component';

describe('MyAccountPostulantComponent', () => {
  let component: MyAccountPostulantComponent;
  let fixture: ComponentFixture<MyAccountPostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountPostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
