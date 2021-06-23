import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulantNewComponent } from './postulant-new.component';

describe('PostulantNewComponent', () => {
  let component: PostulantNewComponent;
  let fixture: ComponentFixture<PostulantNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulantNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulantNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
