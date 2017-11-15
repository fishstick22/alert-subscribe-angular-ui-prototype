import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, CommunicationsRoutingModule } from './communications-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CommunicationsRoutingModule
  ],
  declarations: [routedComponents]
})
export class CommunicationsModule { }
