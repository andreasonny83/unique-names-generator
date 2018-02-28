// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const adjectives = require('./lib/dictionaries/adjectives.json');
const colors = require('./lib/dictionaries/colors.json');
const animals = require('./lib/dictionaries/animals.json');
const UniqueNamesGenerator = require('./lib/unique-names-generator');

exports.generate = (separator = '_') => {
  const uniqueNamesGenerator = new UniqueNamesGenerator(adjectives, colors, animals);

  return uniqueNamesGenerator.generate(separator);
};
