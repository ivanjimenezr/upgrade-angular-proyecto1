import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisosEditComponent } from './pisos-edit.component';

describe('PisosEditComponent', () => {
  let component: PisosEditComponent;
  let fixture: ComponentFixture<PisosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PisosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
