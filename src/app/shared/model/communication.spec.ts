import { Communication } from './communication';

const id = 261;
const name = 'Order Received';

describe('Communication', () => {

  it('has id', () => {
    const comm = new Communication(id, name);
    expect(comm.id).toBe(id);
  });

  it('has name', () => {
    const comm = new Communication(id, name);
    expect(comm.name).toBe(name);
  });

  it('should create an instance', () => {
    expect(new Communication(id, name)).toBeTruthy();
  });

  it('can clone itself', () => {
    const comm = new Communication(id, name);
    const clone = comm.clone();
    expect(comm).toEqual(clone);
  });
});
