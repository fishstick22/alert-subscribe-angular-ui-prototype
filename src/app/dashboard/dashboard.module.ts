// Dashboard feature Module
//
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents,
         DashboardRoutingModule } from './dashboard-routing.module';
import { ProgramClientExceptionsMaintenancePanelComponent
                                          } from './client-maintenance-panel/program-client-exceptions-maintenance-panel.component';
import { ProgramsMaintenancePanelComponent } from './programs-maintenance-panel/programs-maintenance-panel.component';
import { ShowProgramProfileOptionsComponent } from './show-program-profile-options/show-program-profile-options.component';

// shared
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    // CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponents,
    ProgramClientExceptionsMaintenancePanelComponent,
    ProgramsMaintenancePanelComponent,
    ShowProgramProfileOptionsComponent,
  ]
})
export class DashboardModule { }
