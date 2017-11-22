import { Component, Input } from '@angular/core';
import { async,
         ComponentFixture,
         TestBed          } from '@angular/core/testing';
import { FormsModule      } from '@angular/forms';
import { NgbModule        } from '@ng-bootstrap/ng-bootstrap';

import { SortableColumnComponent     } from 'app/shared/components/sortable-column/sortable-column.component';
import { CommActionsPopoverComponent } from 'app/shared/components/comm-actions-popover/comm-actions-popover.component';

import { SortableColumnService       } from 'app/shared/services/sortable-column.service';

import { DraggableDirective          } from 'app/shared/directives/drag-drop/draggable.directive';
import { DroppableDirective          } from 'app/shared/directives/drag-drop/droppable.directive';
import { ClickOutsideDirective       } from 'app/shared/directives/click-outside.directive';
import { SortableTableDirective      } from 'app/shared/directives/sortable-table.directive';

import { CommActionTableComponent    } from './comm-action-table.component';

describe('CommActionTableComponent', () => {
  let component: CommActionTableComponent;
  let fixture: ComponentFixture<CommActionTableComponent>;

  let sortableColumnService: SortableColumnService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommActionTableComponent,
        SortableColumnComponent,
        CommActionsPopoverComponent,
        DraggableDirective,
        DroppableDirective,
        ClickOutsideDirective,
        SortableTableDirective
      ],
      imports: [ FormsModule, NgbModule.forRoot() ],
      providers: [SortableColumnService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommActionTableComponent);
    component = fixture.componentInstance;
    sortableColumnService = fixture.debugElement.injector.get(SortableColumnService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
