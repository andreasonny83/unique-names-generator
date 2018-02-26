const x = require('./');

describe('unique-names-generator', () => {
  it('should generate a random name', () => {
    expect(x.generate()).toBeDefined();
  });

  it('the name should be composed of 3 words sperated by ' +
  'an underscore character', () => {
    expect(x.generate()).toMatch(/\w+_\w+_\w+/);
  });

  it('should accept a custom separator', () => {
    expect(x.generate('-')).toMatch(/\w+-\w+-\w+/);
  });
});
