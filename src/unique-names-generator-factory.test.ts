import { uniqueNamesGeneratorFactory, Config, adjectives, colors, animals } from '.';

describe('unique-names-generator-factory', () => {
  it('should generate random names if no seeds passed in', () => {
    const config: Config = {
      dictionaries: [adjectives, colors, animals],
    };
    const generator1 = uniqueNamesGeneratorFactory(config);
    const response1 = generator1();
    expect(response1).toBeDefined();

    const generator2 = uniqueNamesGeneratorFactory(config);
    const response2 = generator2();
    expect(response2).toBeDefined();

    expect(response1).not.toBe(response2);
  });

  it('should generate deterministic random names if same seeds passed in', () => {
    const config: Config = {
      dictionaries: [adjectives, colors, animals],
    };
    const generator1 = uniqueNamesGeneratorFactory(config, 'some-seed');
    const response1 = generator1();
    expect(response1).toBeDefined();

    const generator2 = uniqueNamesGeneratorFactory(config, 'some-seed');
    const response2 = generator2();
    expect(response2).toBeDefined();

    expect(response1).toBe(response2);
  });

  it('should interfere other generators random seeding', () => {
    const config: Config = {
      dictionaries: [adjectives, colors, animals],
    };
    const generator = uniqueNamesGeneratorFactory(config, 'some-seed');
    const results = [generator(), generator(), generator()];

    const generator1 = uniqueNamesGeneratorFactory(config, 'some-seed');
    const generator2 = uniqueNamesGeneratorFactory(config, 'other-seed');

    const result1 = generator1();
    generator2();
    generator2();
    const result2 = generator1();
    generator2();
    const result3 = generator1();

    expect([result1, result2, result3]).toEqual(results);
  });
});
