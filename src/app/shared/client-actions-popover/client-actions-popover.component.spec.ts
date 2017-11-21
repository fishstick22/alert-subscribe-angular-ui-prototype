import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule }    from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideDirective }       from 'app/shared/directives/click-outside.directive';

import { ClientActionsPopoverComponent } from './client-actions-popover.component';


describe('ClientActionsPopoverComponent', () => {
  let component: ClientActionsPopoverComponent;
  let fixture: ComponentFixture<ClientActionsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientActionsPopoverComponent, ClickOutsideDirective ],
      imports: [ FormsModule, NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientActionsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
