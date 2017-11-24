import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',               redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',           component: HomeComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'communications', loadChildren: './communications/communications.module#CommunicationsModule' },
  { path: 'programs',       loadChildren: './programs/programs.module#ProgramsModule' },
  { path: 'clients',        loadChildren: './clients/clients.module#ClientsModule' },
  { path: 'shared-test',    loadChildren: './shared/shared.module#SharedModule' },
  { path: '**',             component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
