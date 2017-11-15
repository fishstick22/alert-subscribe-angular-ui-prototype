import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunicationsComponent } from './communications.component';

const routes: Routes =  [
  { path: '',    component: CommunicationsComponent }
];

export const routedComponents = [CommunicationsComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationsRoutingModule {}
