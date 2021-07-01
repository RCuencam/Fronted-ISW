import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyadInformationComponent } from './myad-information.component';

describe('MyadInformationComponent', () => {
  let component: MyadInformationComponent;
  let fixture: ComponentFixture<MyadInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyadInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyadInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
