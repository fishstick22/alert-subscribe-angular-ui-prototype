import { Component, OnInit, OnChanges,
         SimpleChanges, SimpleChange,
         Input, Output, EventEmitter,
         ViewEncapsulation } from '@angular/core';

import { AppConstants } from 'app/app-constants';
import { Program } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';
import { ProgramProfileClientException } from 'app/shared/model/program-profile-client-exception';
import { DataApiService } from 'app/shared/services/data-api.service';

@Component({
  selector: 'app-program-client-exceptions-maintenance-panel',
  templateUrl: './program-client-exceptions-maintenance-panel.component.html',
  styleUrls: ['./program-client-exceptions-maintenance-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramClientExceptionsMaintenancePanelComponent implements OnInit, OnChanges {

  @Input() selectedProgram: Program;

  programProfileClientExceptions: ProgramProfileClientException[];
  programProfileOptions = AppConstants.PROGRAMPROFILEOPTIONS;
  selectedProgramProfileClientExceptions: ProgramProfileClientException[];

  constructor(
    private dataApiService: DataApiService
  ) { }

  async ngOnInit() {
    await this.getProgramProfileClientExceptions();
    // this.selectedProgramProfileClientExceptions = this.findClientExceptions(this.selectedProgram);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ProgramClientExceptionsMaintenancePanel OnChanges', changes);
    if (changes.selectedProgram && !changes.selectedProgram.firstChange) {
      this.selectedProgramProfileClientExceptions = this.findClientExceptions(this.selectedProgram);
    }
  }
  private findClientExceptions(program: Program) {
    // TODO well, here's where we want to go get one at a time or
    // a query that gets them by program id in the API...
    return this.programProfileClientExceptions.filter(ppce => ppce.program === program.id);
  }

  private async getProgramProfileClientExceptions() {
    try {
      this.programProfileClientExceptions = await this.dataApiService.getProgramProfileClientExceptions();
      // return this.programProfileClientExceptions;
    } catch (error) {
      console.log('getPrograms error: ', error);
    }
  }
}
