import { Component, Input, Injectable } from '@angular/core';

export { Communication }            from 'app/shared/model/communication';
export { Program }                  from 'app/shared/model/program';
export { ProgramConfiguration }     from 'app/shared/model/program-configuration';

import { Communication }            from 'app/shared/model/communication';
import { Program }                  from 'app/shared/model/program';
import { ProgramConfiguration }     from 'app/shared/model/program-configuration';

@Injectable()
export class FakeProgramConfigsByCommModalService {}

@Injectable()
export class FakeNgbActiveModal {}

@Component({
  selector: 'app-select-channel-priority',
  template: ``
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
  template: ``
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
  template: ``
})
export class DateEffExpStubComponent {
  @Input() dateType: string;
  @Input() progConfig: ProgramConfiguration;
  @Input() lastConfigRow: boolean;
}
