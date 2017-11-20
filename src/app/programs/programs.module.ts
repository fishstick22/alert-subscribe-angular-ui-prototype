import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents, ProgramsRoutingModule } from './programs-routing.module';

// shared
import { SharedModule } from 'app/shared/shared.module';
import { ProgramsComponent } from './programs.component';

@NgModule({
  imports: [
    // CommonModule, // supposed to be imported from shared module?
    ProgramsRoutingModule,
    SharedModule, // supposed to provide CommActionTableComponent
  ],
  declarations: [routedComponents, ProgramsComponent],
})
export class ProgramsModule { }
