import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { APP_BASE_HREF }  from '@angular/common';
import { By } from '@angular/platform-browser';

import { APP_CONFIG, AppConfig } from 'app/app.config';
import { AppRoutingModule }       from 'app/app-routing.module';

import { NavbarComponent } from 'app/core/navbar/navbar.component';
import { FooterComponent } from 'app/core/footer/footer.component';
import { HomeComponent } from 'app/core/home/home.component';
import { PageNotFoundComponent } from 'app/core/page-not-found/page-not-found.component';

import { AppComponent } from './app.component';

import { RouterLinkStubDirective }   from '../testing';
import { RouterOutletStubComponent } from '../testing';

// import { DashboardComponent }     from 'app/dashboard/dashboard.component';
 @Component({selector: 'app-dashboard', template: '<h1>DashboardComponent (Testing Stub)</h1>'})
 class DashboardComponent {}

 let comp:    AppComponent;
 let fixture: ComponentFixture<AppComponent>;

 const EXPECTED_LINKS = 5; // number of configured routes
 const HOME_LINK = 0;      // update these as the site grows
 const DASHBOARD_LINK = 1;
 const COMMUNICATIONS_LINK = 2;
 const PROGRAMS_LINK = 3;
 const CLIENTS_LINK = 4;

 describe('AppComponent & TestModule', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        PageNotFoundComponent,
        // DashboardComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
      providers: [
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

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(EXPECTED_LINKS, 'should have 5 links');
    expect(links[HOME_LINK].linkParams).toBe('/home', '1st link should go to Home');
    expect(links[DASHBOARD_LINK].linkParams).toBe('/dashboard', '2nd link should go to Dashboard');
    expect(links[COMMUNICATIONS_LINK].linkParams).toBe('/communications', '3nd link should go to Dashboard');
    expect(links[PROGRAMS_LINK].linkParams).toBe('/programs', '4th link should go to Dashboard');
    expect(links[CLIENTS_LINK].linkParams).toBe('/clients', '5th link should go to Dashboard');
  });

  it('can click Communications link in NavBar', () => {
    const communicationsLinkDe = linkDes[COMMUNICATIONS_LINK];
    const communicationsLink = links[COMMUNICATIONS_LINK];

    expect(communicationsLink.navigatedTo).toBeNull('link should not have navigated yet');

    communicationsLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(communicationsLink.navigatedTo).toBe('/communications');
  });
}
