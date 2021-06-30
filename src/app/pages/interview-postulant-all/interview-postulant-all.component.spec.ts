import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewPostulantAllComponent } from './interview-postulant-all.component';

describe('InterviewPostulantAllComponent', () => {
  let component: InterviewPostulantAllComponent;
  let fixture: ComponentFixture<InterviewPostulantAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewPostulantAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewPostulantAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
