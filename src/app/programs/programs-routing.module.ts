import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgramsComponent } from './programs.component';

const routes: Routes =  [
  { path: '',    component: ProgramsComponent }
];

export const routedComponents = [ProgramsComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule {}
