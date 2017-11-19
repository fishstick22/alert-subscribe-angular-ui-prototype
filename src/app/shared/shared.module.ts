import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routedComponents, SharedRoutingModule } from './shared-routing.module';
// import { SharedComponent } from './shared.component';

// Imports for loading & configuring the in-memory web api
// this way can turn it on and off without commenting out code
// https://stackoverflow.com/questions/40214211/disable-angular2-in-memory-web-api-for-production
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'app/shared/services/in-memory-data.service';
import { environment } from 'environments/environment';

// import { DataApiService } from './services/data-api.service';
import { CommunicationsService } from './services/communications/communications.service';
import { ProgramsService } from './services/programs/programs.service';
import { ProgramConfigurationsService } from './services/program-configurations/program-configurations.service';
// testing within shared module
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ClickOutsideComponent } from './click-outside/click-outside.component';
// exported
import { CommActionTableComponent} from './comm-action-table/comm-action-table.component';
import { CommActionsPopoverComponent } from './comm-actions-popover/comm-actions-popover.component';
import { DateEffExpComponent } from './date-eff-exp/date-eff-exp.component';
import { DatePickerPopupComponent } from './date-picker-popup/date-picker-popup.component';
import { SelectChannelMandatoryComponent } from './select-channel-mandatory/select-channel-mandatory.component';
import { SelectChannelPriorityComponent } from './select-channel-priority/select-channel-priority.component';
import { SortableColumnComponent } from './sortable-column/sortable-column.component';

import { DraggableDirective } from './directives/drag-drop/draggable.directive';
import { DroppableDirective } from './directives/drag-drop/droppable.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SortableTableDirective } from './directives/sortable-table.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SharedRoutingModule,
    (environment.inMemAPI) ? InMemoryWebApiModule.forRoot(InMemoryDataService) : []
  ],
  declarations: [
    routedComponents,
    CommActionTableComponent,
    CommActionsPopoverComponent,
    DateEffExpComponent,
    DatePickerPopupComponent,
    SelectChannelMandatoryComponent,
    SelectChannelPriorityComponent,
    SortableColumnComponent,
    DragDropComponent,
    ClickOutsideComponent,
    DraggableDirective,
    DroppableDirective,
    ClickOutsideDirective,
    SortableTableDirective,
  ],
  providers: [
    HttpClientModule,
    CommunicationsService,
    ProgramsService,
    ProgramConfigurationsService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommActionTableComponent,
    CommActionsPopoverComponent,
    DateEffExpComponent,
    DatePickerPopupComponent,
    SelectChannelMandatoryComponent,
    SelectChannelPriorityComponent,
    SortableColumnComponent,
    DraggableDirective,
    DroppableDirective,
    ClickOutsideDirective,
    SortableTableDirective
  ]
})
export class SharedModule { }
