import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterChildComponent } from './outer-child.component';

describe('OuterChildComponent', () => {
  let component: OuterChildComponent;
  let fixture: ComponentFixture<OuterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
