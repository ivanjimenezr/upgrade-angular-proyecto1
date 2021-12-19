import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisosComponentComponent } from './pisos-component.component';

describe('PisosComponentComponent', () => {
  let component: PisosComponentComponent;
  let fixture: ComponentFixture<PisosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PisosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
