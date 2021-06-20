import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedPostulantComponent } from './approved-postulant.component';

describe('ApprovedPostulantComponent', () => {
  let component: ApprovedPostulantComponent;
  let fixture: ComponentFixture<ApprovedPostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedPostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
