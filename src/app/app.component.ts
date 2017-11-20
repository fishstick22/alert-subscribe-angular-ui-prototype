import { Component, Injectable, Inject } from '@angular/core';
// import { environment } from 'environments/environment';
import { APP_CONFIG, IAppConfig } from 'app/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig) {
    this.title = 'Alert Subscribe UI Prototype/POC (' + config.envName + ')';
  }
}
