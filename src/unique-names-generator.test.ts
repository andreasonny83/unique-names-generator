import { uniqueNamesGenerator, Config, adjectives, colors, animals, NumberDictionary } from '.';

describe('unique-names-generator', () => {
  it('should generate a random name', () => {
    // Arrange
    const config: Config = {
      dictionaries: [adjectives, colors, animals],
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toBeDefined();
  });

  it('generate: should generate a random name given only 2 dictionaries', () => {
    // Arrange
    const config: Config = {
      dictionaries: [['a'], ['b']],
      separator: '-',
    };
    const expected = 'a-b';

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toEqual(expected);
  });

  it('generate: should generate a random name given only 1 dictionary', () => {
    // Arrange
    const config: Config = {
      dictionaries: [['a']],
      separator: '-',
    };
    const expected = 'a';

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toEqual(expected);
  });

  it('should generate a string composed by 3 words underscore separated', () => {
    // Arrange
    const config: Config = {
      dictionaries: [adjectives, colors, animals],
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^\w+_\w+_\w+$/);
  });

  it('should require a dictionary option', () => {
    // Assert
    expect(() => (uniqueNamesGenerator as () => string)()).toThrowErrorMatchingInlineSnapshot(
      `"A "dictionaries" array must be provided. This is a breaking change introduced starting from Unique Name Generator v4. Read more about the breaking change here: https://github.com/andreasonny83/unique-names-generator#migration-guide"`,
    );
  });

  it('should accept a custom separator', () => {
    // Arrange
    const config: Config = {
      dictionaries: [animals, colors, adjectives],
      separator: '+',
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^\w+\+\w+\+\w+$/);
  });

  it('should accept an emoji as separator', () => {
    // Arrange
    const config: Config = {
      dictionaries: [animals, colors, adjectives],
      separator: '🎃',
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^\w+🎃\w+🎃\w+$/);
  });

  it('should accept a word as separator', () => {
    // Arrange
    const config: Config = {
      dictionaries: [animals, colors, adjectives],
      separator: 'SPACE',
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^\w+SPACE\w+SPACE\w+$/);
  });

  it('should accept a short mode', () => {
    // Arrange
    const config: Config = {
      dictionaries: [animals, colors, adjectives],
      length: 2,
    };

    // Act
    const response = uniqueNamesGenerator(config);

    // Assert
    expect(response).toMatch(/^\w+_\w+$/);
  });

  it('should accept a custom dictionary', () => {
    // Arrange
    const config: Config = {
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
    const config: Config = {
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
    const config: Config = {
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
    const config: Config = {
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
    const config: Config = {
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
    const config: Config = {
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
    const config: Config = {
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
    const config: Config = {
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

  it('should use a number dictionary', () => {
    // Arrange
    const numberDictionary = NumberDictionary.generate();
    const config: Config = {
      dictionaries: [['Dangerous'], ['Snake'], numberDictionary],
      length: 3,
      separator: '',
      style: 'capital',
    };

    // Act
    const result = uniqueNamesGenerator(config);

    // Assert
    expect(result).toMatch(/^DangerousSnake\d+$/);
  });

  it('should use a number dictionary with a minimum and a maximum value', () => {
    // Arrange
    const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });
    const config: Config = {
      dictionaries: [['Dangerous'], ['Snake'], numberDictionary],
      length: 3,
      separator: '',
      style: 'capital',
    };

    // Act
    const result = uniqueNamesGenerator(config);

    // Assert
    expect(result).toMatch(/^DangerousSnake\d{3}$/);
  });

  it('should use a number dictionary with a given length', () => {
    // Arrange
    const numberDictionary = NumberDictionary.generate({ length: 6 });
    const config: Config = {
      dictionaries: [['Dangerous'], ['Snake'], numberDictionary],
      length: 3,
      separator: '',
      style: 'capital',
    };

    // Act
    const result = uniqueNamesGenerator(config);

    // Assert
    expect(result).toMatch(/^DangerousSnake\d{6}$/);
  });

  it('should use a number dictionary with a given length', () => {
    // Arrange
    const firstRandomNumber = NumberDictionary.generate({ length: 2 });
    const secondRandomNumber = NumberDictionary.generate({ min: 100, max: 999 });

    const config: Config = {
      dictionaries: [firstRandomNumber, ['Snake'], secondRandomNumber],
      length: 3,
      separator: '',
      style: 'capital',
    };

    // Act
    const result = uniqueNamesGenerator(config);

    // Assert
    expect(result).toMatch(/^\d{2}Snake\d{3}$/);
  });
});
