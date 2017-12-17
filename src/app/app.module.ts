// Angular Alert Subscribe User Interface Prototype
//
import { NgModule      } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router        } from '@angular/router';
import { NgbModule     } from '@ng-bootstrap/ng-bootstrap';

// AppConfig
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
import { APP_CONFIG,
         AppConfig        } from './app.config';
import { AppComponent     } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// application core (basic site sturcture, security etc) components
import { CoreModule       } from './core/core.module';
import { AuthService      } from './core/auth/auth.service';

// feature components/modules
// lazy loaded feature modules do not have to be explicity imported
// import { ClientsModule        } from './clients/clients.module';
// import { CommunicationsModule } from './communications/communications.module';
// import { DashboardModule      } from './dashboard/dashboard.module';
// import { ProgramsModule       } from './programs/programs.module';

// shared
import { SharedModule          } from './shared/shared.module';
import { DataApiService        } from './shared/services/data-api.service';
import { DragDropService       } from './shared/services/drag-drop.service';
import { SortableColumnService } from './shared/services/sortable-column.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule.forRoot(),
    SharedModule
  ],
  providers: [
    AuthService,
    DataApiService,
    DragDropService,
    SortableColumnService,
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
