// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import adjectives from './dictionaries/adjectives.json';
import colors from './dictionaries/colors.json';
import animals from './dictionaries/animals.json';
import { UniqueNamesGenerator } from './unique-names-generator';

export const generate = (separator = '_') => {
  const uniqueNamesGenerator = new UniqueNamesGenerator(
    adjectives,
    colors,
    animals
  );

  return uniqueNamesGenerator.generate(separator);
};
