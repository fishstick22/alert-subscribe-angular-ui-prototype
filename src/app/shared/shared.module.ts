// Angular Style Guide https://angular.io/guide/styleguide#import-line-spacing
// Compromise, one space between bracket and from, but align the brackets
// and put each imported item on separate line when coming from single source
// Alphabetizing symbols within import type (group components, services, directives)
// Use relative imports when going down the tree
// Use absolute when resolving up and/or across

import { NgModule            } from '@angular/core';
import { CommonModule        } from '@angular/common';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule    } from '@angular/common/http';

import { NgbModule           } from '@ng-bootstrap/ng-bootstrap';

import { routedComponents,
         SharedRoutingModule } from './shared-routing.module';

// Imports for loading & configuring the in-memory web api
// this way can turn it on and off without commenting out code
// https://stackoverflow.com/questions/40214211/disable-angular2-in-memory-web-api-for-production
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService  } from 'app/shared/services/in-memory-data.service';
import { environment          } from 'environments/environment';

// Services -- only DataApiService is scoped globally from AppModule,
// DataApiService acts as facade from the numerous API services and when new one is added
// only new methods in DataApiService are needed to limit changes in feature components
// import { DataApiService } from './services/data-api.service';
import { ClientConfigurationsService  } from './services/client-configurations/client-configurations.service';
import { ClientsService               } from './services/clients/clients.service';
import { CommunicationsService        } from './services/communications/communications.service';
import { ProgramConfigurationsService } from './services/program-configurations/program-configurations.service';
import { ProgramProfilesService       } from './services/program-profiles/program-profiles.service';
import { ProgramProfileClientExceptionsService
                                      } from './services/program-profile-client-exceptions/program-profile-client-exceptions.service';
import { ProgramsService              } from './services/programs/programs.service';

// testing within shared module
import { ClickOutsideComponent } from './components/test/click-outside/click-outside.component';
import { DragDropComponent     } from './components/test/drag-drop/drag-drop.component';

// exported components
import { ClientActionsPopoverComponent   } from './components/client-actions-popover/client-actions-popover.component';
import { ClientActionTableComponent      } from './components/client-action-table/client-action-table.component';
import { CommActionsPopoverComponent     } from './components/comm-actions-popover/comm-actions-popover.component';
import { CommActionTableComponent        } from './components/comm-action-table/comm-action-table.component';
import { DateEffExpComponent             } from './components/date-eff-exp/date-eff-exp.component';
import { DatePickerPopupComponent        } from './components/date-picker-popup/date-picker-popup.component';
import { SelectChannelDefaultComponent   } from './components/select-channel-default/select-channel-default.component';
import { SelectChannelPriorityComponent  } from './components/select-channel-priority/select-channel-priority.component';
import { SelectProfileOptionComponent    } from './components/select-profile-option/select-profile-option.component';
import { SortableColumnComponent         } from './components/sortable-column/sortable-column.component';

// exported directives
import { ClickOutsideDirective  } from './directives/click-outside.directive';
import { DraggableDirective     } from './directives/drag-drop/draggable.directive';
import { DroppableDirective     } from './directives/drag-drop/droppable.directive';
import { SortableTableDirective } from './directives/sortable-table.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SharedRoutingModule,
    (environment.inMemAPI) ? InMemoryWebApiModule.forRoot(InMemoryDataService) : []
  ],
  declarations: [
    routedComponents,
    // exported components
    ClientActionsPopoverComponent,
    ClientActionTableComponent,
    CommActionsPopoverComponent,
    CommActionTableComponent,
    DateEffExpComponent,
    DatePickerPopupComponent,
    SelectChannelDefaultComponent,
    SelectChannelPriorityComponent,
    SelectProfileOptionComponent,
    SortableColumnComponent,
    // local testing components
    ClickOutsideComponent,
    DragDropComponent,
    // exported directives
    ClickOutsideDirective,
    DraggableDirective,
    DroppableDirective,
    SortableTableDirective
  ],
  providers: [
    HttpClientModule,
    // services used by DataApiService
    ClientConfigurationsService,
    ClientsService,
    CommunicationsService,
    ProgramConfigurationsService,
    ProgramProfilesService,
    ProgramsService,
    ProgramProfileClientExceptionsService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // shared components
    ClientActionsPopoverComponent,
    ClientActionTableComponent,
    CommActionsPopoverComponent,
    CommActionTableComponent,
    DateEffExpComponent,
    DatePickerPopupComponent,
    SelectChannelDefaultComponent,
    SelectChannelPriorityComponent,
    SelectProfileOptionComponent,
    // directives
    ClickOutsideDirective,
    DraggableDirective,
    DroppableDirective,
    SortableTableDirective
  ]
})
export class SharedModule { }
