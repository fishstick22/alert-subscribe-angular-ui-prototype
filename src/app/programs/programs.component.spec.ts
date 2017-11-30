import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  DataApiService, FakeDataApiService,
  Program, ProgramsService, FakeProgramsService
} from 'app/shared/testing/shared-module-testing-helper';

import { ProgramConfigurationsModalService } from './services/program-configurations/program-configurations-modal.service';
import { ProgramsMaintenanceModalService } from './services/programs-maintenance/programs-maintenance-modal.service';
import { FakeProgramConfigurationsModalService,
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
        DataApiService,
        ProgramConfigurationsModalService,
        ProgramsMaintenanceModalService,
        { provide: DataApiService, usevalue: FakeDataApiService },
        { provide: ProgramConfigurationsModalService, usevalue: FakeProgramConfigurationsModalService },
        { provide: ProgramsMaintenanceModalService, usevalue: FakeProgramsMaintenanceModalService },
       // { provide: Router, useClass: RouterStub}
      ],
      imports: [
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
