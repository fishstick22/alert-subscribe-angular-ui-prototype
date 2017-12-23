import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataApiService, FakeDataApiService,
         CommunicationsMaintenancePanelStubComponent,
         ProgramClientExceptionsMaintenancePanelStubComponent,
         ProgramsMaintenancePanelStubComponent,
         ShowProgramProfileOptionsStubComponent } from 'app/shared/testing/shared-module-testing-helper';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        CommunicationsMaintenancePanelStubComponent,
        ProgramClientExceptionsMaintenancePanelStubComponent,
        ProgramsMaintenancePanelStubComponent,
        ShowProgramProfileOptionsStubComponent
      ],
      providers: [
        DataApiService,
        { provide: DataApiService, usevalue: FakeDataApiService },
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
