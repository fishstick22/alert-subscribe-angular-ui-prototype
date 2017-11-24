import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '',               redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',           component: HomeComponent },
  { path: 'dashboard',      loadChildren: './dashboard/dashboard.module#DashboardModule' },
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
