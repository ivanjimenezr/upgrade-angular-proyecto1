import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisosDetailComponent } from './pisos-detail.component';

describe('PisosDetailComponent', () => {
  let component: PisosDetailComponent;
  let fixture: ComponentFixture<PisosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PisosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
