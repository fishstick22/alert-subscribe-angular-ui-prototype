import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';

import { AppConstants } from 'app/app-constants';
import { Communication } from 'app/shared/model/communication';
import { Program } from 'app/shared/model/program';
import { ProgramProfile } from 'app/shared/model/program-profile';
import { ProgramConfiguration } from 'app/shared/model/program-configuration';

import { DataApiService } from 'app/shared/services/data-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  selectedProgram: Program;

  constructor(
    private dataApiService: DataApiService
  ) { }

  ngOnInit() {
  }

  onProgramSelect(program: Program) {
    console.log('onProgramSelect:', program, (program instanceof Program));
    this.selectedProgram = program;
  }
}
