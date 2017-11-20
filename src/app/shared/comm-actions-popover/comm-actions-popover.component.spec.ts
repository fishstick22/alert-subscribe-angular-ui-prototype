import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideDirective }       from 'app/shared/directives/click-outside.directive';

import { CommActionsPopoverComponent } from './comm-actions-popover.component';

describe('CommActionsPopoverComponent', () => {
  let component: CommActionsPopoverComponent;
  let fixture: ComponentFixture<CommActionsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommActionsPopoverComponent, ClickOutsideDirective ],
      imports: [ FormsModule, NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommActionsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
