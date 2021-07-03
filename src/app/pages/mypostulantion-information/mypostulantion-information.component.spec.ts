import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypostulantionInformationComponent } from './mypostulantion-information.component';

describe('MypostulantionInformationComponent', () => {
  let component: MypostulantionInformationComponent;
  let fixture: ComponentFixture<MypostulantionInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypostulantionInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypostulantionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
