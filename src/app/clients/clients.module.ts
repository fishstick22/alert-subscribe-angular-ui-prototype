import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents, ClientsRoutingModule } from './clients-routing.module';

// shared
import { SharedModule } from 'app/shared/shared.module';
import { ClientsComponent } from './clients.component';

@NgModule({
  imports: [
    // CommonModule, // supposed to be imported from shared module?
    ClientsRoutingModule,
    SharedModule, // supposed to provide CommActionTableComponent
  ],
  declarations: [routedComponents, ClientsComponent],
})
export class ClientsModule { }
