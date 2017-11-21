import { Component, Input, Injectable } from '@angular/core';

export { Communication }            from 'app/shared/model/communication';
export { Program }                  from 'app/shared/model/program';
export { ProgramConfiguration }     from 'app/shared/model/program-configuration';
export { DraggableDirective } from 'app/shared/directives/drag-drop/draggable.directive';
export { DroppableDirective } from 'app/shared/directives/drag-drop/droppable.directive';
export { ClickOutsideDirective } from 'app/shared/directives/click-outside.directive';
export { SortableTableDirective } from 'app/shared/directives/sortable-table.directive';
export { DragDropService } from 'app/shared/services/drag-drop.service';
export { DropEvent } from 'app/shared/directives/drag-drop/drop-event.model';

import { Communication }            from 'app/shared/model/communication';
import { Program }                  from 'app/shared/model/program';
import { ProgramConfiguration }     from 'app/shared/model/program-configuration';
import { DraggableDirective } from 'app/shared/directives/drag-drop/draggable.directive';
import { DroppableDirective } from 'app/shared/directives/drag-drop/droppable.directive';
import { ClickOutsideDirective } from 'app/shared/directives/click-outside.directive';
import { SortableTableDirective } from 'app/shared/directives/sortable-table.directive';
import { DragDropService } from 'app/shared/services/drag-drop.service';
import { DropEvent } from 'app/shared/directives/drag-drop/drop-event.model';

@Injectable()
export class FakeProgramConfigurationsModalService {}

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
