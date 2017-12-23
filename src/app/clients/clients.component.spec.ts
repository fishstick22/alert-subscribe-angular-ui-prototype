import { Component, Input } from '@angular/core';
import { Injectable, Inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// TODO for now leaving the test using actual HttpClient, eventually replace with HttpClientTestingModule
// https://medium.com/spektrakel-blog/angular-testing-snippets-httpclient-d1dc2f035eb8

import { async, fakeAsync, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_CONFIG, AppConfig } from 'app/app.config';
import { Client, ClientActionTableStubComponent,
         DataApiService, FakeDataApiService,
         CommunicationsService, FakeCommunicationsService,
         ClientsService, FakeClientsService,
         ClientConfigurationsService, FakeClientConfigurationsService,
         ProgramsService, FakeProgramsService,
         ProgramProfilesService, FakeProgramProfilesService,
         ProgramConfigurationsService, FakeProgramConfigurationsService,
         ProgramProfileClientExceptionsService, FakeProgramProfileClientExceptionsService
                                        } from 'app/shared/testing/shared-module-testing-helper';

import { ClientConfigurationsModalService } from './services/client-configurations/client-configurations-modal.service';
import { FakeClientConfigurationsModalService } from './testing/fake-client-configurations-modal.service';

import {
  // SelectChannelDefaultStubComponent,
  // DateEffExpStubComponent,
  FakeNgbActiveModal,
  // ClientActionTableStubComponent,
  // CommActionTableStubComponent,
  DraggableDirective,
  DroppableDirective,
  DragDropService, DropEvent
} from 'app/clients/testing/fake-client-configurations-modal.service';

import { ClientsComponent } from './clients.component';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClientsComponent,
        ClientActionTableStubComponent
      ],
      providers: [
        HttpClientModule,
        // DataApiService,
        FakeClientConfigurationsService,
        FakeClientsService,
        FakeCommunicationsService,
        FakeDataApiService,
        FakeProgramProfileClientExceptionsService,
        FakeProgramConfigurationsService,
        FakeProgramProfilesService,
        FakeProgramsService,
        // ClientConfigurationsModalService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: DataApiService, useClass: FakeDataApiService },
        { provide: ClientConfigurationsModalService, usevalue: FakeClientConfigurationsModalService }
        // { provide: CommunicationsService, useClass: FakeCommunicationsService },
        // { provide: ClientsService, useClass: FakeClientsService },
        // { provide: ClientConfigurationsService, useClass: FakeClientConfigurationsService },
        // { provide: ProgramsService, useClass: FakeProgramsService },
        // { provide: ProgramProfilesService, useClass: FakeProgramProfilesService },
        // { provide: ProgramConfigurationsService, useClass: FakeProgramConfigurationsService },
        // { provide: ProgramProfileClientExceptionsService, useClass: FakeProgramProfileClientExceptionsService }
      ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    // it('should create', inject([DataApiService], fakeAsync((fakeDataApiService: FakeDataApiService) => {
    expect(component).toBeTruthy();
  });
});
