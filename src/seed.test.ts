import { getFromSeed } from './seed';

describe('getFromSeed', () => {
  const cases = [
    [0, 5],
    [1, 12],
    [2, 14],
    [3, 14],
    [4, 18],
    [5, 13],
    [6, 10],
    [7, 0],
    [8, 3],
    [9, 3],
    [10, 10],
    [11, 10],
    [12, 5],
    [13, 11],
    [14, 8],
    [15, 4],
    [16, 12],
    [17, 13],
    [18, 7],
    [19, 1],
    [20, 15],
    [21, 8],
    [22, 12],
    [23, 1],
    [24, 6],
    [25, 11],
    [30, 17],
    [36, 19],
    [44, 16],
    [51, 2],
    [58, 9],
    [89, 18],
    [2020, 16],
    [202020, 19],
    [20202020, 9],
    [2020202020, 19],
    [202020202020, 15],
    [20202020202020, 5],
    [2020202020202011, 15],
    ['string', 17],
    ['just a string', 14],
    ['this is a very long string used to generate a unique seed', 3],
    ['this is another and different very long string used to generate a unique seed', 4],
    ['another very long string used to generate a unique seed', 14],
    ['a shorter string used to generate a unique seed', 17],
  ];
  it.each(cases)(`given a seed of %p, should return %p`, (seed, expected) => {
    // Arrange
    const wordsInDictionary = 20;

    // Act
    const response = Math.floor(getFromSeed(seed) * wordsInDictionary);

    // Assert
    expect(response).toBe(expected);
  });
});
