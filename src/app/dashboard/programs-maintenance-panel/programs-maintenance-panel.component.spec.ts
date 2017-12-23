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

import { ProgramsMaintenancePanelComponent } from './programs-maintenance-panel.component';

describe('ProgramsMaintenancePanelComponent', () => {
  let component: ProgramsMaintenancePanelComponent;
  let fixture: ComponentFixture<ProgramsMaintenancePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgramsMaintenancePanelComponent,
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
    fixture = TestBed.createComponent(ProgramsMaintenancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
