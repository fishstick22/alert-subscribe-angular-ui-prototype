import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
  ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

import { DraggableDirective } from './directives/drag-drop/draggable.directive';
import { DroppableDirective } from './directives/drag-drop/droppable.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    (environment.inMemAPI) ? InMemoryWebApiModule.forRoot(InMemoryDataService) : []
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DraggableDirective,
    DroppableDirective,
    // DragDropService
  ],
  declarations: [
    routedComponents,
    DragDropComponent,
    DraggableDirective,
    DroppableDirective,
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
