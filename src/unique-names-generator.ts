// Copyright (c) 2018-2022 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { UniqueNamesGenerator, Config } from './unique-names-generator.constructor';
import { getDictionariesForLanguages, Language } from './language-dictionaries';

const defaultConfig: Config = {
  separator: '_',
  dictionaries: [],
};

export const uniqueNamesGenerator = (customConfig?: Config): string => {
  // Handle undefined config for backward compatibility
  if (!customConfig) {
    throw new Error(
      'A "dictionaries" array must be provided. This is a breaking change introduced starting from Unique Name Generator v4. Read more about the breaking change here: https://github.com/andreasonny83/unique-names-generator#migration-guide',
    );
  }

  const { language, dictionaries } = customConfig;

  // Load language-specific dictionaries if language is specified
  let finalDictionaries = dictionaries;

  if (language) {
    const languages = Array.isArray(language) ? language : [language];

    // Create language-specific dictionaries
    finalDictionaries = getDictionariesForLanguages(languages);
  }

  const config: Config = {
    ...defaultConfig,
    ...customConfig,
    length: (customConfig && customConfig.length) || finalDictionaries.length,
    dictionaries: finalDictionaries,
  };

  if (!finalDictionaries || !finalDictionaries.length) {
    throw new Error(
      'A "dictionaries" array must be provided. This is a breaking change introduced starting from Unique Name Generator v4. Read more about the breaking change here: https://github.com/andreasonny83/unique-names-generator#migration-guide',
    );
  }

  const ung: UniqueNamesGenerator = new UniqueNamesGenerator(config);

  return ung.generate();
};
