import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
  ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { routedComponents, SharedRoutingModule } from './shared-routing.module';
// import { SharedComponent } from './shared.component';

// Imports for loading & configuring the in-memory web api
// this way can turn it on and off without commenting out code
// https://stackoverflow.com/questions/40214211/disable-angular2-in-memory-web-api-for-production
import { InMemoryWebApiModule }        from 'angular-in-memory-web-api';
import { InMemoryDataService }         from 'app/shared/services/in-memory-data.service';
import { environment }                 from 'environments/environment';

// import { DataApiService } from './services/data-api.service';
import { CommunicationService } from './services/communications/communication.service';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ClickOutsideComponent }       from './click-outside/click-outside.component';
import { CommActionTableComponent} from './comm-action-table/comm-action-table.component';
import { SortableColumnComponent } from './sortable-column/sortable-column.component';
import { CommActionsPopoverComponent } from './comm-actions-popover/comm-actions-popover.component';

import { DraggableDirective } from './directives/drag-drop/draggable.directive';
import { DroppableDirective } from './directives/drag-drop/droppable.directive';
import { ClickOutsideDirective }       from './directives/click-outside.directive';
import { SortableTableDirective } from './directives/sortable-table.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    (environment.inMemAPI) ? InMemoryWebApiModule.forRoot(InMemoryDataService) : []
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommActionTableComponent,
    CommActionsPopoverComponent,
    SortableColumnComponent,
    DraggableDirective,
    DroppableDirective,
    ClickOutsideDirective,
    SortableTableDirective
    // DragDropService
  ],
  declarations: [
    routedComponents,
    CommActionTableComponent,
    CommActionsPopoverComponent,
    SortableColumnComponent,
    DragDropComponent,
    ClickOutsideComponent,
    DraggableDirective,
    DroppableDirective,
    ClickOutsideDirective,
    SortableTableDirective
    // DragDropService
  //  SharedComponent
  ],
  providers: [
    HttpClientModule,
    // DataApiService,
    CommunicationService,
    // DragDropService,
  ]
})
export class SharedModule { }
