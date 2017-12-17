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

import { MockAuthService } from './core/testing/core-module-testing-helper';

import { AppComponent } from './app.component';

import { RouterLinkStubDirective } from '../testing';
import { RouterOutletStubComponent } from '../testing';


@Component({selector: 'app-dashboard', template: '<h1>DashboardComponent (Testing Stub)</h1>'})
class DashboardComponent {}

 let comp:    AppComponent;
 let fixture: ComponentFixture<AppComponent>;

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
        AuthService,
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
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(() => {
    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('can instantiate it', () => {
    expect(comp).not.toBeNull();
  });

  it('can get Unauthenticated RouterLinks from template', () => {
    // const service = fixture.debugElement.injector.get(AuthService);
    // spyOn(service, 'login').and.returnValue(true);


    expect(links.length).toBe(EXPECTED_UNAUTH_ROUTES, 'should have 1 links');
    expect(
      links[HOME_ROUTE.num].linkParams
    ).toBe(HOME_ROUTE.link, '1st link should go to Home');
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
    const homeLinkDe = linkDes[HOME_ROUTE.num];
    const homeLink = links[HOME_ROUTE.num];

    expect(homeLink.navigatedTo).toBeNull('link should not have navigated yet');

    homeLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(homeLink.navigatedTo).toBe(HOME_ROUTE.link);
  });
}
