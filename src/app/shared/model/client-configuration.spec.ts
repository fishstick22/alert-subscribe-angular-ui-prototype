import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         Program, TEST_PROGRAM,
         ProgramConfiguration } from './testing/model-testing-helper';

const helper = new ModelTestingHelper();
const client = helper.getTestClient();
const communication = helper.getTestCommunication();
const clientConfig: ClientConfiguration  = helper.getTestClientConfiguration();

describe('Shared/Model: ClientConfiguration', () => {

  // clientConfig constuctor tests
  it('has undefined id', () => {
    const pc = new ClientConfiguration(clientConfig);
    expect(pc.id).toBe(undefined);
  });

  it('has name', () => {
    const pc = new ClientConfiguration(clientConfig);
    expect(pc.name).toBe('Prescription Alerts Order Status');
  });

  it('can clone itself with the ID left undefined', () => {
    const clone = clientConfig.clone();
    expect(clientConfig).not.toEqual(clone);
    expect(clone.id).toBe(undefined);
  });

  it('should create an instance', () => {
    expect(new ClientConfiguration()).toBeTruthy();
  });
});
