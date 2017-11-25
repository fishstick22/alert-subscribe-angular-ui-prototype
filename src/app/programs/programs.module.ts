// Programs feature Module
//
import { NgModule  } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routedComponents,
         ProgramsRoutingModule               } from './programs-routing.module';

import { ProgramActionsPopoverComponent      } from './program-actions-popover/program-actions-popover.component';
import { ProgramConfigurationsModalService   } from './services/program-configurations/program-configurations-modal.service';
import { ProgramConfigurationsModalComponent } from './services/program-configurations/program-configurations-modal.component';
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
    ProgramConfigurationsModalComponent,
    ProgramsMaintenanceModalComponent
  ],
  entryComponents: [ProgramConfigurationsModalComponent, ProgramsMaintenanceModalComponent],
  providers: [ProgramConfigurationsModalService, ProgramsMaintenanceModalService],
})
export class ProgramsModule { }
