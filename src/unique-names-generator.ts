// Copyright (c) 2018-2022 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { UniqueNamesGenerator, Config } from './unique-names-generator.constructor';

const defaultConfig: Config = {
  separator: '_',
  dictionaries: [],
};

export const uniqueNamesGenerator = (customConfig: Config): string => {
  const dictionaries = [
    ...((customConfig && customConfig.dictionaries) || defaultConfig.dictionaries),
  ];

  const config: Config = {
    ...defaultConfig,
    ...customConfig,
    length: (customConfig && customConfig.length) || dictionaries.length,
    dictionaries,
  };

  if (!customConfig || !customConfig.dictionaries || !customConfig.dictionaries.length) {
    throw new Error(
      'A "dictionaries" array must be provided. This is a breaking change introduced starting from Unique Name Generator v4. Read more about the breaking change here: https://github.com/andreasonny83/unique-names-generator#migration-guide',
    );
  }

  const ung: UniqueNamesGenerator = new UniqueNamesGenerator(config);

  return ung.generate();
};
