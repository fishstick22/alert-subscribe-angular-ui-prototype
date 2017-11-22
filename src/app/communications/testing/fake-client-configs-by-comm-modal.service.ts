import { Component, Input, Injectable } from '@angular/core';

import {
  Communication,
  Program,
  ProgramConfiguration,
  Client,
  ClientConfiguration,
  CommunicationConfiguration,
  SelectChannelPriorityStubComponent,
  SelectChannelMandatoryStubComponent,
  DateEffExpStubComponent,
  CommActionTableStubComponent,
  ClientActionTableStubComponent
} from 'app/shared/testing/shared-module-testing-helper';

import { DraggableDirective } from 'app/shared/directives/drag-drop/draggable.directive';
import { DroppableDirective } from 'app/shared/directives/drag-drop/droppable.directive';
import { ClickOutsideDirective } from 'app/shared/directives/click-outside.directive';
import { SortableTableDirective } from 'app/shared/directives/sortable-table.directive';
import { DragDropService } from 'app/shared/services/drag-drop.service';
import { DropEvent } from 'app/shared/directives/drag-drop/drop-event.model';

export {
  Communication,
  Program,
  ProgramConfiguration,
  Client,
  ClientConfiguration,
  CommunicationConfiguration,
  SelectChannelPriorityStubComponent,
  SelectChannelMandatoryStubComponent,
  DateEffExpStubComponent,
  CommActionTableStubComponent,
  ClientActionTableStubComponent
} from 'app/shared/testing/shared-module-testing-helper';

export { DraggableDirective } from 'app/shared/directives/drag-drop/draggable.directive';
export { DroppableDirective } from 'app/shared/directives/drag-drop/droppable.directive';
export { ClickOutsideDirective } from 'app/shared/directives/click-outside.directive';
export { SortableTableDirective } from 'app/shared/directives/sortable-table.directive';
export { DragDropService } from 'app/shared/services/drag-drop.service';
export { DropEvent } from 'app/shared/directives/drag-drop/drop-event.model';

@Injectable()
export class FakeClientConfigsByCommModalService {}

@Injectable()
export class FakeNgbActiveModal {}

