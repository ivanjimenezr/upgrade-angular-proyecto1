import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtaFormComponent } from './pta-form.component';

describe('PtaFormComponent', () => {
  let component: PtaFormComponent;
  let fixture: ComponentFixture<PtaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
