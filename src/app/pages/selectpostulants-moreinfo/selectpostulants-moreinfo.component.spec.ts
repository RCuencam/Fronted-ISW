import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpostulantsMoreinfoComponent } from './selectpostulants-moreinfo.component';

describe('SelectpostulantsMoreinfoComponent', () => {
  let component: SelectpostulantsMoreinfoComponent;
  let fixture: ComponentFixture<SelectpostulantsMoreinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectpostulantsMoreinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectpostulantsMoreinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
