import { uniqueNamesGenerator } from '../lib/index';

describe('unique-names-generator', () => {
  it('should generate a random name', () => {
    expect(uniqueNamesGenerator()).toBeDefined();
  });

  it(
    'the name should be composed of 3 words sperated by ' +
      'an underscore character',
    () => {
      expect(uniqueNamesGenerator()).toMatch(/\w+_\w+_\w+/);
    }
  );

  it('should accept a custom separator', () => {
    expect(uniqueNamesGenerator('-')).toMatch(/\w+-\w+-\w+/);
  });
});
