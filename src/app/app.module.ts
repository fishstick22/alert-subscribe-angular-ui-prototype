import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule,
         ReactiveFormsModule }    from '@angular/forms';
import { HttpModule }             from '@angular/http';

import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

// AppConfig
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
import { APP_CONFIG, AppConfig }  from 'app/app.config';
import { AppComponent }           from 'app/app.component';
import { AppRoutingModule }       from 'app/app-routing.module';

// Imports for loading & configuring the in-memory web api
// this way can turn it on and off without commenting out code
// https://stackoverflow.com/questions/40214211/disable-angular2-in-memory-web-api-for-production
import { InMemoryWebApiModule }        from 'angular-in-memory-web-api';
// import { InMemoryDataService }         from 'app/services/data-api/in-memory-data.service';
import { environment }                 from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    // (environment.inMemAPI) ? InMemoryWebApiModule.forRoot(InMemoryDataService) : []
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
