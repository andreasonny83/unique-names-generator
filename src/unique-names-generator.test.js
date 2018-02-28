// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import UniqueNamesGenerator from './unique-names-generator';

describe('randomNameGenerator', () => {
  it('should exisist', () => {
    const uniqueNamesGenerator = new UniqueNamesGenerator();

    expect(uniqueNamesGenerator).toBeDefined();
  });

  it('should have a generate method ', () => {
    const uniqueNamesGenerator = new UniqueNamesGenerator();

    expect(uniqueNamesGenerator.generate).toBeDefined();
  });

  it('generate: should return nothing', () => {
    const uniqueNamesGenerator = new UniqueNamesGenerator();
    const expected = uniqueNamesGenerator.generate();

    expect(expected).toBeNull();
  });

  it('generate: should return a string', () => {
    const uniqueNamesGenerator = new UniqueNamesGenerator([], [], []);
    const expected = uniqueNamesGenerator.generate();

    expect(typeof expected).toEqual('string');
  });

  it('generate: should generate a random name', () => {
    const uniqueNamesGenerator = new UniqueNamesGenerator(['a'], ['b'], ['c']);
    const expected = uniqueNamesGenerator.generate();

    expect(expected).toEqual('a-b-c');
  });

  it('generate: should accept a custom separator character', () => {
    const uniqueNamesGenerator = new UniqueNamesGenerator(['a'], ['b'], ['c']);
    const expected = uniqueNamesGenerator.generate('_');

    expect(expected).toEqual('a_b_c');
  });

  it('should generate random combinations', () => {
    const adjectives = ['mockAdjective1', 'mockAdjective2', 'mockAdjective3'];
    const mockColors = ['mockColor1', 'mockColor2', 'mockColor3'];
    const mockAnimals = ['mockAnimal1', 'mockAnimal2', 'mockAnimal3'];
    const uniqueNamesGenerator = new UniqueNamesGenerator(adjectives, mockColors, mockAnimals);

    const expected = uniqueNamesGenerator.generate();

    expect(expected).toMatch(/^mockAdjective[123]-mockColor[123]-mockAnimal[123]$/);
  });
});
