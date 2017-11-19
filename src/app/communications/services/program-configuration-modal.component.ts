import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Program }                  from 'app/shared/model/program';
import { ProgramConfiguration }     from 'app/shared/model/program-configuration';
import { Communication }            from 'app/shared/model/communication';
import { DataApiService } from 'app/shared/services/data-api.service';

@Component({
  selector: 'app-program-configuration-modal',
  templateUrl: './program-configuration-modal.component.html',
  styleUrls: ['./program-configuration-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramConfigurationModalComponent implements OnInit {

  @Input() communication: Communication = new Communication(); // wtf;
  @Input() programs: Program[];
  @Input() programConfigurations: ProgramConfiguration[];

  public SAVESUCCESS: string = 'Close on succesful save';

  newPgmConfig: ProgramConfiguration;
  prevPgmConfig: ProgramConfiguration;

  selectedProgram: number;
  lastPgmConfigRow: number;

  constructor(
    private dataApiService: DataApiService,
    private configureProgramModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log('ProgramConfigurationModalComponent ngOnInit: ', this.programs);
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
    this.newPgmConfig.expiration = '9999-12-31';

    this.lastPgmConfigRow = this.programConfigurations.length;
    this.programConfigurations[this.programConfigurations.length] = this.newPgmConfig;

  }
}
