import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents, ClientsRoutingModule } from './clients-routing.module';

// shared
import { SharedModule } from 'app/shared/shared.module';
import { ClientsComponent } from './clients.component';
import { ClientConfigurationsModalService } from './services/client-configurations/client-configurations-modal.service';
import { ClientConfigurationsModalComponent } from './services/client-configurations/client-configurations-modal.component';

@NgModule({
  imports: [
    // CommonModule, // supposed to be imported from shared module?
    ClientsRoutingModule,
    SharedModule, // supposed to provide CommActionTableComponent
  ],
  declarations: [routedComponents, ClientsComponent, ClientConfigurationsModalComponent],
  entryComponents: [ClientConfigurationsModalComponent],
  providers: [ClientConfigurationsModalService],
})
export class ClientsModule { }
