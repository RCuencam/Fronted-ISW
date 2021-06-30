import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavEmployeerComponent } from './main-nav-employeer.component';

describe('MainNavEmployeerComponent', () => {
  let component: MainNavEmployeerComponent;
  let fixture: ComponentFixture<MainNavEmployeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavEmployeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavEmployeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
