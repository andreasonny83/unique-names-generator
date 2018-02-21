// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const RandomNameGenerator = {
  generate: (adjectives, colors, animals, separator = '-') => {
    const adjective = adjectives[Math.floor((Math.random() * adjectives.length))];
    const color = colors[Math.floor((Math.random() * colors.length))];
    const animal = animals[Math.floor((Math.random() * animals.length))];

    return `${adjective}${separator}${color}${separator}${animal}`;
  },
};

module.exports = RandomNameGenerator;
