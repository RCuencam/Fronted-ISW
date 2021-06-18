import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulationStepTreeComponent } from './postulation-step-tree.component';

describe('PostulationStepTreeComponent', () => {
  let component: PostulationStepTreeComponent;
  let fixture: ComponentFixture<PostulationStepTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulationStepTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulationStepTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
