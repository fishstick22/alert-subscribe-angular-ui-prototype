// Clients feature Module
//
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents,
         ClientsRoutingModule               } from './clients-routing.module';

import { ClientConfigurationsModalComponent } from './services/client-configurations/client-configurations-modal.component';
import { ClientConfigurationsModalService   } from './services/client-configurations/client-configurations-modal.service';

// shared
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    // CommonModule, // gets provided by shared module
    ClientsRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
    ClientConfigurationsModalComponent
  ],
  entryComponents: [
    ClientConfigurationsModalComponent
  ],
  providers: [ClientConfigurationsModalService],
})
export class ClientsModule { }
