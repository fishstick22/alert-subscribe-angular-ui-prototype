import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct }            from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideDirective } from 'app/shared/directives/click-outside.directive';
import { DatePickerPopupComponent } from './date-picker-popup.component';

describe('DatePickerPopupComponent', () => {
  let component: DatePickerPopupComponent;
  let fixture: ComponentFixture<DatePickerPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerPopupComponent, ClickOutsideDirective ],
      imports: [ FormsModule, NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
