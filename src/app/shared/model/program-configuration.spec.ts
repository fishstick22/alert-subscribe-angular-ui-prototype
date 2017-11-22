import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         Program, TEST_PROGRAM,
         ProgramConfiguration } from './testing/model-testing-helper';

const helper = new ModelTestingHelper();
const client = helper.getTestClient();
const communication = helper.getTestCommunication();
const progConfig: ProgramConfiguration  = helper.getTestProgramConfiguration();

describe('Shared/Model: ProgramConfiguration', () => {

  // empty constuctor tests
  // it('has undefined id', () => {
  //   const pc = new ProgramConfiguration();
  //   expect(pc.id).toBe(undefined);
  // });

  // it('has undefined name', () => {
  //   const pc = new ProgramConfiguration();
  //   expect(progConfig.name).toBe(undefined);
  // });

  // progConfig constuctor tests
  it('has undefined id', () => {
    const pc = new ProgramConfiguration(progConfig);
    expect(pc.id).toBe(undefined);
  });

  it('has name', () => {
    const pc = new ProgramConfiguration(progConfig);
    expect(pc.name).toBe('Prescription Alerts Order Status');
  });

  it('can clone itself with the ID left undefined', () => {

    const clone = progConfig.clone();
    expect(progConfig).not.toEqual(clone);
    expect(clone.id).toBe(undefined);
  });

  it('should create an instance', () => {
    expect(new ProgramConfiguration()).toBeTruthy();
  });
});
