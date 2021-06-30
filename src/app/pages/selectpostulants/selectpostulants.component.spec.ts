import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpostulantsComponent } from './selectpostulants.component';

describe('SelectpostulantsComponent', () => {
  let component: SelectpostulantsComponent;
  let fixture: ComponentFixture<SelectpostulantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectpostulantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectpostulantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
