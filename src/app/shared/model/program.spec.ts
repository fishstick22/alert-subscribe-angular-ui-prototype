import { Program } from './program';

const id = 1;
const name = 'Prescription Alerts';

describe('Program', () => {

  it('has id', () => {
    const prog = new Program(id, name);
    expect(prog.id).toBe(id);
  });

  it('has name', () => {
    const prog = new Program(id, name);
    expect(prog.name).toBe(name);
  });

  it('should create an instance', () => {
    expect(new Program()).toBeTruthy();
  });

  it('can clone itself', () => {
    const prog = new Program(id, name);
    const clone = prog.clone();
    expect(prog).toEqual(clone);
  });
});
