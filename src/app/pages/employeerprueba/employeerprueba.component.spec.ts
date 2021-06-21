import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerpruebaComponent } from './employeerprueba.component';

describe('EmployeerpruebaComponent', () => {
  let component: EmployeerpruebaComponent;
  let fixture: ComponentFixture<EmployeerpruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeerpruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
