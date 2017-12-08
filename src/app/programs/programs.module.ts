// Programs feature Module
//
import { NgModule  } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routedComponents,
         ProgramsRoutingModule               } from './programs-routing.module';

import { ProgramActionsPopoverComponent      } from './program-actions-popover/program-actions-popover.component';
import { ProgramStatusComponent              } from './program-status/program-status.component';

import { ProgramClientExceptionsModalComponent
                                             } from './services/program-client-exceptions/program-client-exceptions-modal.component';
import { ProgramClientExceptionsModalService } from './services/program-client-exceptions/program-client-exceptions-modal.service';
import { ProgramConfigurationsModalComponent } from './services/program-configurations/program-configurations-modal.component';
import { ProgramConfigurationsModalService   } from './services/program-configurations/program-configurations-modal.service';
import { ProgramsMaintenanceModalComponent   } from './services/programs-maintenance/programs-maintenance-modal.component';
import { ProgramsMaintenanceModalService     } from './services/programs-maintenance/programs-maintenance-modal.service';

// shared
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    // CommonModule, // gets provided by shared module
    NgbModule.forRoot(),
    ProgramsRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
    ProgramActionsPopoverComponent,
    ProgramClientExceptionsModalComponent,
    ProgramConfigurationsModalComponent,
    ProgramsMaintenanceModalComponent,
    ProgramStatusComponent
  ],
  entryComponents: [
    ProgramClientExceptionsModalComponent,
    ProgramConfigurationsModalComponent,
    ProgramsMaintenanceModalComponent
  ],
  providers: [
    ProgramClientExceptionsModalService,
    ProgramConfigurationsModalService,
    ProgramsMaintenanceModalService,
  ],
})
export class ProgramsModule { }
