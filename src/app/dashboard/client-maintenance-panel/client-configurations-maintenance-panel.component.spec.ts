import { Component, Input, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
import {
  ShowCommunicationConfigurationOptionsStubComponent
} from 'app/programs/testing/fake-program-configurations-modal.service';

import { ClientConfigurationsMaintenancePanelComponent } from './client-configurations-maintenance-panel.component';

describe('ClientConfigurationsMaintenancePanelComponent', () => {
  let component: ClientConfigurationsMaintenancePanelComponent;
  let fixture: ComponentFixture<ClientConfigurationsMaintenancePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowCommunicationConfigurationOptionsStubComponent,
        ClientConfigurationsMaintenancePanelComponent
      ],
      providers: [
        HttpClientModule,
        FakeClientConfigurationsService,
        FakeClientsService,
        FakeCommunicationsService,
        FakeDataApiService,
        FakeProgramProfileClientExceptionsService,
        FakeProgramConfigurationsService,
        FakeProgramProfilesService,
        FakeProgramsService,
        // ClientConfigurationsModalService,
        // { provide: APP_CONFIG, useValue: AppConfig },
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: DataApiService, useClass: FakeDataApiService },
      ],
      imports: [ HttpClientModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConfigurationsMaintenancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
