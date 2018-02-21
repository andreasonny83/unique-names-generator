// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const adjectives = require('./lib/dictionaries/adjectives');
const colors = require('./lib/dictionaries/colors');
const animals = require('./lib/dictionaries/animals');
const RandomNameGenerator = require('./lib/random-name-generator');

module.exports.generate = (separator = '_') =>
  RandomNameGenerator.generate(adjectives, colors, animals, separator);
