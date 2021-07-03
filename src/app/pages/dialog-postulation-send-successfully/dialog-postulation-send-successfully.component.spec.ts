import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPostulationSendSuccessfullyComponent } from './dialog-postulation-send-successfully.component';

describe('DialogPostulationSendSuccessfullyComponent', () => {
  let component: DialogPostulationSendSuccessfullyComponent;
  let fixture: ComponentFixture<DialogPostulationSendSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPostulationSendSuccessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPostulationSendSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
