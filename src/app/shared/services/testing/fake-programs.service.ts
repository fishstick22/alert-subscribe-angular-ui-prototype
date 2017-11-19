// re-export for tester convenience
export { Program } from 'app/shared/model/program';
export { ProgramsService } from 'app/shared/services/programs/programs.service';

import { Program } from 'app/shared/model/program';
import { ProgramsService } from 'app/shared/services/programs/programs.service';

export const PROGS: Program[] = [
  new Program(1, 'Prescription Alerts')
//   {'id': 1, 'name': 'Prescription Alerts',     'description': 'PBM Communications including Order Status and Refill Reminder alerts'},
];

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
