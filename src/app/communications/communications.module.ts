import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents, CommunicationsRoutingModule } from './communications-routing.module';

// shared
import { SharedModule } from 'app/shared/shared.module';
import { ProgramConfigurationsModalService } from './services/program-configurations/program-configurations-modal.service';
import { ProgramConfigurationsModalComponent } from './services/program-configurations/program-configurations-modal.component';

@NgModule({
  imports: [
    // CommonModule, // supposed to be imported from shared module?
    CommunicationsRoutingModule,
    SharedModule, // supposed to provide CommActionTableComponent
  ],
  declarations: [routedComponents, ProgramConfigurationsModalComponent],
  entryComponents: [ProgramConfigurationsModalComponent],
  providers: [ProgramConfigurationsModalService]
})
export class CommunicationsModule { }
