import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routedComponents, ProgramsRoutingModule } from './programs-routing.module';

import { ProgramsComponent } from './programs.component';
import { ProgramActionsPopoverComponent } from './program-actions-popover/program-actions-popover.component';
import { ProgramConfigurationsModalService } from './services/program-configurations/program-configurations-modal.service';
import { ProgramConfigurationsModalComponent } from './services/program-configurations/program-configurations-modal.component';

// shared
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    // CommonModule, // supposed to be imported from shared module?
    NgbModule.forRoot(),
    ProgramsRoutingModule,
    SharedModule, // supposed to provide CommActionTableComponent
  ],
  declarations: [
    routedComponents,
    ProgramsComponent,
    ProgramActionsPopoverComponent,
    ProgramConfigurationsModalComponent
  ],
  entryComponents: [ProgramConfigurationsModalComponent],
  providers: [ProgramConfigurationsModalService],
})
export class ProgramsModule { }
