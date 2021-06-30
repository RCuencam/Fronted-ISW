import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountEmployeerComponent } from './my-account-employeer.component';

describe('MyAccountEmployeerComponent', () => {
  let component: MyAccountEmployeerComponent;
  let fixture: ComponentFixture<MyAccountEmployeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountEmployeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountEmployeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
