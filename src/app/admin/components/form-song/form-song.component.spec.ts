import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSongComponent } from './form-song.component';

describe('FormSongComponent', () => {
  let component: FormSongComponent;
  let fixture: ComponentFixture<FormSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
