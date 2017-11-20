import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// AppConfig
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
import { APP_CONFIG, AppConfig } from './app.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// application core (basic site sturcture, etc) components
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

// feature components/modules
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ClientsModule } from './clients/clients.module';
import { CommunicationsModule } from 'app/communications/communications.module';
import { ProgramsModule } from './programs/programs.module';

// shared
import { SharedModule } from 'app/shared/shared.module';

// import { CommActionTableComponent} from './shared/comm-action-table/comm-action-table.component';

import { DataApiService } from 'app/shared/services/data-api.service';
import { DragDropService } from 'app/shared/services/drag-drop.service';
import { SortableColumnService } from 'app/shared/services/sortable-column.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    // CommActionTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // HttpModule,
    NgbModule.forRoot(),
    CommunicationsModule,
    SharedModule, // supposed to provide CommActionTableComponent
    // (environment.inMemAPI) ? InMemoryWebApiModule.forRoot(InMemoryDataService) : []
  ],
  providers: [
    DataApiService,
    DragDropService,
    SortableColumnService,
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
