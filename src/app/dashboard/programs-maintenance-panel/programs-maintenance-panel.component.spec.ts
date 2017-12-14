import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataApiService, FakeDataApiService,
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
    fixture = TestBed.createComponent(ProgramsMaintenancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
