import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Program } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';

@Component({
  selector: 'app-programs-maintenance-modal',
  templateUrl: './programs-maintenance-modal.component.html',
  styleUrls: ['./programs-maintenance-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramsMaintenanceModalComponent implements OnInit {

  @Input() configType: string = '';
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
    console.log('ProgramsMaintenanceModalComponent init: ');
    console.log(this.program);
    // console.log(this.programConfigurations);
    // get the list of programs to populate the dropdown (covered in @Input() programs: Program[];)
    // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
    // this.displayCommStartEmpty = true;
    // this.displayComm = [];
    // this.newProgramConfigs = [];
    this.tomorrow.setDate(this.today.getDate() + 1);
    // this.configureState = 'start';
    if (this.configType === 'edit') {
      // editing a program actually means creating a new row from
      // the current row, setting expiration on current
    }
    // this.supressComm = this.findExistingConfiguredComms();
  }

  private updateDateValue(newDateValue, pp: ProgramProfile, dateType: string) {
    console.log('ProgramsMaintenanceModalComponent updateDateValue: ', newDateValue, pp, dateType);
    if (dateType === 'effective') {
      pp.effective = newDateValue;
    }
    if (dateType === 'expiration') {
      pp.expiration = newDateValue;
    }
  }
}

export class ProgramsMaintModalResult {
  newPrograms: Program[];
}
