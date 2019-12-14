// Copyright (c) 2018-2019 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { UniqueNamesGenerator, Config } from '../lib/unique-names-generator';

describe('randomNameGenerator', () => {
  it('should exists', () => {
    // Arrange
    const config: Config = {
      dictionaries: [[], [], []],
      separator: '_',
      length: 3,
      shuffleDictionaries: false,
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
      shuffleDictionaries: false,
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
      shuffleDictionaries: false,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const response = uniqueNamesGenerator.generate();

    // Assert
    expect(response).toEqual('undefined-undefined-undefined');
  });

  it('generate: should return a string', () => {
    // Arrange
    const config: Config = {
      dictionaries: [[], [], []],
      separator: '_',
      length: 3,
      shuffleDictionaries: false,
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
      length: 3,
      shuffleDictionaries: false,
    };
    const expected = 'a-b-c';

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
      shuffleDictionaries: false,
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
      shuffleDictionaries: false,
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
      shuffleDictionaries: false,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const expected = uniqueNamesGenerator.generate();

    // Assert
    expect(expected).toMatch(/^Adjective[123]-Animal[123]$/);
  });

  it('should throw an error when there are no dictionaries', () => {
    // Arrange
    const config: any = {
      dictionaries: undefined,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const expected = () => uniqueNamesGenerator.generate();

    // Assert
    expect(() => expected()).toThrowErrorMatchingSnapshot();
  });

  it('should throw an error when there are no enough dictionaries', () => {
    // Arrange
    const config: Config = {
      dictionaries: [],
      length: 2,
      separator: '_',
      shuffleDictionaries: false,

    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const expected = () => uniqueNamesGenerator.generate();

    // Assert
    expect(() => expected()).toThrowErrorMatchingSnapshot();
  });

  it('should throw an error when the provided length is invalid', () => {
    // Arrange
    const config: Config = {
      dictionaries: [],
      length: -1,
      separator: '_',
      shuffleDictionaries: false,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);
    const expected = () => uniqueNamesGenerator.generate();

    // Assert
    expect(() => expected()).toThrowErrorMatchingSnapshot();
  });

  it.only('should always use the same dictionaries when shuffleDictionaries is disabled', () => {
    const adjectives = ['Adjective'];
    const colors = ['Color'];
    const subjects = ['Animal'];

    // Arrange
    const config: Config = {
      dictionaries: [adjectives, colors, subjects],
      length: 2,
      separator: '_',
      shuffleDictionaries: false,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);

    const res1 = uniqueNamesGenerator.generate();
    const res2 = uniqueNamesGenerator.generate();
    const res3 = uniqueNamesGenerator.generate();

    // Assert
    expect(res1).toEqual(res2);
    expect(res1).toEqual(res3);
  });

  it('should shuffle the provided dictionaries when shuffleDictionaries is enabled', () => {
    const adjectives = ['Adjective'];
    const colors = ['Color'];
    const subjects = ['Animal'];

    // Arrange
    const config: Config = {
      dictionaries: [adjectives, colors, subjects],
      length: 2,
      separator: '_',
      shuffleDictionaries: true,
    };

    // Act
    const uniqueNamesGenerator = new UniqueNamesGenerator(config);

    const res1 = uniqueNamesGenerator.generate();
    const res2 = uniqueNamesGenerator.generate();

    // Assert
    expect(res1).not.toEqual(res2);
  });

});
