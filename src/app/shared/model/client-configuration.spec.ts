import { ClientConfiguration } from './client-configuration';
import { Client }              from './client';
import { Communication }       from './communication';

const client = new Client(142, 'AMD', 'AT&T INC.');
const communication = new Communication(261, 'Order Received');
const clientConfig: ClientConfiguration  = new ClientConfiguration();

clientConfig.id = 1,
clientConfig.name = 'Prescription Alerts Order Status',
clientConfig.description = 'Order Status Client-level Configuration',
clientConfig.chanEmailPriority = 2,
clientConfig.chanIvrPriority = 3,
clientConfig.chanSmsPriority = 1,
clientConfig.chanMailPriority = 0,
clientConfig.chanMobilePriority = 0,
clientConfig.chanMandatory = 'Email',
clientConfig.effective = '2017-1-1',
clientConfig.expiration = '9999-12-31',
clientConfig.client = client;
clientConfig.communication = communication;

describe('ClientConfiguration', () => {

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
