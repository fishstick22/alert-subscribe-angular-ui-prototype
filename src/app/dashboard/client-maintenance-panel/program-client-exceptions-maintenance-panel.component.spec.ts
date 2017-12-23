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
         ProgramProfileClientExceptionsService, FakeProgramProfileClientExceptionsService,
         ProgramsMaintenancePanelStubComponent,
         ShowProgramProfileOptionsStubComponent } from 'app/shared/testing/shared-module-testing-helper';

import { ProgramClientExceptionsMaintenancePanelComponent } from './program-client-exceptions-maintenance-panel.component';

describe('ProgramClientExceptionsMaintenancePanelComponent', () => {
  let component: ProgramClientExceptionsMaintenancePanelComponent;
  let fixture: ComponentFixture<ProgramClientExceptionsMaintenancePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgramClientExceptionsMaintenancePanelComponent,
        ShowProgramProfileOptionsStubComponent
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
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: DataApiService, useClass: FakeDataApiService },
      ],
      imports: [
        HttpClientModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramClientExceptionsMaintenancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
