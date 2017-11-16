import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';

import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

// AppConfig
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
import { APP_CONFIG, AppConfig }  from 'app/app.config';
import { AppComponent }           from 'app/app.component';
import { AppRoutingModule }       from 'app/app-routing.module';

// application core (basic site sturcture, etc) components
import { NavbarComponent } from 'app/core/navbar/navbar.component';
import { FooterComponent } from 'app/core/footer/footer.component';
import { HomeComponent } from 'app/core/home/home.component';
import { PageNotFoundComponent } from 'app/core/page-not-found/page-not-found.component';

// feature components/modules
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { CommunicationsModule } from 'app/communications/communications.module';

// shared
import { SharedModule } from 'app/shared/shared.module';
import { DataApiService } from 'app/shared/services/data-api.service';
import { DragDropService } from 'app/shared/services/drag-drop.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // HttpModule,
    NgbModule.forRoot(),
    CommunicationsModule,
    SharedModule,
    // (environment.inMemAPI) ? InMemoryWebApiModule.forRoot(InMemoryDataService) : []
  ],
  providers: [
    DataApiService,
    DragDropService,
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
