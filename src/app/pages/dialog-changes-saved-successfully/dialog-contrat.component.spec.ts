import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContratComponent } from './dialog-contrat.component';

describe('DialogContratComponent', () => {
  let component: DialogContratComponent;
  let fixture: ComponentFixture<DialogContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
