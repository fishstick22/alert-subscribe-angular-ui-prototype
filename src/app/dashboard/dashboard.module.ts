// Dashboard feature Module
//
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents,
         DashboardRoutingModule } from './dashboard-routing.module';
import { ClientConfigurationsMaintenancePanelComponent
       } from './client-maintenance-panel/client-configurations-maintenance-panel.component';
import { CommunicationsMaintenancePanelComponent
       } from './communications-maintenance-panel/communications-maintenance-panel.component';
import { ProgramClientExceptionsMaintenancePanelComponent
       } from './client-maintenance-panel/program-client-exceptions-maintenance-panel.component';
import { ProgramsMaintenancePanelComponent
       } from './programs-maintenance-panel/programs-maintenance-panel.component';
import { ShowCommunicationConfigurationOptionsComponent
       } from './show-communication-configuration-options/show-communication-configuration-options.component';
import { ShowProgramProfileOptionsComponent
       } from './show-program-profile-options/show-program-profile-options.component';

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
    ClientConfigurationsMaintenancePanelComponent,
    CommunicationsMaintenancePanelComponent,
    ProgramClientExceptionsMaintenancePanelComponent,
    ProgramsMaintenancePanelComponent,
    ShowCommunicationConfigurationOptionsComponent,
    ShowProgramProfileOptionsComponent,
  ]
})
export class DashboardModule { }
