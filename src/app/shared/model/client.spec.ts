import { Client } from './client';

const id = 142;
const code = 'AMD';
const name = 'AT&T INC.';

describe('Client', () => {

  it('has id', () => {
    const client = new Client(id, code, name);
    expect(client.id).toBe(id);
  });

  it('has code', () => {
    const client = new Client(id, code, name);
    expect(client.code).toBe(code);
  });

  it('has name', () => {
    const client = new Client(id, code, name);
    expect(client.name).toBe(name);
  });

  it('should create an instance', () => {
    expect(new Client()).toBeTruthy();
  });

  it('can clone itself', () => {
    const client = new Client(id, name);
    const clone = client.clone();
    expect(client).toEqual(clone);
  });
});
