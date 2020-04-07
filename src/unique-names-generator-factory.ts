import seedrandom from 'seedrandom';
import { Config } from './unique-names-generator.constructor';
import { uniqueNamesGenerator } from './unique-names-generator';

export const uniqueNamesGeneratorFactory = (options: Config, seed?: string): (() => string) => {
  let nextSeed = seed || String(Math.random());

  return (): string => {
    // for deterministic results
    seedrandom(nextSeed, { global: true });
    nextSeed = String(Math.random());

    return uniqueNamesGenerator(options);
  };
};
