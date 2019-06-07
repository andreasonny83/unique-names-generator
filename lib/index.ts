// Copyright (c) 2018-2019 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import adjectivesDictionary from './dictionaries/adjectives.json';
import colorsDictionary from './dictionaries/colors.json';
import animalsDictionary from './dictionaries/animals.json';
import { UniqueNamesGenerator, Config } from './unique-names-generator';

const defaultConfig: Config = {
  separator: '_',
  length: 3,
  dictionaries: [adjectivesDictionary, colorsDictionary, animalsDictionary],
};

export type UniqueNamesGeneratorConfig = Partial<Config>;

export const uniqueNamesGenerator = (customConfig?: UniqueNamesGeneratorConfig): string => {
  const config: Config = {
    ...defaultConfig,
    ...customConfig,
    dictionaries: [...((customConfig && customConfig.dictionaries) || defaultConfig.dictionaries)],
  };

  const ung: UniqueNamesGenerator = new UniqueNamesGenerator(config);

  return ung.generate();
};
