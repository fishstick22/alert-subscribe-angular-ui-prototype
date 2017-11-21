import { Component, Input, Injectable } from '@angular/core';

import { Communication }              from 'app/shared/model/communication';
import { Client }                     from 'app/shared/model/client';
import { ClientConfiguration }        from 'app/shared/model/client-configuration';
import { Program }                    from 'app/shared/model/program';
import { ProgramConfiguration }       from 'app/shared/model/program-configuration';
import { CommunicationConfiguration } from 'app/shared/model/communication-configuration';

export { Communication }              from 'app/shared/model/communication';
export { Client }                     from 'app/shared/model/client';
export { ClientConfiguration }        from 'app/shared/model/client-configuration';
export { Program }                    from 'app/shared/model/program';
export { ProgramConfiguration }       from 'app/shared/model/program-configuration';
export { CommunicationConfiguration } from 'app/shared/model/communication-configuration';

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
    selector: 'app-date-eff-exp',
    template: 'dummy component for testing'
  })
  export class DateEffExpStubComponent {
    @Input() dateType: string;
    @Input() commConfig: ClientConfiguration;
    @Input() lastConfigRow: boolean;
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
