// Communications feature Module
//
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents,
         CommunicationsRoutingModule        } from './communications-routing.module';

import { ClientConfigsByCommModalComponent  } from './services/client-configurations/client-configs-by-comm-modal.component';
import { ProgramConfigsByCommModalComponent } from './services/program-configurations/prog-configs-by-comm-modal.component';
import { ClientConfigsByCommModalService    } from './services/client-configurations/client-configs-by-comm-modal.service';
import { ProgramConfigsByCommModalService   } from './services/program-configurations/prog-configs-by-comm-modal.service';

// shared
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    /// CommonModule, // gets provided by shared module
    CommunicationsRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
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
