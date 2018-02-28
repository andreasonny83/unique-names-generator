// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

class UniqueNamesGenerator {
  constructor(adjectives, colors, animals) {
    this.adjectives = adjectives;
    this.colors = colors;
    this.animals = animals;
  }

  generate(separator = '-') {
    if (!this.adjectives || !this.colors || !this.animals) {
      return null;
    }

    const adjective = this.adjectives[Math.floor((Math.random() * this.adjectives.length))];
    const color = this.colors[Math.floor((Math.random() * this.colors.length))];
    const animal = this.animals[Math.floor((Math.random() * this.animals.length))];

    return `${adjective}${separator}${color}${separator}${animal}`;
  }
}

module.exports = UniqueNamesGenerator;
