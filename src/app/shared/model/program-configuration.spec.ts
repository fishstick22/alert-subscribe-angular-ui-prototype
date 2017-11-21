import { ProgramConfiguration } from './program-configuration';
import { Program }              from './program';
import { Communication }        from './communication';

const program = new Program(1, 'Prescription Alerts');
const commmunication = new Communication(261, 'Order Received');
const progConfig: ProgramConfiguration  = new ProgramConfiguration();

progConfig.id = 1,
progConfig.name = 'Prescription Alerts Order Status',
progConfig.description = 'Order Status Program-level Configuration',
progConfig.chanEmailPriority = 2,
progConfig.chanIvrPriority = 3,
progConfig.chanSmsPriority = 1,
progConfig.chanMailPriority = 0,
progConfig.chanMobilePriority = 0,
progConfig.chanMandatory = 'Email',
progConfig.effective = '2017-1-1',
progConfig.expiration = '9999-12-31',
progConfig.program = program;
progConfig.communication = commmunication;


describe('ProgramConfiguration', () => {

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
