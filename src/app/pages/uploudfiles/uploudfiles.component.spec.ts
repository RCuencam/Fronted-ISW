import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploudfilesComponent } from './uploudfiles.component';

describe('UploudfilesComponent', () => {
  let component: UploudfilesComponent;
  let fixture: ComponentFixture<UploudfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploudfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploudfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
