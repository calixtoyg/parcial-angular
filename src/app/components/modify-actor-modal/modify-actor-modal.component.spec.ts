import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyActorModalComponent } from './modify-actor-modal.component';

describe('ModifyActorModalComponent', () => {
  let component: ModifyActorModalComponent;
  let fixture: ComponentFixture<ModifyActorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyActorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyActorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
