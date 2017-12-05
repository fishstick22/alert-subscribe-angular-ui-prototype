import { Component, Input, Injectable } from '@angular/core';

import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration } from 'app/shared/model/testing/model-testing-helper';

@Component({
  selector: 'app-client-actions-popover',
  template: 'dummy component for testing'
})
export class ClientActionsPopoverStubComponent {
  @Input() clientId: string;
  @Input() clientName: string;
  // @Output() configAction = new EventEmitter<any>();
}

@Component({
  selector: 'app-client-action-table',
  template: 'dummy component for testing'
})
export class ClientActionTableStubComponent {

  @Input() configureState: string;
  @Input() clients: Client[];
  @Input() displayClient: Client[];
  @Input() supressClient: number[] = [];
  @Input() displayClientStartEmpty: boolean = true;
  @Input() displayCommunication: string = 'Communication';
  @Input() showClientId: boolean = true;
  @Input() showClientCode: boolean = true;
  @Input() showClientName: boolean = true;
  @Input() showStatus: boolean = false;
  @Input() showAction: boolean = true;
}

@Component({
  selector: 'app-comm-actions-popover',
  template: 'dummy component for testing'
})
export class CommActionsPopoverStubComponent {

  @Input() commId: string;
  @Input() commName: string;
  // @Output() configAction = new EventEmitter<any>();

}

@Component({
  selector: 'app-comm-action-table',
  template: 'dummy component for testing'
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

@Component({
  selector: 'app-date-eff-exp',
  template: 'dummy component for testing'
})
export class DateEffExpStubComponent {
  @Input() dateType: string;
  @Input() commConfig: ClientConfiguration;
  @Input() lastConfigRow: boolean;
}
@Component({
  selector: 'app-date-picker-popup',
  template: 'dummy component for testing'
})
export class DatePickerPopupStubComponent {

  @Input() dateValue: string;
  @Input() required: true;
  // @Output() newDateValue = new EventEmitter<any>();
}

@Component({
  selector: 'app-program-actions-popover',
  template: `dummy testing component`
})
export class ProgramActionsPopoverStubComponent  {
  @Input() progId: string;
  @Input() progName: string;
}

@Component({
  selector: 'app-program-status',
  template: 'dummy component for testing'
})
export class ProgramStatusStubComponent {
  @Input() program;
  @Input() detectChanges;
}

@Component({
  selector: 'app-select-channel-priority',
  template: 'dummy component for testing'
})
export class SelectChannelPriorityStubComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() actualStaticValue: string; // sometimes you just do stuff because
                                      // a problem is driving you nuts
  @Input() lastConfigRow: boolean;
}

@Component({
  selector: 'app-select-channel-mandatory',
  template: 'dummy component for testing'
})
export class SelectChannelMandatoryStubComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() actualStaticValue: string; // sometimes you just do stuff because
                                      // a problem is driving you nuts
  @Input() lastConfigRow: boolean;
}

@Component({
  selector: 'app-select-profile-option',
  template: 'dummy component for testing'
})
export class SelectProfileOptionStubComponent {

  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() staticValue: string;
  @Input() showHeader: boolean;
  @Input() staticReadOnly: boolean;
  @Input() dynamicPicker: string;
}

@Component({
  selector: 'app-show-program-profile-options',
  template: 'dummy component for testing'
})
export class ShowProgramProfileOptionsStubComponent {

  @Input() profile;
  @Input() profileProperty;
  @Input() profileOptionLabel;
}

@Component({
  selector: 'app-sortable-column',
  template: 'dummy component for testing'
})
export class SortableColumnStubComponent {
  @Input() columnName: string;
  @Input() sortDirection: string = '';
}
