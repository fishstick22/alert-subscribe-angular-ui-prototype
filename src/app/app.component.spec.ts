import { Component, DebugElement, Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { By } from '@angular/platform-browser';

import { APP_CONFIG, AppConfig } from 'app/app.config';
import { AppRoutingModule } from 'app/app-routing.module';
import { AuthService } from 'app/core/auth/auth.service';

import { NavbarComponent } from 'app/core/navbar/navbar.component';
import { FooterComponent } from 'app/core/footer/footer.component';
import { HomeComponent } from 'app/core/home/home.component';
import { PageNotFoundComponent } from 'app/core/page-not-found/page-not-found.component';

// import { MockAuthService } from './core/testing/core-module-testing-helper';

import { AppComponent } from './app.component';

import { RouterLinkStubDirective } from '../testing';
import { RouterOutletStubComponent } from '../testing';


@Component({selector: 'app-dashboard', template: '<h1>DashboardComponent (Testing Stub)</h1>'})
class DashboardComponent {}

@Injectable()
export class MockAuthService {
  loggedIn: boolean = false;
  mockService = 'this is a mock of AuthService';

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  get authenticated(): boolean {
    return this.loggedIn;
  }
}

let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;

let componentAuthService: AuthService; // the actually injected service
let authService: MockAuthService; // the TestBed injected service

const EXPECTED_AUTH_ROUTES = 5; // number of configured routes
const EXPECTED_UNAUTH_ROUTES = 1; // number of configured routes
                          // update these if the site grows
const HOME_ROUTE =           {num: 0, link: '/home'};
const DASHBOARD_ROUTE =      {num: 1, link: '/dashboard'};
const COMMUNICATIONS_ROUTE = {num: 2, link: '/communications'};
const PROGRAMS_ROUTE =       {num: 3, link: '/programs'};
const CLIENTS_ROUTE =        {num: 4, link: '/clients'};

describe('AppComponent & TestModule', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        PageNotFoundComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
      providers: [
        // AuthService,// NO! Don't provide the real service!
                      // Provide a test-double instead
        { provide: AuthService, useValue: MockAuthService },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: APP_CONFIG, useValue: AppConfig }
      ],
    })

    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp    = fixture.componentInstance;

    });
  }));
  tests();
});

function tests() {
  let unauthLinks: RouterLinkStubDirective[];
  let unauthLinkDes: DebugElement[];

  let authLinks: RouterLinkStubDirective[];
  let authLinkDes: DebugElement[];

  beforeEach(() => {
    // AuthService actually injected into the component
    componentAuthService = fixture.debugElement.injector.get(AuthService);
    // AuthService from the root injector
    authService = TestBed.get(AuthService);
    // console.log(authService.mockService, authService.authenticated);
    // console.log(authService.mockService, authService.authenticated);

    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    unauthLinkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    unauthLinks = unauthLinkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);

    // authenticate, then get routes again
    authService.loggedIn = true;
    // console.log(authService.authenticated);

    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    authLinkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    authLinks = authLinkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);


  });

  it('can instantiate it', () => {
    expect(comp).not.toBeNull();
  });

  it('can get Unauthenticated RouterLinks from template', () => {

    expect(unauthLinks.length).toBe(EXPECTED_UNAUTH_ROUTES, 'should have 1 links');
    expect(
      unauthLinks[HOME_ROUTE.num].linkParams
    ).toBe(HOME_ROUTE.link, '1st link should go to Home');
    // TODO another test for AUTHenticated routes
    // expect(
    //   links[DASHBOARD_ROUTE.num].linkParams
    // ).toBe(DASHBOARD_ROUTE.link, '2nd link should go to Dashboard');
    // expect(
    //   links[COMMUNICATIONS_ROUTE.num].linkParams
    // ).toBe(COMMUNICATIONS_ROUTE.link, '3nd link should go to Communications');
    // expect(
    //   links[PROGRAMS_ROUTE.num].linkParams
    // ).toBe(PROGRAMS_ROUTE.link, '4th link should go to Programs');
    // expect(
    //   links[CLIENTS_ROUTE.num].linkParams
    // ).toBe(CLIENTS_ROUTE.link, '5th link should go to Clients');
  });

  it('can click Home link in NavBar', () => {
    const homeLinkDe = unauthLinkDes[HOME_ROUTE.num];
    const homeLink = unauthLinks[HOME_ROUTE.num];

    expect(homeLink.navigatedTo).toBeNull('link should not have navigated yet');

    homeLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(homeLink.navigatedTo).toBe(HOME_ROUTE.link);
  });
}
