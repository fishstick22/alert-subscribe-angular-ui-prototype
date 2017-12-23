import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from 'app/app-constants';
import { Program } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';
import { ProgramProfileClientException } from 'app/shared/model/program-profile-client-exception';

export class ProgramClientExceptionsModalResult {

  updateProgramProfileClientException: ProgramProfileClientException;
  insertProgramProfileClientException: ProgramProfileClientException;
  updateProgram: Program;
  insertProgram: Program;
}
@Component({
  selector: 'app-program-client-exceptions-modal',
  templateUrl: './program-client-exceptions-modal.component.html',
  styleUrls: ['./program-client-exceptions-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramClientExceptionsModalComponent implements OnInit {

  @Input() configType: string = '';
  @Input() program: Program = new Program(); // just becasue service inits whenever
  @Input() programClientExceptions: ProgramProfileClientException[];

  addProfile: boolean = false;
  newProgram: boolean = false;
  expireProgram: boolean = false;

  today = new Date();
  tomorrow = new Date();

  constructor(
    private configureProgramClientExcModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  modalInit() {
    console.log(this.programClientExceptions);
  }

  saveProgramClientExceptions() {}
}
