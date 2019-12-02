// Copyright (c) 2018-2019 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export interface Config {
  separator: string;
  length: number;
  dictionaries: string[][];
  random: boolean,
}

export class UniqueNamesGenerator {
  private dictionaries: string[][];
  private length: number;
  private separator: string;
  private random: boolean;
  private generateRandomNumber(low: number = 0, high: number) {
    return Math.floor(Math.random()*(high - low)) + low;
  }
  constructor(config: Config) {
    const { length, separator, dictionaries, random } = config;

    this.dictionaries = dictionaries;
    this.separator = separator;
    this.length = length;
    this.random = random;
  }

  public generate(): string {
    if (!this.dictionaries) {
      throw new Error(
        'Cannot find any dictionary. Please provide at least one, or leave ' +
          'the "dictionary" field empty in the config object',
      );
    }

    if (this.length <= 0) {
      throw new Error('Invalid length provided');
    }

    if (this.length > this.dictionaries.length) {
      throw new Error(
        'The length cannot be bigger than the number of dictionaries.\n' +
          `Length provided: ${this.length}. Number of dictionaries provided: ${
            this.dictionaries.length
          }`,
      );
    }
    let dictionariesToUse: string[][];
    if (this.random) {
      let randomDictionaries: string[][] = [];
      for (let index = 0; index < this.length; index++) {
        const randomDictionary = this.dictionaries[this.generateRandomNumber(0, this.length)];
        randomDictionaries = [...randomDictionaries, randomDictionary];
      }
      dictionariesToUse = randomDictionaries;
    } else {
      dictionariesToUse = this.dictionaries.slice(0, this.length);
    }
    return dictionariesToUse.reduce((acc: string, curr: string[]) => {
      const rnd = this.generateRandomNumber(0, curr.length)
      console.log(curr, rnd)
      const word = curr[rnd];
      return acc ? `${acc}${this.separator}${word}` : `${word}`;
    }, '');
  }
}
