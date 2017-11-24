// Dashboard feature Module
//
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { routedComponents,
         DashboardRoutingModule } from './/dashboard-routing.module';

// shared
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    // CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents]
})
export class DashboardModule { }
