import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresListadoModalComponent } from './actores-listado-modal.component';

describe('ActoresListadoModalComponent', () => {
  let component: ActoresListadoModalComponent;
  let fixture: ComponentFixture<ActoresListadoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoresListadoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresListadoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
