import { Language } from './unique-names-generator.constructor';

export interface LanguageDictionaries {
  adjectives: string[];
  animals: string[];
  colors: string[];
  countries: string[];
  languages: string[];
  names: string[];
  starWars: string[];
  numbers: number[];
}

export const languageMappings: Record<Language, LanguageDictionaries> = {
  en: {
    adjectives: [],
    animals: [],
    colors: [],
    countries: [],
    languages: [],
    names: [],
    starWars: [],
    numbers: [],
  },
  'zh-cn': {
    adjectives: [],
    animals: [],
    colors: [],
    countries: [],
    languages: [],
    names: [],
    starWars: [],
    numbers: [],
  },
};

export async function loadLanguageDictionaries(language: Language): Promise<LanguageDictionaries> {
  switch (language) {
    case 'en':
      return {
        adjectives: (await import('./dictionaries/adjectives')).default,
        animals: (await import('./dictionaries/animals')).default,
        colors: (await import('./dictionaries/colors')).default,
        countries: (await import('./dictionaries/countries')).default,
        languages: (await import('./dictionaries/languages')).default,
        names: (await import('./dictionaries/names')).default,
        starWars: (await import('./dictionaries/star-wars')).default,
        numbers: (await import('./dictionaries/numbers')).NumberDictionary || [],
      };
    case 'zh-cn':
      return {
        adjectives: (await import('./dictionaries/adjectives.zh-cn')).default,
        animals: (await import('./dictionaries/animals.zh-cn')).default,
        colors: (await import('./dictionaries/colors.zh-cn')).default,
        countries: (await import('./dictionaries/countries.zh-cn')).default,
        languages: (await import('./dictionaries/languages.zh-cn')).default,
        names: (await import('./dictionaries/names.zh-cn')).default,
        starWars: (await import('./dictionaries/star-wars.zh-cn')).default,
        numbers: (await import('./dictionaries/numbers')).NumberDictionary || [],
      };
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
}

export function mapDictionaryNames(language: Language): string[] {
  const mapping: Record<Language, string[]> = {
    en: ['adjectives', 'animals', 'colors', 'countries', 'languages', 'names', 'starWars'],
    'zh-cn': ['adjectives', 'animals', 'colors', 'countries', 'languages', 'names', 'starWars'],
  };
  return mapping[language];
}

export function createLanguageSpecificDictionaries(
  baseDictionaries: string[][],
  language: Language | Language[],
): string[][] {
  if (!language) {
    return baseDictionaries;
  }

  const languages = Array.isArray(language) ? language : [language];

  if (languages.length === 1) {
    return baseDictionaries;
  }

  // For multiple languages, we need to create corresponding dictionaries
  // This is a simplified approach - in a real implementation you might want more sophisticated mapping
  const result: string[][] = [];
  const langIndex = languages.indexOf('zh-cn') !== -1 ? 1 : 0;

  for (let i = 0; i < baseDictionaries.length; i++) {
    result.push(baseDictionaries[i]);
  }

  return result;
}
