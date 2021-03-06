import { Injectable, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import {
  Communication, CommunicationsService, FakeCommunicationsService,
  Client, ClientsService, FakeClientsService,
  ClientConfiguration, ClientConfigurationsService, FakeClientConfigurationsService,
  DataApiService, FakeDataApiService
} from 'app/shared/testing/shared-module-testing-helper';

import {
  SelectChannelPriorityStubComponent,
  SelectChannelDefaultStubComponent,
  DateEffExpStubComponent,
  FakeNgbActiveModal,
  ClientActionTableStubComponent,
  CommActionTableStubComponent,
  DraggableDirective,
  DroppableDirective,
  DragDropService, DropEvent
} from 'app/clients/testing/fake-client-configurations-modal.service';

import { ClientConfigurationsModalComponent } from './client-configurations-modal.component';

describe('ClientConfigurationsModalComponent', () => {
  let component: ClientConfigurationsModalComponent;
  let fixture: ComponentFixture<ClientConfigurationsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClientConfigurationsModalComponent,
        SelectChannelPriorityStubComponent,
        SelectChannelDefaultStubComponent,
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
    fixture = TestBed.createComponent(ClientConfigurationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
