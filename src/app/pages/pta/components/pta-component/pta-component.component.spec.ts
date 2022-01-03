import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtaComponentComponent } from './pta-component.component';

describe('PtaComponentComponent', () => {
  let component: PtaComponentComponent;
  let fixture: ComponentFixture<PtaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
