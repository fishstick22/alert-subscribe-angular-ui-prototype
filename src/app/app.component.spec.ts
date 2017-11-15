import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF }  from '@angular/common';

import { APP_CONFIG, AppConfig } from 'app/app.config';
import { AppRoutingModule }       from 'app/app-routing.module';

import { NavbarComponent } from 'app/navbar/navbar.component';
import { FooterComponent } from 'app/footer/footer.component';
import { HomeComponent } from 'app/home/home.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';


import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        PageNotFoundComponent
      ],
      imports: [AppRoutingModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: APP_CONFIG, useValue: AppConfig }
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Alert Subscribe UI Prototype/POC ({env})'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Alert Subscribe UI Prototype/POC (' + AppConfig.envName  + ')');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
