import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTrabajosComponent } from './slider-trabajos.component';

describe('SliderTrabajosComponent', () => {
  let component: SliderTrabajosComponent;
  let fixture: ComponentFixture<SliderTrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderTrabajosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
