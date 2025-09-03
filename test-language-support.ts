import { uniqueNamesGenerator, Config, Language } from '../src/index';

// Test the new language functionality
async function testLanguageSupport() {
  console.log('Testing language support...\n');

  // Test Chinese single language
  console.log('=== Testing Chinese (zh-cn) ===');
  try {
    const chineseName = uniqueNamesGenerator({
      language: 'zh-cn',
      length: 3,
      separator: '_',
    });
    console.log('Chinese name:', chineseName);
  } catch (error) {
    console.log('Chinese test error:', error.message);
  }

  // Test English single language
  console.log('\n=== Testing English (en) ===');
  try {
    const englishName = uniqueNamesGenerator({
      language: 'en',
      length: 3,
      separator: '_',
    });
    console.log('English name:', englishName);
  } catch (error) {
    console.log('English test error:', error.message);
  }

  // Test multiple languages
  console.log('\n=== Testing Multiple Languages (en, zh-cn) ===');
  try {
    const multiLangName = uniqueNamesGenerator({
      language: ['en', 'zh-cn'],
      length: 3,
      separator: '_',
    });
    console.log('Multi-language name:', multiLangName);
  } catch (error) {
    console.log('Multi-language test error:', error.message);
  }

  // Test backward compatibility (no language parameter)
  console.log('\n=== Testing Backward Compatibility ===');
  try {
    const backwardCompatibleName = uniqueNamesGenerator({
      dictionaries: [
        ['red', 'blue', 'green'],
        ['cat', 'dog', 'bird'],
        ['happy', 'sad', 'angry'],
      ],
      length: 3,
      separator: '_',
    });
    console.log('Backward compatible name:', backwardCompatibleName);
  } catch (error) {
    console.log('Backward compatibility test error:', error.message);
  }

  console.log('\n=== Test Complete ===');
}

// Run the test
testLanguageSupport();
