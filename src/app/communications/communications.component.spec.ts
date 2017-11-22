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
  Communication, FakeCommunicationsService, CommunicationsService } from 'app/shared/testing/shared-module-testing-helper';

import { ProgramConfigsByCommModalService } from './services/program-configurations/prog-configs-by-comm-modal.service';
import { FakeProgramConfigsByCommModalService } from './testing/fake-prog-configs-by-comm-modal.service';

import {
  // Communication,
  // Program,
  // ProgramConfiguration,
  // Client,
  // ClientConfiguration,
  // CommunicationConfiguration,
  // SelectChannelPriorityStubComponent,
  // SelectChannelMandatoryStubComponent,
  // DateEffExpStubComponent,
  CommActionTableStubComponent,
  // ClientActionTableStubComponent
} from 'app/shared/testing/shared-module-testing-helper';
import { CommunicationsComponent } from './communications.component';

let component: CommunicationsComponent;
let fixture: ComponentFixture<CommunicationsComponent>;

// const communications: Communication[] = [];
// const displayComm: Communication[] = [];
// const displayCommStartEmpty = false;
// const showCommId = true;
// const showCommName = true;
// const showCommDesc = true;
// const showStatus = true;
// const showAction = true;

// setClickedRow($event) {}
// configureCommunication($event) {}

describe('CommunicationsComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommunicationsComponent,
        // DragDropStubComponent,
        // ClickOutsideStubComponent,
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
