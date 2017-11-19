import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents, CommunicationsRoutingModule } from './communications-routing.module';

// shared
import { SharedModule } from 'app/shared/shared.module';
import { ProgramConfigurationService } from './services/program-configuration.service';
import { ProgramConfigurationModalComponent } from './services/program-configuration-modal.component';

@NgModule({
  imports: [
    // CommonModule, // supposed to be imported from shared module?
    CommunicationsRoutingModule,
    SharedModule, // supposed to provide CommActionTableComponent
  ],
  declarations: [routedComponents, ProgramConfigurationModalComponent],
  entryComponents: [ProgramConfigurationModalComponent],
  providers: [ProgramConfigurationService]
})
export class CommunicationsModule { }
