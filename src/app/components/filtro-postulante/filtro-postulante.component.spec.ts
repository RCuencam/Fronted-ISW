import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPostulanteComponent } from './filtro-postulante.component';

describe('FiltroPostulanteComponent', () => {
  let component: FiltroPostulanteComponent;
  let fixture: ComponentFixture<FiltroPostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroPostulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
