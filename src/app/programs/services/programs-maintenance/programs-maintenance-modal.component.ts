import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Program } from 'app/shared/model/program';

@Component({
  selector: 'app-programs-maintenance-modal',
  templateUrl: './programs-maintenance-modal.component.html',
  styleUrls: ['./programs-maintenance-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramsMaintenanceModalComponent implements OnInit {

  @Input() program: Program = new Program(); // just becasue service inits whenever

  public SAVESUCCESS: string = 'Close on succesful save';

  today = new Date();
  tomorrow = new Date();

  constructor(
    private maintainProgramModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  modalInit() {
    console.log('ProgramConfigByCommComponent init: ');
    console.log(this.program);
    // console.log(this.programConfigurations);
    // get the list of programs to populate the dropdown (covered in @Input() programs: Program[];)
    // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
    // this.displayCommStartEmpty = true;
    // this.displayComm = [];
    // this.newProgramConfigs = [];
    // this.tomorrow.setDate(this.today.getDate() + 1);
    // this.configureState = 'start';

    // this.supressComm = this.findExistingConfiguredComms();
  }
}

export class ProgramsMaintModalResult {
  newPrograms: Program[];
}
