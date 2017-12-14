import { Component, OnInit, OnChanges,
  SimpleChanges, SimpleChange,
  Input, Output, EventEmitter,
  ViewEncapsulation } from '@angular/core';

import { AppConstants } from 'app/app-constants';
import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';
import { DataApiService } from 'app/shared/services/data-api.service';

@Component({
  selector: 'app-communications-maintenance-panel',
  templateUrl: './communications-maintenance-panel.component.html',
  styleUrls: ['./communications-maintenance-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommunicationsMaintenancePanelComponent implements OnInit, OnChanges {

  @Input() selectedProgram: Program;

  selectedProgramConfigurations: ProgramConfiguration[];
  programConfigurationOptions = AppConstants.PROGRAMCONFIGURATIONOPTIONS;

  programConfigurations: ProgramConfiguration[];
  communications: Communication[];

  constructor(
    private dataApiService: DataApiService
  ) { }

  async ngOnInit() {
    this.communications = await this.getCommunications();
    this.programConfigurations = await this.getProgramConfigurations();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CommunicationsMaintenancePanelComponent OnChanges', changes);
    if (changes.selectedProgram && !changes.selectedProgram.firstChange) {
      this.selectedProgramConfigurations = this.findProgramConfigurations(this.selectedProgram);

    }
  }

  private async getCommunications(): Promise<Communication[]> {
    try {
      return await this.dataApiService.getCommunications();
    } catch (error) {
      console.log('getCommunications error: ', error);
    }
  }

  private async getProgramConfigurations(): Promise<ProgramConfiguration[]> {
    try {
      return await this.dataApiService.getProgramConfigurations();
    } catch (error) {
      console.log('getProgramConfigurations error: ', error);
    }
  }

  private findCommunication(id): Communication {
    return this.communications.find(c => c.id === id);
  }

  private findProgramConfigurations(selectedProgram: Program): ProgramConfiguration[] {

    return this.programConfigurations.filter(pc => {
      if (typeof(pc.program) === 'number') {
        if (pc.program === selectedProgram.id) {
          if (typeof(pc.communication) === 'number') {
            pc.communication = this.findCommunication(<number> pc.communication);
          }
          return true;
        } else { return false; }
      } else if (pc.communication.id === selectedProgram.id) {
        if (typeof(pc.communication) === 'number') {
          pc.communication = this.findCommunication(<number> pc.communication);
        }
        return true;
      }
      return false;
    });
  }
}
