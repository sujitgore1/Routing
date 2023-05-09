import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSectionComponent } from './student-section.component';
import { HttpClientModule } from '@angular/common/http';

describe('StudentSectionComponent', () => {
  let component: StudentSectionComponent;
  let fixture: ComponentFixture<StudentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSectionComponent ],
      imports : [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
