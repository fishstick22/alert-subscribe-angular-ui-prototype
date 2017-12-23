import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration,
         DataApiService, FakeDataApiService
} from 'app/shared/testing/shared-module-testing-helper';

import { SelectChannelPriorityStubComponent,
         SelectChannelDefaultStubComponent,
         DateEffExpStubComponent,
         FakeNgbActiveModal,
         ClientActionTableStubComponent,
         CommActionTableStubComponent,
         DraggableDirective,
         DroppableDirective,
         DragDropService, DropEvent,
} from 'app/communications/testing/fake-client-configs-by-comm-modal.service';

import { ClientConfigsByCommModalComponent } from './client-configs-by-comm-modal.component';

const helper = new ModelTestingHelper();

describe('ClientConfigsByCommModalComponent', () => {
  let component: ClientConfigsByCommModalComponent;
  let fixture: ComponentFixture<ClientConfigsByCommModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClientConfigsByCommModalComponent,
        DraggableDirective,
        DroppableDirective,
        SelectChannelPriorityStubComponent,
        SelectChannelDefaultStubComponent,
        DateEffExpStubComponent,
        ClientActionTableStubComponent,
      ],
      imports: [ FormsModule ],
      providers: [
        DragDropService,
        NgbActiveModal,
        DataApiService,
        { provide: NgbActiveModal, usevalue: FakeNgbActiveModal },
        { provide: DataApiService, usevalue: FakeDataApiService }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConfigsByCommModalComponent);
    component = fixture.componentInstance;
    component.communication = helper.getTestCommunication();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
