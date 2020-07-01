interface Config {
  min: number;
  max: number;
  length?: number;
}

const defaultConfig: Config = {
  min: 1,
  max: 999,
};

export class NumberDictionary {
  public static generate(config: Partial<Config> = {}): string[] {
    let min = config.min || defaultConfig.min;
    let max = config.max || defaultConfig.max;

    if (config.length) {
      const length = Math.pow(10, config.length);
      min = length / 10;
      max = length - 1;
      return [`${Math.floor(Math.random() * (max - min)) + min}`];
    }

    return [`${Math.floor(Math.random() * (max - min)) + min}`];
  }
}
