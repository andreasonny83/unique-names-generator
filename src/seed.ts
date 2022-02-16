// Copyright (c) 2018-2022 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const mulberry32 = (seed: number): number => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

export const getFromSeed = (seed: number | string): number => {
  if (typeof seed === 'string') {
    const numberFromString = seed
      .split('')
      .map((char: string) => char.charCodeAt(0))
      .reduce((acc, curr) => acc + curr, 1);

    const numericSeed = Math.floor(Number(numberFromString));
    return mulberry32(numericSeed);
  }
  return mulberry32(seed);
};
