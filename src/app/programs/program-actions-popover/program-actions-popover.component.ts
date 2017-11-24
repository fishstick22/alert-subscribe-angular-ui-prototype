import { Component, OnInit,
         Input, Output, EventEmitter,
         ViewEncapsulation } from '@angular/core';

import { Program, ProgramConfigAction } from 'app/shared/model/program';

@Component({
  selector: 'app-program-actions-popover',
  templateUrl: './program-actions-popover.component.html',
  styleUrls: ['./program-actions-popover.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramActionsPopoverComponent implements OnInit {

  private attachOutsideOnClick = false;
  private delayClickOutsideInit = true;
  private clickOutsideEvents = 'click';
  private exclude = 'ngbPopover ngb-popover';
  private excludeBeforeClick = false;

  @Input() progId: string;
  @Input() progName: string;
  @Output() configAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  configure(id, config) {
    console.log('ActionsPopoverComponent configure: ', id, config);
    const progConfigAction:  ProgramConfigAction = new ProgramConfigAction(id, config);
    this.configAction.emit(progConfigAction);
  }

  private onClick(e: Event) {
    console.log('Clicked inside:', e);
  }

  private onClickedOutside(e: Event, p: any) {
    console.log('Clicked outside:', e);
    p.close();
  }
}
