import { Component, OnInit, Input,
         Output, EventEmitter }       from '@angular/core';

 import { Communication,
          CommunicationSortCriteria,
          CommunicationConfigAction } from 'app/shared/model/communication';

// https://ng-bootstrap.github.io/#/components/popover/examples

@Component({
  selector: 'app-comm-actions-popover',
  templateUrl: './comm-actions-popover.component.html',
  styleUrls: ['./comm-actions-popover.component.scss']
})
export class CommActionsPopoverComponent implements OnInit {

  private attachOutsideOnClick = false;
  private delayClickOutsideInit = true;
  private clickOutsideEvents = 'click';
  private exclude = 'ngbPopover ngb-popover';
  private excludeBeforeClick = false;

  @Input() commId: string;
  @Input() commName: string;
  @Output() configAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  configure(id, config) {
    console.log('ActionsPopoverComponent configure: ', id, config);
    const commConfigAction:  CommunicationConfigAction = new CommunicationConfigAction(id, config);
    this.configAction.emit(commConfigAction);
  }

  private onClick(e: Event) {
    console.log('Clicked inside:', e);
  }

  private onClickedOutside(e: Event, p: any) {
    console.log('Clicked outside:', e);
    p.close();
  }
}
