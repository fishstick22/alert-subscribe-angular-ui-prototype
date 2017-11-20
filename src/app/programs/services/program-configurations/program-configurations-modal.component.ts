import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Communication }            from 'app/shared/model/communication';
import { Program }                  from 'app/shared/model/program';
import { ProgramConfiguration }     from 'app/shared/model/program-configuration';
//
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

  public SAVESUCCESS: string = 'Close on succesful save';

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

    this.supressComm = this.findExistingComms();
  }

  findExistingComms(): number[] {
    const existing: number[] = [];
    // for (let i = 0; i < this.programConfigurations.length; i++) {
    //   existing.push(this.programConfigurations[i].communication.id);
    // }
    return existing;
  }

  saveProgramConfiguration() {
    console.log('ProgramConfigComponent save');
    console.log(this.newProgramConfig, ' program id: ', this.program);

    const modalResult: ProgramConfigModalResult = {
      newProgramConfigs: this.newProgramConfigs
    };

    this.configureProgramModal.close({resultTxt: this.SAVESUCCESS, modalResult: modalResult});
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
  newProgramConfigs: ProgramConfiguration[];
}
