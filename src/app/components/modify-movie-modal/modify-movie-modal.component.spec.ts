import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMovieModalComponent } from './modify-movie-modal.component';

describe('ModifyMovieModalComponent', () => {
  let component: ModifyMovieModalComponent;
  let fixture: ComponentFixture<ModifyMovieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyMovieModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
