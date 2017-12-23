import { Component, DebugElement, Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, inject, fakeAsync, ComponentFixture, TestBed, } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { By } from '@angular/platform-browser';

import { addMatchers, newEvent, Router, RouterStub,
         RouterLinkStubDirective, RouterOutletStubComponent } from '../../../testing';
import { AuthService } from '../auth/auth.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {

  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let unauthLinks: RouterLinkStubDirective[];
  let unauthLinkDes: DebugElement[];
  let authLinks: RouterLinkStubDirective[];
  let authLinkDes: DebugElement[];

  let spy: any;

  const EXPECTED_AUTH_ROUTES = 5; // number of configured routes
  const EXPECTED_UNAUTH_ROUTES = 1; // number of configured routes
                            // update these if the site grows
  const HOME_ROUTE =           {num: 0, link: '/home'};
  const DASHBOARD_ROUTE =      {num: 1, link: '/dashboard'};
  const COMMUNICATIONS_ROUTE = {num: 2, link: '/communications'};
  const PROGRAMS_ROUTE =       {num: 3, link: '/programs'};
  const CLIENTS_ROUTE =        {num: 4, link: '/clients'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      providers: [
        AuthService,
        { provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly count unauth routerlinks', () => {

    const componentRealAuthService = fixture.debugElement.injector.get(AuthService);
    spy = spyOn(componentRealAuthService, 'authenticated').and.returnValue(false);
    componentRealAuthService.setLoggedIn(false);
    fixture.detectChanges();
    console.log('componentRealAuthService', componentRealAuthService.authenticated);

    // find DebugElements with an attached RouterLinkStubDirective
    unauthLinkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkStubDirective));
    // get the attached link directive instances using the DebugElement injectors
    unauthLinks = unauthLinkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);

    expect(unauthLinks.length).toBe(EXPECTED_UNAUTH_ROUTES, 'should have 1 links');
    expect(
      unauthLinks[HOME_ROUTE.num].linkParams
    ).toBe(HOME_ROUTE.link, '1st link should go to Home');
  });

  it('should correctly count AUTHENTICATED routerlinks', () => {

    const componentRealAuthService = fixture.debugElement.injector.get(AuthService);
    spy = spyOn(componentRealAuthService, 'authenticated').and.returnValue(true);
    componentRealAuthService.setLoggedIn(true);
    const expTime = 2500 * 1000 + Date.now();
    localStorage.setItem('expires_at', JSON.stringify(expTime));
    fixture.detectChanges();
    console.log('componentRealAuthService', componentRealAuthService.authenticated);

    // find DebugElements with an attached RouterLinkStubDirective
    authLinkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkStubDirective));
    // get the attached link directive instances using the DebugElement injectors
    authLinks = authLinkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    localStorage.removeItem('expires_at');

    expect(authLinks.length).toBe(EXPECTED_AUTH_ROUTES, 'should have 5 links');
    expect(
      authLinks[HOME_ROUTE.num].linkParams
    ).toBe(HOME_ROUTE.link, '1st link should go to Home');
    expect(
      authLinks[DASHBOARD_ROUTE.num].linkParams
    ).toBe(DASHBOARD_ROUTE.link, '2nd link should go to Dashboard');
    expect(
      authLinks[COMMUNICATIONS_ROUTE.num].linkParams
    ).toBe(COMMUNICATIONS_ROUTE.link, '3nd link should go to Communications');
    expect(
      authLinks[PROGRAMS_ROUTE.num].linkParams
    ).toBe(PROGRAMS_ROUTE.link, '4th link should go to Programs');
    expect(
      authLinks[CLIENTS_ROUTE.num].linkParams
    ).toBe(CLIENTS_ROUTE.link, '5th link should go to Clients');
  });
});
