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

  it('should not alter the words when a style is not provided', () => {
    // Arrange
    const expectedName = 'TeSt_dEfauLt_STYLE';
    const config: UniqueNamesGeneratorConfig = {
      separator: '_',
      length: 3,
      dictionaries: [['TeSt'], ['dEfauLt'], ['STYLE']],
    };

    // Act
    const result = uniqueNamesGenerator(config);

    // Assert
    expect(result).toEqual(expectedName);
  });

  it('should return a lower case formatted name when style is set to "lowerCase"', () => {
    // Arrange
    const expectedName = 'test_default_style';
    const config: UniqueNamesGeneratorConfig = {
      separator: '_',
      length: 3,
      dictionaries: [['TEST'], ['dEfault'], ['style']],
      style: 'lowerCase',
    };

    // Act
    const result = uniqueNamesGenerator(config);

    // Assert
    expect(result).toEqual(expectedName);
  });

  it('should return a lower case formatted name when style is set to "lowerCase"', () => {
    // Arrange
    const expectedName = 'test_default_style';
    const config: UniqueNamesGeneratorConfig = {
      separator: '_',
      length: 3,
      dictionaries: [['test'], ['default'], ['style']],
      style: 'lowerCase',
    };

    // Act
    const result = uniqueNamesGenerator(config);

    // Assert
    expect(result).toEqual(expectedName);
  });

  it('should return an upper case formatted name when style is set to "upperCase"', () => {
    // Arrange
    const expectedName = 'TEST_DEFAULT_STYLE';
    const config: UniqueNamesGeneratorConfig = {
      separator: '_',
      length: 3,
      dictionaries: [['test'], ['default'], ['style']],
      style: 'upperCase',
    };

    // Act
    const result = uniqueNamesGenerator(config);

    // Assert
    expect(result).toEqual(expectedName);
  });

  it('should return a capitalized formatted name when style is set to "capital"', () => {
    // Arrange
    const expectedName = 'Test_Default_Style';
    const config: UniqueNamesGeneratorConfig = {
      separator: '_',
      length: 3,
      dictionaries: [['test'], ['default'], ['style']],
      style: 'capital',
    };

    // Act
    const result = uniqueNamesGenerator(config);

    // Assert
    expect(result).toEqual(expectedName);
  });
});
