import { uniqueNamesGenerator, UniqueNamesGeneratorConfig, colors } from '../index';

describe('unique-names-generator', () => {
  it('should generate a random name', () => {
    // Act
    const response = uniqueNamesGenerator();

    // Assert
    expect(response).toBeDefined();
  });

  it('should generate a string composed by 3 words underscore separated', () => {
    // Act
    const response = uniqueNamesGenerator();

    // Assert
    expect(response).toMatch(/^\w+_\w+_\w+$/);
  });

  it('should accept a custom separator', () => {
    // Arrange
    const config: UniqueNamesGeneratorConfig = {
      separator: '+',
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^\w+\+\w+\+\w+$/);
  });

  it('should accept an emoji as separator', () => {
    // Arrange
    const config: UniqueNamesGeneratorConfig = {
      separator: '🎃',
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^\w+🎃\w+🎃\w+$/);
  });

  it('should accept a word as separator', () => {
    // Arrange
    const config: UniqueNamesGeneratorConfig = {
      separator: 'SPACE',
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^\w+SPACE\w+SPACE\w+$/);
  });

  it('should accept a short mode', () => {
    // Arrange
    const config: UniqueNamesGeneratorConfig = {
      length: 2,
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^\w+_\w+$/);
  });

  it('should accept a custom dictionary', () => {
    // Arrange
    const config: UniqueNamesGeneratorConfig = {
      separator: ' ',
      length: 1,
      dictionaries: [['testAdjective']],
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^testAdjective$/);
  });

  it('should accept two custom dictionaries', () => {
    // Arrange
    const config: UniqueNamesGeneratorConfig = {
      separator: ' ',
      length: 2,
      dictionaries: [['testColor'], ['testAdjective']],
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^testColor\stestAdjective$/);
  });

  it('should reuse a template dictionary combined to a custom one', () => {
    // Arrange
    const config: UniqueNamesGeneratorConfig = {
      separator: ' ',
      length: 2,
      dictionaries: [['testSubject'], colors],
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^testSubject\s\w+$/);
  });
});
