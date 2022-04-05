/* eslint-disable @typescript-eslint/no-this-alias */
// Copyright (c) 2018-2022 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { getFromSeed } from './seed';

type Style = 'lowerCase' | 'upperCase' | 'capital';

export interface Config {
  dictionaries: string[][];
  separator?: string;
  length?: number;
  style?: Style;
  seed?: number | string;
  random?: boolean;
  maxLength?: number;
}

export class UniqueNamesGenerator {
  private dictionaries: string[][];
  private length: number;
  private separator: string;
  private style: Style;
  private seed: number | string;
  private random: boolean;
  private maxLength: number;

  constructor(config: Config) {
    const { length, separator, dictionaries, style, seed, random, maxLength } = config;

    this.dictionaries = dictionaries;
    this.separator = separator;
    this.length = length;
    this.style = style;
    this.seed = seed;
    this.random = random;
    this.maxLength = maxLength;
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

    if (this.maxLength <= 0) {
      throw new Error('Invalid maxLength provided');
    }

    if (this.length > this.dictionaries.length) {
      throw new Error(
        'The length cannot be bigger than the number of dictionaries.\n' +
          `Length provided: ${this.length}. Number of dictionaries provided: ${this.dictionaries.length}`,
      );
    }

    let seed = this.seed;
    let dictionaryArray = [...this.dictionaries.slice(0, this.length)];

    if (this.random && this.length <= this.dictionaries.length) {
      const newItems = [];
      const items = [...this.dictionaries];
      for (let i = 0; i < this.length; i++) {
        const idx = Math.floor(Math.random() * items.length);
        newItems.push(items[idx]);
        items.splice(idx, 1);
      }
      dictionaryArray = newItems;
    }
    let toReturn = dictionaryArray.reduce((acc: string, curr: string[]) => {
      let randomFloat;
      if (seed) {
        randomFloat = getFromSeed(seed);
        seed = randomFloat * 4294967296;
      } else {
        randomFloat = Math.random();
      }
      const rnd = Math.floor(randomFloat * curr.length);

      let word = curr[rnd] || '';
      if (this.style === 'lowerCase') {
        word = word.toLowerCase();
      } else if (this.style === 'capital') {
        const [firstLetter, ...rest] = word.split('');
        word = firstLetter.toUpperCase() + rest.join('');
      } else if (this.style === 'upperCase') {
        word = word.toUpperCase();
      }

      return acc ? `${acc}${this.separator}${word}` : `${word}`;
    }, '');

    if (this.maxLength && toReturn.length > this.maxLength) {
      toReturn = toReturn.substring(0, this.maxLength);
    }
    return toReturn;
  }
}
