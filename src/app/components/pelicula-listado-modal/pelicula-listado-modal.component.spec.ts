import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaListadoModalComponent } from './pelicula-listado-modal.component';

describe('PeliculaListadoModalComponent', () => {
  let component: PeliculaListadoModalComponent;
  let fixture: ComponentFixture<PeliculaListadoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaListadoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaListadoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
