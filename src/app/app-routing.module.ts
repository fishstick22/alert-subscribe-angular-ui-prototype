import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { PageNotFoundComponent }  from 'app/core/page-not-found/page-not-found.component';
import { HomeComponent }          from 'app/core/home/home.component';
import { DashboardComponent }     from 'app/dashboard/dashboard.component';
// import { CommunicationComponent } from 'app/components/routes/communication/communication.component';
// import { ClientComponent }        from 'app/components/routes/client/client.component';
// import { ProgramComponent }       from 'app/components/routes/program/program.component';
// import { TestComponent }          from 'app/components/test/test.component';

const routes: Routes = [
  { path: '',               redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',           component: HomeComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'communications', loadChildren: 'app/communications/communications.module#CommunicationsModule' },
  // { path: 'program',        component: ProgramComponent },
  // { path: 'client',         component: ClientComponent },
  // { path: 'test',           component: TestComponent },
  { path: '**',             component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
