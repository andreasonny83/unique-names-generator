// Copyright (c) 2018-2019 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import adjectives from './dictionaries/adjectives';
import colors from './dictionaries/colors';
import animals from './dictionaries/animals';
import { UniqueNamesGenerator, Config } from './unique-names-generator';

export type UniqueNamesGeneratorConfig = Partial<Config>;

const defaultConfig: Config = {
  separator: '_',
  length: 3,
  dictionaries: [adjectives, colors, animals],
};

export const uniqueNamesGenerator = (customConfig: UniqueNamesGeneratorConfig = {}): string => {
  const config: Config = {
    ...defaultConfig,
    ...customConfig,
    dictionaries: [...((customConfig && customConfig.dictionaries) || defaultConfig.dictionaries)],
  };

  const ung: UniqueNamesGenerator = new UniqueNamesGenerator(config);

  return ung.generate();
};
