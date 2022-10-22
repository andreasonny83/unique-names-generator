import { UniqueNamesGenerator, Config } from './unique-names-generator.constructor';
import { NumberDictionary } from './dictionaries';

describe('randomNameGenerator', () => {
  it('should exists', () => {
    // Arrange
    const config: Config = {
      dictionaries: [[], [], []],
      separator: '_',
      length: 3,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);

    // Assert
    expect(uniqueNamesGenerator).toBeDefined();
  });

  it('should have a generate method ', () => {
    // Arrange
    const config: Config = {
      dictionaries: [[], [], []],
      separator: '_',
      length: 3,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);

    // Assert
    expect(uniqueNamesGenerator.generate).toBeDefined();
  });

  it('generate: should return nothing', () => {
    // Arrange
    const config: Config = {
      dictionaries: [[], [], []],
      separator: '-',
      length: 3,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const response = uniqueNamesGenerator.generate();

    // Assert
    expect(response).toEqual('');
  });

  it('generate: should return a string', () => {
    // Arrange
    const config: Config = {
      dictionaries: [[], [], []],
      separator: '_',
      length: 3,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const response = uniqueNamesGenerator.generate();

    // Assert
    expect(typeof response).toEqual('string');
  });

  it('generate: should generate a random name', () => {
    // Arrange
    const config: Config = {
      dictionaries: [['a'], ['b'], ['c']],
      separator: '-',
    };
    const expected = 'a-b-c';

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const response = uniqueNamesGenerator.generate();

    // Assert
    expect(response).toEqual(expected);
  });

  it('generate: should generate a random name given only 2 dictionaries', () => {
    // Arrange
    const config: Config = {
      dictionaries: [['a'], ['b']],
      separator: '-',
    };
    const expected = 'a-b';

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const response = uniqueNamesGenerator.generate();

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
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const response = uniqueNamesGenerator.generate();

    // Assert
    expect(response).toEqual(expected);
  });

  it('generate: should accept a custom separator character', () => {
    // Arrange
    const config: Config = {
      dictionaries: [['a'], ['b'], ['c']],
      separator: '_',
      length: 3,
    };
    const expected = 'a_b_c';

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const response = uniqueNamesGenerator.generate();

    // Assert
    expect(response).toEqual(expected);
  });

  it('should generate random combinations', () => {
    // Arrange
    const adjectives = ['Adjective1', 'Adjective2', 'Adjective3'];
    const colors = ['Color1', 'Color2', 'Color3'];
    const subjects = ['Animal1', 'Animal2', 'Animal3'];
    const config: Config = {
      dictionaries: [adjectives, colors, subjects],
      separator: '-',
      length: 3,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const response = uniqueNamesGenerator.generate();

    // Assert
    expect(response).toMatch(/^Adjective[123]-Color[123]-Animal[123]$/);
  });

  it('should generate only 2 word when depth is set to 2', () => {
    // Arrange
    const adjectives = ['Adjective1', 'Adjective2', 'Adjective3'];
    const colors = ['Color1', 'Color2', 'Color3'];
    const subjects = ['Animal1', 'Animal2', 'Animal3'];
    const config: Config = {
      dictionaries: [adjectives, subjects, colors],
      separator: '-',
      length: 2,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const expected = uniqueNamesGenerator.generate();

    // Assert
    expect(expected).toMatch(/^Adjective[123]-Animal[123]$/);
  });

  it('should generate the same name given an equal seed', () => {
    // Arrange
    const adjectives = ['Adjective1', 'Adjective2', 'Adjective3'];
    const colors = ['Color1', 'Color2', 'Color3'];
    const subjects = ['Animal1', 'Animal2', 'Animal3'];
    const config: Config = {
      dictionaries: [adjectives, subjects, colors],
      separator: '-',
      seed: 120498,
    };

    // Act
    let uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const name1 = uniqueNamesGenerator.generate();
    uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const name2 = uniqueNamesGenerator.generate();
    uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const name3 = uniqueNamesGenerator.generate();
    uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const name4 = uniqueNamesGenerator.generate();

    // Assert
    expect(name1).toEqual(name2);
    expect(name1).toEqual(name3);
    expect(name1).toEqual(name4);
  });

  it('should generate the same name given an equal string seed', () => {
    // Arrange
    const adjectives = ['Adjective1', 'Adjective2', 'Adjective3'];
    const colors = ['Color1', 'Color2', 'Color3'];
    const subjects = ['Animal1', 'Animal2', 'Animal3'];
    const config: Config = {
      dictionaries: [adjectives, subjects, colors],
      separator: '-',
      seed: 'seed as a string',
    };

    // Act
    let uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const name1 = uniqueNamesGenerator.generate();
    uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const name2 = uniqueNamesGenerator.generate();
    uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const name3 = uniqueNamesGenerator.generate();
    uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const name4 = uniqueNamesGenerator.generate();

    // Assert
    expect(name1).toEqual(name2);
    expect(name1).toEqual(name3);
    expect(name1).toEqual(name4);
  });

  it('should throw an error when there are no dictionaries', () => {
    // Arrange
    const config = {} as Config;

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const expected = (): unknown => uniqueNamesGenerator.generate();

    // Assert
    expect(() => expected()).toThrowErrorMatchingSnapshot();
  });

  it('should throw an error when there are no enough dictionaries', () => {
    // Arrange
    const config: Config = {
      dictionaries: [],
      length: 2,
      separator: '_',
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const expected = (): unknown => uniqueNamesGenerator.generate();

    // Assert
    expect(() => expected()).toThrowErrorMatchingSnapshot();
  });

  it('should throw an error when the provided length is invalid', () => {
    // Arrange
    const config: Config = {
      dictionaries: [],
      length: -1,
      separator: '_',
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const expected = (): unknown => uniqueNamesGenerator.generate();

    // Assert
    expect(() => expected()).toThrowErrorMatchingSnapshot();
  });

  describe('style', () => {
    it('should return a lower case formatted name when style is set to "lowerCase"', () => {
      // Arrange
      const config: Config = {
        dictionaries: [['TEST'], ['default'], ['style']],
        length: 3,
        separator: '_',
        style: 'lowerCase',
      };

      const expectedName = 'test_default_style';

      // Act
      const uniqueNamesGenerator = new UniqueNamesGenerator(config);
      const result = uniqueNamesGenerator.generate();

      // Assert
      expect(result).toEqual(expectedName);
    });

    it('should return a capitalized formatted name when style is set to "capital"', () => {
      // Arrange
      const config: Config = {
        dictionaries: [['test'], ['default'], ['style']],
        length: 3,
        separator: '_',
        style: 'capital',
      };

      const expectedName = 'Test_Default_Style';

      // Act
      const uniqueNamesGenerator = new UniqueNamesGenerator(config);
      const result = uniqueNamesGenerator.generate();

      // Assert
      expect(result).toEqual(expectedName);
    });

    it('should return an upper case formatted name when style is set to "upperCase"', () => {
      // Arrange
      const config: Config = {
        dictionaries: [['test'], ['default'], ['style']],
        length: 3,
        separator: '_',
        style: 'upperCase',
      };

      const expectedName = 'TEST_DEFAULT_STYLE';

      // Act
      const uniqueNamesGenerator = new UniqueNamesGenerator(config);
      const result = uniqueNamesGenerator.generate();

      // Assert
      expect(result).toEqual(expectedName);
    });

    it('should return an upper case formatted name even when some number dictionaries are present', () => {
      // Arrange
      const config: Config = {
        dictionaries: [['test'], ['default'], NumberDictionary.generate({ min: 1, max: 1 })],
        length: 3,
        separator: '_',
        style: 'upperCase',
      };

      const expectedName = 'TEST_DEFAULT_1';

      // Act
      const uniqueNamesGenerator = new UniqueNamesGenerator(config);
      const result = uniqueNamesGenerator.generate();

      // Assert
      expect(result).toEqual(expectedName);
    });

    it('should not throw any error when the word in the dictionary is empty and a formatted style is provided', () => {
      // Arrange
      const config: Config = {
        dictionaries: [[], [], []],
        length: 3,
        separator: '_',
        style: 'lowerCase',
      };

      const expectedName = '';

      // Act
      const uniqueNamesGenerator = new UniqueNamesGenerator(config);
      const result = uniqueNamesGenerator.generate();

      // Assert
      expect(result).toEqual(expectedName);
    });

    it('should use a number dictionary', () => {
      jest.spyOn(NumberDictionary, 'generate').mockReturnValue(['123']);

      // Arrange
      const numberDictionary = NumberDictionary.generate();
      const config: Config = {
        dictionaries: [['Dangerous'], ['Snake'], numberDictionary],
        length: 3,
        separator: '',
        style: 'capital',
      };

      const expectedName = 'DangerousSnake123';

      // Act
      const uniqueNamesGenerator = new UniqueNamesGenerator(config);
      const result = uniqueNamesGenerator.generate();

      // Assert
      expect(NumberDictionary.generate).toHaveBeenCalled();
      expect(result).toEqual(expectedName);
    });
  });
});
