import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypostulationsComponent } from './mypostulations.component';

describe('MypostulationsComponent', () => {
  let component: MypostulationsComponent;
  let fixture: ComponentFixture<MypostulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypostulationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypostulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
