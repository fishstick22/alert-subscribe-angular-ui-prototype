import { Injectable, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import {
  // DataApiService, FakeDataApiService,
  // Communication, CommunicationsService, FakeCommunicationsService,
  // Program, ProgramsService, FakeProgramsService,
  // ProgramConfiguration, ProgramConfigurationsService, FakeProgramConfigurationsService
} from 'app/shared/testing/shared-module-testing-helper';

import {
  FakeNgbActiveModal,
  // SelectChannelPriorityStubComponent,
  // SelectChannelMandatoryStubComponent,
  // DateEffExpStubComponent,
  // CommActionTableStubComponent,
  // DraggableDirective,
  // DroppableDirective,
  // DragDropService, DropEvent
} from 'app/programs/testing/fake-program-configurations-modal.service';

import { ProgramsMaintenanceModalComponent } from './programs-maintenance-modal.component';

describe('ProgramsMaintenanceModalComponent', () => {
  let component: ProgramsMaintenanceModalComponent;
  let fixture: ComponentFixture<ProgramsMaintenanceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsMaintenanceModalComponent ],
      imports: [ FormsModule ],
      providers: [
        NgbActiveModal,
        { provide: NgbActiveModal, usevalue: FakeNgbActiveModal },
        // DataApiService,
        // { provide: DataApiService, usevalue: FakeDataApiService },
        // DragDropService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsMaintenanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
