// Chinese dictionary imports
import adjectivesZh from './dictionaries/adjectives.zh-cn';
import animalsZh from './dictionaries/animals.zh-cn';
import colorsZh from './dictionaries/colors.zh-cn';
import countriesZh from './dictionaries/countries.zh-cn';
import languagesZh from './dictionaries/languages.zh-cn';
import namesZh from './dictionaries/names.zh-cn';
import starWarsZh from './dictionaries/star-wars.zh-cn';

// English dictionary imports
import adjectivesEn from './dictionaries/adjectives';
import animalsEn from './dictionaries/animals';
import colorsEn from './dictionaries/colors';
import countriesEn from './dictionaries/countries';
import languagesEn from './dictionaries/languages';
import namesEn from './dictionaries/names';
import starWarsEn from './dictionaries/star-wars';

export const languageDictionaries = {
  en: {
    adjectives: adjectivesEn,
    animals: animalsEn,
    colors: colorsEn,
    countries: countriesEn,
    languages: languagesEn,
    names: namesEn,
    starWars: starWarsEn,
  },
  'zh-cn': {
    adjectives: adjectivesZh,
    animals: animalsZh,
    colors: colorsZh,
    countries: countriesZh,
    languages: languagesZh,
    names: namesZh,
    starWars: starWarsZh,
  },
};

export type Language = 'en' | 'zh-cn';

export function getDictionariesForLanguage(language: Language): string[][] {
  const langDict = languageDictionaries[language];
  return [
    langDict.adjectives,
    langDict.animals,
    langDict.colors,
    langDict.countries,
    langDict.languages,
    langDict.names,
    langDict.starWars,
  ];
}

export function getDictionariesForLanguages(languages: Language[]): string[][] {
  const result: string[][] = [];

  for (const language of languages) {
    const langDicts = getDictionariesForLanguage(language);
    result.push(...langDicts);
  }

  return result;
}
