import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from 'app/app-constants';
import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';
//
export class ProgramConfigModalResult {
  newProgramConfigs: ProgramConfiguration[];
}

@Component({
  selector: 'app-program-configurations-modal',
  templateUrl: './program-configurations-modal.component.html',
  styleUrls: ['./program-configurations-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramConfigurationsModalComponent implements OnInit {

  @Input() communications: Communication[];
  @Input() program: Program = new Program(); // just becasue service inits whenever
  @Input() programConfigurations: ProgramConfiguration[] = [] ;

  displayComm: Communication[];
  displayCommStartEmpty: boolean;
  supressComm: number[];

  newProgramConfig: ProgramConfiguration;
  prevProgramConfig: ProgramConfiguration;
  newProgramConfigs: ProgramConfiguration[];

  lastProgramConfigRow: number;
  configureState: 'start' | 'pick' | 'continue' | 'configure' | 'save';

  programDropEnabled: boolean = false;

  selectedRow: number;

  today = new Date();
  tomorrow = new Date();

  constructor(
    // private dataApiService: DataApiService,
    private configureProgramModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  modalInit() {
    console.log('ProgramConfigByCommComponent init: ');
    console.log(this.program);
    // console.log(this.programConfigurations);
    // get the list of programs to populate the dropdown (covered in @Input() programs: Program[];)
    // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
    this.displayCommStartEmpty = true;
    this.displayComm = [];
    this.newProgramConfigs = [];
    this.tomorrow.setDate(this.today.getDate() + 1);
    this.configureState = 'start';

    this.supressComm = this.findExistingConfiguredComms();
  }

  private addProgramConfig(communication?: Communication) {

    if (this.newProgramConfig && this.configureState === 'pick') {
      this.newProgramConfig.communication = communication;
      // this.newProgramConfigs[this.newProgramConfigs.length] = this.newProgramConfig;
      this.supressComm.push(communication.id);
      // this.configureState = 'continue';
      // this.newProgramConfig = null;
      this.programDropEnabled = false;
    }

    if (this.configureState === 'start' || this.configureState === 'continue') {
      // first time through
      this.lastProgramConfigRow = this.programConfigurations.length;
      if (this.lastProgramConfigRow === 0) {
        this.newProgramConfig = new ProgramConfiguration();
        this.newProgramConfig.effective =  // TODO shared util method
            this.tomorrow.getFullYear() + '-' +
          (this.tomorrow.getMonth() + 1) + '-' +
            this.tomorrow.getDate();
      } else {
        // clone setting from previous config row
        this.prevProgramConfig = this.programConfigurations[this.lastProgramConfigRow - 1];
        this.newProgramConfig = new ProgramConfiguration(this.prevProgramConfig);
        this.newProgramConfig.effective = this.prevProgramConfig.effective;
      }
      this.programConfigurations[this.programConfigurations.length] = this.newProgramConfig;
      this.newProgramConfigs[this.newProgramConfigs.length] = this.newProgramConfig;
      this.newProgramConfig.expiration = AppConstants.UNEXPIRED;
      this.newProgramConfig.program = this.program;

      this.newProgramConfig.communication = new Communication();

      this.configureState = 'pick';
      this.programDropEnabled = true;
    } else {
      if (this.newProgramConfig && this.configureState === 'pick') {
        this.configureState = 'continue';
      }
    }
  }

  private communicationDrop(dragEvent) {
    console.log('ProgramConfigComponent communicationDrop: ', dragEvent);
    if (dragEvent.dragData && typeof(dragEvent.dragData.id) === 'number' ) {
      this.addProgramConfig(this.findCommunication(dragEvent.dragData.id));
    }
  }

  private findCommunication(id): Communication {
    return this.communications.find(c => c.id === id);
  }

  private findExistingConfiguredComms(): number[] {
    const existing: number[] = [];
    for (let i = 0; i < this.programConfigurations.length; i++) {
      existing.push(this.programConfigurations[i].communication.id);
    }
    return existing;
  }

  private saveProgramConfiguration() {
    console.log('ProgramConfigComponent save');
    console.log(this.newProgramConfig, ' program id: ', this.program);

    const modalResult: ProgramConfigModalResult = {
      newProgramConfigs: this.newProgramConfigs
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
