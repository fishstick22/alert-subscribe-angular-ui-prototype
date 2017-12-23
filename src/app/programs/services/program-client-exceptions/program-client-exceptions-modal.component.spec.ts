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
  // SelectChannelDefaultStubComponent,
  SelectProfileOptionStubComponent,
  // DateEffExpStubComponent,
  DatePickerPopupStubComponent,
  // CommActionTableStubComponent,
  // DraggableDirective,
  // DroppableDirective,
  // DragDropService, DropEvent
} from 'app/programs/testing/fake-program-configurations-modal.service';

import { ProgramClientExceptionsModalComponent } from './program-client-exceptions-modal.component';

describe('ProgramClientExceptionsModalComponent', () => {
  let component: ProgramClientExceptionsModalComponent;
  let fixture: ComponentFixture<ProgramClientExceptionsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgramClientExceptionsModalComponent,
        DatePickerPopupStubComponent,
        SelectProfileOptionStubComponent ],
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
    fixture = TestBed.createComponent(ProgramClientExceptionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
