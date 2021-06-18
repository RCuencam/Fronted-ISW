import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulationStepOneComponent } from './postulation-step-one.component';

describe('PostulationStepOneComponent', () => {
  let component: PostulationStepOneComponent;
  let fixture: ComponentFixture<PostulationStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulationStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulationStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
