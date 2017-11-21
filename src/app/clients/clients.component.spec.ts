import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeDataApiService, DataApiService,
  Client, FakeClientsService, ClientsService } from 'app/shared/services/testing/fake-data-api.service';

import { ClientConfigurationsModalService } from './services/client-configurations/client-configurations-modal.service';
import { FakeClientConfigurationsModalService } from './testing/fake-client-configurations-modal.service';
import { SelectChannelPriorityStubComponent,
  SelectChannelMandatoryStubComponent,
  DateEffExpStubComponent,
  FakeNgbActiveModal,
  ClientActionTableStubComponent,
  CommActionTableStubComponent,
  DraggableDirective,
  DroppableDirective,
  DragDropService, DropEvent
} from 'app/clients/testing/fake-client-configurations-modal.service';

import { ClientsComponent } from './clients.component';


describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClientsComponent,
        ClientActionTableStubComponent
      ],
      providers: [
        DataApiService,
        // ClientConfigurationsModalService,
        { provide: DataApiService, usevalue: FakeDataApiService },
        { provide: ClientConfigurationsModalService, usevalue: FakeClientConfigurationsModalService },
       // { provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
