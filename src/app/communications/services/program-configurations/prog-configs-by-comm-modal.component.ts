import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from 'app/app-constants';
import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';

@Component({
  // entry component, don't use the selector
  // selector: 'app-program-configurations-modal',
  templateUrl: './prog-configs-by-comm-modal.component.html',
  styleUrls: ['./prog-configs-by-comm-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramConfigsByCommModalComponent implements OnInit {

  @Input() communication: Communication = new Communication(); // wtf;
  @Input() programs: Program[];
  @Input() programConfigurations: ProgramConfiguration[];

  newPgmConfig: ProgramConfiguration;
  prevPgmConfig: ProgramConfiguration;

  selectedProgram: number;
  lastPgmConfigRow: number;

  constructor(

    private configureProgramModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log('ProgramConfigurationsModalComponent ngOnInit: ', this.programs);
  }

  modalInit() {
    console.log('ProgramConfigByCommComponent init: ');
    console.log(this.communication);
    console.log(this.programConfigurations);
    // get the list of programs to populate the dropdown (covered in @Input() programs: Program[];)
    // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
    if (this.programConfigurations.length === 0) { // no existing configs for comm
      this.addProgramConfig();
    } else {
      const indxOfLast = this.programConfigurations.length - 1;
      if (this.programConfigurations[indxOfLast] && this.programConfigurations[indxOfLast].program) {
        // why? this shows up as Object when it is ProgramConfiguration
        this.prevPgmConfig = <ProgramConfiguration> this.programConfigurations[indxOfLast];
        this.selectedProgram = this.prevPgmConfig.program.id;
        this.addProgramConfig(this.programConfigurations[indxOfLast]);
      }
    }
  }

  addProgramConfig(lastPgmConfig?: ProgramConfiguration) {

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (lastPgmConfig) {
      // adding a new row, expiring the previous, copying the previous values
      lastPgmConfig.expiration = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      this.newPgmConfig = new ProgramConfiguration(lastPgmConfig);

    } else {
      // this is a first-time row for this communication, set some defaults
      this.newPgmConfig = new ProgramConfiguration();

    }

    this.newPgmConfig.effective = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();
    this.newPgmConfig.expiration = AppConstants.UNEXPIRED;

    this.lastPgmConfigRow = this.programConfigurations.length;
    this.programConfigurations[this.programConfigurations.length] = this.newPgmConfig;

  }

  private findProgram(id): Program {
    return this.programs.find(p => p.id === id);
  }

  private saveProgramConfiguration() {
    console.log('ProgramConfigByCommComponent save');
    console.log(this.newPgmConfig, ' program id: ', this.selectedProgram);

    this.newPgmConfig.program = this.findProgram(this.selectedProgram);
    this.newPgmConfig.communication = this.communication;

    const modalResult: ProgramConfigModalResult = {
      prevProgConfig: this.prevPgmConfig,
      newProgConfig: this.newPgmConfig
    };

    this.configureProgramModal.close({resultTxt: AppConstants.SAVESUCCESS, modalResult: modalResult});
  }

  private updateDateValue(newDateValue, pc: ProgramConfiguration, dateType: string) {
    console.log('ProgramConfigByCommComponent updateDateValue: ', newDateValue, pc, dateType);
    if (dateType === 'effective') {
      pc.effective = newDateValue;
    }
    if (dateType === 'expiration') {
      pc.expiration = newDateValue;
    }
  }
}

export class ProgramConfigModalResult {
  prevProgConfig: ProgramConfiguration;
  newProgConfig: ProgramConfiguration;
}
