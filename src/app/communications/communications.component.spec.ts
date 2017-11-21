import { Component, Input } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from '@angular/core/testing';

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { addMatchers, newEvent, Router, RouterStub
} from '../../testing';

import { APP_CONFIG, AppConfig } from 'app/app.config';

import { FakeDataApiService, DataApiService,
  Communication, FakeCommunicationsService, CommunicationsService } from 'app/shared/services/testing/fake-data-api.service';

import { ProgramConfigsByCommModalService } from './services/program-configurations/prog-configs-by-comm-modal.service';
import { FakeProgramConfigsByCommModalService } from './testing/fake-prog-configs-by-comm-modal.service';

import { CommunicationsComponent } from './communications.component';

@Component({
  selector: 'app-drag-drop-test',
  template: `dummy testing component`
})
export class DragDropStubComponent {}

@Component({
  selector: 'app-click-outside-test',
  template: `dummy testing component`
})
export class ClickOutsideStubComponent {}

@Component({
  selector: 'app-comm-action-table',
  template: `dummy testing component`
})
export class CommActionTableStubComponent  {
  @Input() configureState: string;
  @Input() communications: Communication[];
  @Input() displayComm: Communication[];
  @Input() supressComm: number[] = [];
  @Input() displayCommStartEmpty: boolean = true;
  @Input() displayClient: string = ''; // = 'Client';
  @Input() displayProgram: string = ''; // = 'Program';
  @Input() showCommId: boolean = true;
  @Input() showCommName: boolean = true;
  @Input() showCommDesc: boolean = false;
  @Input() showStatus: boolean = false;
  @Input() showAction: boolean = true;
}
let component: CommunicationsComponent;
let fixture: ComponentFixture<CommunicationsComponent>;

const communications: Communication[] = [];
const displayComm: Communication[] = [];
const displayCommStartEmpty = false;
const showCommId = true;
const showCommName = true;
const showCommDesc = true;
const showStatus = true;
const showAction = true;

// setClickedRow($event) {}
// configureCommunication($event) {}

describe('CommunicationsComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommunicationsComponent,
        DragDropStubComponent,
        ClickOutsideStubComponent,
        CommActionTableStubComponent
      ],
      providers: [
        DataApiService,
        ProgramConfigsByCommModalService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: DataApiService, usevalue: FakeDataApiService },
        { provide: ProgramConfigsByCommModalService, usevalue: FakeProgramConfigsByCommModalService },
        { provide: Router, useClass: RouterStub}
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CommunicationsComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
