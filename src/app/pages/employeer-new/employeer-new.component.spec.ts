import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerNewComponent } from './employeer-new.component';

describe('EmployeerNewComponent', () => {
  let component: EmployeerNewComponent;
  let fixture: ComponentFixture<EmployeerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeerNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
