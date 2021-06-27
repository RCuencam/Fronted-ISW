import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewsPostulantApiComponent } from './interviews-postulant-api.component';

describe('InterviewsPostulantApiComponent', () => {
  let component: InterviewsPostulantApiComponent;
  let fixture: ComponentFixture<InterviewsPostulantApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewsPostulantApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewsPostulantApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
