import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule }    from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideDirective }       from 'app/shared/directives/click-outside.directive';

import { ProgramActionsPopoverComponent } from './program-actions-popover.component';

describe('ProgramActionsPopoverComponent', () => {
  let component: ProgramActionsPopoverComponent;
  let fixture: ComponentFixture<ProgramActionsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramActionsPopoverComponent, ClickOutsideDirective ],
      imports: [ FormsModule, NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramActionsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
