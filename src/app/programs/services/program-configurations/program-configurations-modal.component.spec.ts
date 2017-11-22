import { Injectable, Input } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DataApiService, FakeDataApiService,
  Communication, CommunicationsService, FakeCommunicationsService,
  Program, ProgramsService, FakeProgramsService,
  ProgramConfiguration, ProgramConfigurationsService, FakeProgramConfigurationsService
} from 'app/shared/testing/shared-module-testing-helper';
import {
  FakeNgbActiveModal,
  SelectChannelPriorityStubComponent,
  SelectChannelMandatoryStubComponent,
  DateEffExpStubComponent,
  CommActionTableStubComponent,
  DraggableDirective,
  DroppableDirective,
  DragDropService, DropEvent
} from 'app/programs/testing/fake-program-configurations-modal.service';

import { ProgramConfigurationsModalComponent } from './program-configurations-modal.component';

describe('ProgramConfigurationsModalComponent', () => {
  let component: ProgramConfigurationsModalComponent;
  let fixture: ComponentFixture<ProgramConfigurationsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgramConfigurationsModalComponent,
        SelectChannelPriorityStubComponent,
        SelectChannelMandatoryStubComponent,
        DateEffExpStubComponent,
        CommActionTableStubComponent,
        DraggableDirective,
        DroppableDirective
      ],
      imports: [ FormsModule ], // NgbModule.forRoot() ],
      providers: [
        NgbActiveModal,
        { provide: NgbActiveModal, usevalue: FakeNgbActiveModal },
        DataApiService,
        { provide: DataApiService, usevalue: FakeDataApiService },
        DragDropService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramConfigurationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
