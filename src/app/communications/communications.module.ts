import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents, CommunicationsRoutingModule } from './communications-routing.module';

// shared
import { SharedModule } from 'app/shared/shared.module';

import { CommunicationsComponent } from './communications.component';
import { ClientConfigsByCommModalComponent } from './services/client-configurations/client-configs-by-comm-modal.component';
import { ProgramConfigsByCommModalComponent } from './services/program-configurations/prog-configs-by-comm-modal.component';
import { ClientConfigsByCommModalService } from './services/client-configurations/client-configs-by-comm-modal.service';
import { ProgramConfigsByCommModalService } from './services/program-configurations/prog-configs-by-comm-modal.service';

@NgModule({
  imports: [
    /// CommonModule, // gets provided by shared module
    CommunicationsRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
    CommunicationsComponent,
    ClientConfigsByCommModalComponent,
    ProgramConfigsByCommModalComponent
  ],
  entryComponents: [
    ClientConfigsByCommModalComponent,
    ProgramConfigsByCommModalComponent
  ],
  providers: [
    ClientConfigsByCommModalService,
    ProgramConfigsByCommModalService
  ]
})
export class CommunicationsModule { }
