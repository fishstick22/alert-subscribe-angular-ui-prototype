import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataApiService, FakeDataApiService,
         ShowCommunicationConfigurationOptionsStubComponent,
         ShowProgramProfileOptionsStubComponent } from 'app/shared/testing/shared-module-testing-helper';

import { CommunicationsMaintenancePanelComponent } from './communications-maintenance-panel.component';

describe('CommunicationsMaintenancePanelComponent', () => {
  let component: CommunicationsMaintenancePanelComponent;
  let fixture: ComponentFixture<CommunicationsMaintenancePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommunicationsMaintenancePanelComponent,
        ShowCommunicationConfigurationOptionsStubComponent
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
    fixture = TestBed.createComponent(CommunicationsMaintenancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
