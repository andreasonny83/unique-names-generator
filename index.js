// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const adjectives = require('./lib/dictionaries/adjectives.json');
const colors = require('./lib/dictionaries/colors.json');
const animals = require('./lib/dictionaries/animals.json');
const uniqueNamesGenerator = require('./lib/unique-names-generator');

exports.generate = (separator = '_') =>
  uniqueNamesGenerator.generate(adjectives, colors, animals, separator);
