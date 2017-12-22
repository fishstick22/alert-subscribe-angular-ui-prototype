import { Injectable } from '@angular/core';

import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration } from 'app/shared/model/testing/model-testing-helper';

import { ProgramsService } from 'app/shared/services/programs/programs.service';

const helper = new ModelTestingHelper();
const program = helper.getTestProgram();
export const PROGS: Program[] = [program];

// re-export for tester convenience
// export { Program } from 'app/shared/model/program';
export { ProgramsService } from 'app/shared/services/programs/programs.service';

@Injectable()
export class FakeProgramsService extends ProgramsService {

  programs = PROGS.map(p => p.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  async getProgramsThruApi(): Promise<Program[]> {
    try {
      // const response = await this.http.get(this.commApiEndpoint).toPromise();
      // return response.json() as Program[];
      // return response as Program[];
      return this.lastPromise = Promise.resolve<Program[]>(this.programs);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
