import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_CONFIG, AppConfig } from 'app/app.config';
import { DataApiService, FakeDataApiService,
         CommunicationsService, FakeCommunicationsService,
         ClientsService, FakeClientsService,
         ClientConfigurationsService, FakeClientConfigurationsService,
         ProgramsService, FakeProgramsService,
         ProgramProfilesService, FakeProgramProfilesService,
         ProgramConfigurationsService, FakeProgramConfigurationsService,
         ProgramProfileClientExceptionsService, FakeProgramProfileClientExceptionsService
} from 'app/shared/testing/shared-module-testing-helper';

import { ProgramClientExceptionsModalService } from './services/program-client-exceptions/program-client-exceptions-modal.service';
import { ProgramConfigurationsModalService } from './services/program-configurations/program-configurations-modal.service';
import { ProgramsMaintenanceModalService } from './services/programs-maintenance/programs-maintenance-modal.service';
import { FakeProgramClientExceptionsModalService,
         FakeProgramConfigurationsModalService,
         FakeProgramsMaintenanceModalService } from './testing/fake-program-configurations-modal.service';
import { ProgramActionsPopoverStubComponent,
         ProgramStatusStubComponent } from 'app/shared/components/testing/stub-testing-components';

import { ProgramsComponent } from './programs.component';

describe('Programs: ProgramsComponent', () => {
  let component: ProgramsComponent;
  let fixture: ComponentFixture<ProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsComponent, ProgramActionsPopoverStubComponent, ProgramStatusStubComponent ],
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
        ProgramClientExceptionsModalService,
        ProgramConfigurationsModalService,
        ProgramsMaintenanceModalService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: DataApiService, useClass: FakeDataApiService },
        { provide: ProgramClientExceptionsModalService, usevalue: FakeProgramClientExceptionsModalService },
        { provide: ProgramConfigurationsModalService, usevalue: FakeProgramConfigurationsModalService },
        { provide: ProgramsMaintenanceModalService, usevalue: FakeProgramsMaintenanceModalService },
       // { provide: Router, useClass: RouterStub}
      ],
      imports: [
        HttpClientModule
       // FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
