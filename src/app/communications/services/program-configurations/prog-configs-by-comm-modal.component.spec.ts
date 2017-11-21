import { Component, Injectable, Input } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DataApiService, FakeDataApiService,
  Communication, CommunicationsService, FakeCommunicationsService,
  Program, ProgramsService, FakeProgramsService,
  ProgramConfiguration, ProgramConfigurationsService, FakeProgramConfigurationsService
} from 'app/shared/services/testing/fake-data-api.service';

import {
  FakeNgbActiveModal,
  SelectChannelPriorityStubComponent,
  SelectChannelMandatoryStubComponent,
  DateEffExpStubComponent,
  CommActionTableStubComponent,
  DraggableDirective,
  DroppableDirective,
  DragDropService, DropEvent
} from 'app/communications/testing/fake-prog-configs-by-comm-modal.service';

import { ProgramConfigsByCommModalComponent } from './prog-configs-by-comm-modal.component';


describe('ProgramConfigurationsModalComponent', () => {
  let component: ProgramConfigsByCommModalComponent;
  let fixture: ComponentFixture<ProgramConfigsByCommModalComponent>;

  const communication: Communication = new Communication(260, 'Refill Available Notice');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgramConfigsByCommModalComponent,
        SelectChannelPriorityStubComponent,
        SelectChannelMandatoryStubComponent,
        DateEffExpStubComponent
       ],
      imports: [ FormsModule ], // NgbModule.forRoot() ],
      providers: [
        NgbActiveModal,
        DataApiService,
        { provide: NgbActiveModal, usevalue: FakeNgbActiveModal },
        { provide: DataApiService, usevalue: FakeDataApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramConfigsByCommModalComponent);
    component = fixture.componentInstance;
    // https://stackoverflow.com/questions/36654834/angular2-unit-test-with-input
    component.communication = communication;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
