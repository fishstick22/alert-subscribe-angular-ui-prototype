// Dashboard feature Module
//
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents,
         DashboardRoutingModule } from './/dashboard-routing.module';
import { ShowProgramProfileOptionsComponent } from './show-program-profile-options/show-program-profile-options.component';
// shared
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    // CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents, ShowProgramProfileOptionsComponent]
})
export class DashboardModule { }
