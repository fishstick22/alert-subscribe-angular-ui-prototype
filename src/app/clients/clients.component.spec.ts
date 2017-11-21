import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeDataApiService, DataApiService,
  Client, FakeClientsService, ClientsService } from 'app/shared/services/testing/fake-data-api.service';


import { ClientsComponent } from './clients.component';

@Component({
  selector: 'app-client-action-table',
  template: 'dummy component for testing'
})
export class ClientActionTableStubComponent {

  @Input() clients: Client[];
  @Input() displayClient: Client[];
  @Input() displayClientStartEmpty: boolean = true;
  @Input() displayCommunication: string = 'Communication';
  @Input() showClientId: boolean = true;
  @Input() showClientCode: boolean = true;
  @Input() showClientName: boolean = true;
  @Input() showStatus: boolean = false;
  @Input() showAction: boolean = true;
}

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
       // { provide: ClientConfigurationsModalService, usevalue: FakeClientConfigurationsModalService },
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
