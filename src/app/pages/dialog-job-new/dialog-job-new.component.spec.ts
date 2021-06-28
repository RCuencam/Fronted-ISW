import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogJobNewComponent } from './dialog-job-new.component';

describe('DialogJobNewComponent', () => {
  let component: DialogJobNewComponent;
  let fixture: ComponentFixture<DialogJobNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogJobNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogJobNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
