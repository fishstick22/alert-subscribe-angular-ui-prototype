import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents, CommunicationsRoutingModule } from './communications-routing.module';

// shared
import { SharedModule } from 'app/shared/shared.module';

import { ProgramConfigsByCommModalService } from './services/program-configurations/prog-configs-by-comm-modal.service';
import { ProgramConfigsByCommModalComponent } from './services/program-configurations/prog-configs-by-comm-modal.component';

@NgModule({
  imports: [
    // CommonModule, // supposed to be imported from shared module?
    CommunicationsRoutingModule,
    SharedModule, // supposed to provide CommActionTableComponent
  ],
  declarations: [routedComponents, ProgramConfigsByCommModalComponent],
  entryComponents: [ProgramConfigsByCommModalComponent],
  providers: [ProgramConfigsByCommModalService]
})
export class CommunicationsModule { }
