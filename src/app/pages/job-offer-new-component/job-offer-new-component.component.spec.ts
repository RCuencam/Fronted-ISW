import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferNewComponentComponent } from './job-offer-new-component.component';

describe('JobOfferNewComponentComponent', () => {
  let component: JobOfferNewComponentComponent;
  let fixture: ComponentFixture<JobOfferNewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferNewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
