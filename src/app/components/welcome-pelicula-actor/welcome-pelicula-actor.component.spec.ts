import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePeliculaActorComponent } from './welcome-pelicula-actor.component';

describe('WelcomePeliculaActorComponent', () => {
  let component: WelcomePeliculaActorComponent;
  let fixture: ComponentFixture<WelcomePeliculaActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePeliculaActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePeliculaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
