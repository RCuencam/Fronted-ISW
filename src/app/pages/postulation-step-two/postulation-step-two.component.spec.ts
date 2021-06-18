
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulationStepTwoComponent } from './postulation-step-two.component';

describe('PostulationStepTwoComponent', () => {
  let component: PostulationStepTwoComponent;
  let fixture: ComponentFixture<PostulationStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulationStepTwoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulationStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
