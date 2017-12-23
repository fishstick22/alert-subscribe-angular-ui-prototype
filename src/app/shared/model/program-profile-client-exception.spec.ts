import { ProgramProfileClientException } from './program-profile-client-exception';

describe('ProgramProfileClientException', () => {
  it('should create an instance', () => {
    expect(new ProgramProfileClientException(1, 142)).toBeTruthy();
  });
});
