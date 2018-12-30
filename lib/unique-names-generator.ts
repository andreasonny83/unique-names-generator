// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export class UniqueNamesGenerator {
  public adjectives: string[];
  public colors: string[];
  public animals: string[];

  constructor(adjectives: string[], colors: string[], animals: string[]) {
    this.adjectives = adjectives;
    this.colors = colors;
    this.animals = animals;
  }

  public generate(separator: string = '-', short?: boolean): string {
    if (!this.adjectives || !this.colors || !this.animals) {
      return '';
    }

    const adjective = this.adjectives[
      Math.floor(Math.random() * this.adjectives.length)
    ];
    const animal = this.animals[
      Math.floor(Math.random() * this.animals.length)
    ];

    if (short) {
      return `${adjective}${separator}${animal}`;
    }

    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    return `${adjective}${separator}${color}${separator}${animal}`;
  }
}
