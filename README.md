# Unique Names Generator


[![Build Status](https://travis-ci.com/andreasonny83/unique-names-generator.svg?branch=master)](https://travis-ci.com/andreasonny83/unique-names-generator)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
[![](https://img.shields.io/npm/v/unique-names-generator.svg)](https://npmjs.org/package/unique-names-generator)
[![](https://img.shields.io/npm/l/unique-names-generator.svg)](https://github.com/andreasonny83/unique-names-generator/blob/master/LICENSE)
[![Greenkeeper badge](https://badges.greenkeeper.io/andreasonny83/unique-names-generator.svg)](https://greenkeeper.io/)
[![](https://img.shields.io/npm/dt/unique-names-generator.svg)](https://npmjs.org/package/unique-names-generator)
![dependencies Status](https://img.shields.io/librariesio/release/npm/unique-names-generator)

[![NPM](https://nodei.co/npm/unique-names-generator.png)](https://npmjs.org/package/unique-names-generator)

> More than 28,000,000 name combinations

## Docs

This documentation is for the `unique-names-generator` v3.
If you are still using an older version of the library, please refer to the
[v2 Docs](https://github.com/andreasonny83/unique-names-generator/blob/v2.0.2/README.md)

### Migrating from v2 to v3

If you want to migrate from al older version into v3, please read the [Migration guide](#migration-guide)

## Prerequisites

This project requires NodeJS (at least version 6) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ node --version
v7.10.1

$ npm --version
4.2.0
```

## Table of contents

- [Unique Names Generator](#unique-names-generator)
  - [Docs](#docs)
    - [Migrating from v2 to v3](#migrating-from-v2-to-v3)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Typescript support](#typescript-support)
  - [API](#api)
    - [uniqueNamesGenerator(options)](#uniquenamesgeneratoroptions)
    - [options](#options)
      - [separator](#separator)
      - [length](#length)
      - [style](#style)
      - [dictionaries](#dictionaries)
  - [Examples](#examples)
    - [Custom dictionaries](#custom-dictionaries)
    - [Combine custom and provided dictionaries](#combine-custom-and-provided-dictionaries)
  - [Migration guide](#migration-guide)
    - [uniqueNamesGenerator](#uniquenamesgenerator)
    - [Separator](#separator)
    - [Short](#short)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contributors ✨](#contributors-%e2%9c%a8)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Install the package using npm or Yarn

```sh
$ npm i -S unique-names-generator
```

Or using Yarn

```sh
$ yarn add unique-names-generator
```

## Usage

```js
const { uniqueNamesGenerator } = require('unique-names-generator');

const randomName = uniqueNamesGenerator(); // big_red_donkey

const shortName = uniqueNamesGenerator({ length: 2 }); // big-donkey
```

### Typescript support

This package export a type definition file so you can use it, out of the box,
inside your Typescript project.

```typescript
import { uniqueNamesGenerator, UniqueNamesGeneratorConfig } from 'unique-names-generator';

const config: UniqueNamesGeneratorConfig = {
  separator: '-',
  length: 2.
};

const randomName: string = uniqueNamesGenerator(); // big_red_donkey

const shortName: string = uniqueNamesGenerator(config); // big-donkey
```

## API

### uniqueNamesGenerator(options)

Returns a `string` with a random generated name

### options

Type: `UniqueNamesGeneratorConfig`

#### separator

Type: `string`

Default: `_`

A string separator to be used for separate the words generated.
The default separator is set to `_`.

#### length

Type: `number`

Default: `3`

The default value is set to `3` and it will return a name composed of 3 words.
This values must be equal or minor to the number of [dictionaries](#dictionaries) defined (3 by default)

#### style

Type: `lowerCase | upperCase | capital`

Default: `lowerCase`

The default value is set to `lowerCase` and it will return a lower case name.
By setting the value to `upperCase`, the words, will be returned with all the letters in upper case format.
The `capital` option will capitalize each word of the unique name generated

```typescript
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

const capitalizedName: string = uniqueNamesGenerator({
  dictionaries: [colors, adjectives, animals],
  style: 'capital'
}); // Red_Big_Donkey

const upperCaseName: string = uniqueNamesGenerator({
  dictionaries: [colors, adjectives, animals],
  style: 'capital'
}); // RED_BIG_DONKEY

const lowerCaseName: string = uniqueNamesGenerator({
  dictionaries: [colors, adjectives, animals],
  style: 'capital'
}); // red_big_donkey
```

#### dictionaries

Type: `array`

Default: `[adjectives, colors, animals]`

This is an array of dictionaries. Each dictionary is an array of strings containing the words to use for generating the string.

The default dictionaries are provided in the following order: `adjectives, colors and animals`. If you don't like them in this order you can still manually import them from the library, then overwrite the dictionaries with your custom order

```typescript
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

const shortName: string = uniqueNamesGenerator({
  dictionaries: [colors, adjectives, animals]
}); // red_big_donkey
```

## Examples

### Custom dictionaries

By default, the Unique name generator library, come with 3 dictionaries out of the box so that you don't have to provide it manually.
However, you might want to extend the provided dictionaries or completely replace with your custom ones to meet your business requirements.

You can easily do that using the [dictionaries](#dictionaries) option.

```typescript
import { uniqueNamesGenerator } from 'unique-names-generator';

const starWarsCharacters = [
  'Han Solo',
  'Jabba The Hutt',
  'R2-D2',
  'Luke Skywalker',
  'Princess Leia Organa'
];
const colors = [
  'Green', 'Red', 'Yellow', 'Black'
]

const characterName: string = uniqueNamesGenerator({
  dictionaries: [colors, starWarsCharacters],
  length: 2,
  separator: ' '
}); // Green Luke Skywalker
```

### Combine custom and provided dictionaries

You can reuse the dictionaries provided by the library.
Just import the ones that you need and use them directly in your app.

```typescript
import { uniqueNamesGenerator, adjectives, colors } from 'unique-names-generator';

const improvedAdjectives = [
  ...adjectives,
  'abrasive',
  'brash',
  'callous',
  'daft',
  'eccentric',
];
const xMen = [
'professorX',
'beast',
'colossus',
'cyclops',
'iceman',
'wolverine',
];

const characterName: string = uniqueNamesGenerator({
  dictionaries: [improvedAdjectives, xMen],
  length: 2,
  separator: '-'
}); // eccentric-iceman
```

## Migration guide

Unique names generator v3 implements a couple of breaking changes.
If are bumping your local version to the v3, you might be interested in knowing the following:

### uniqueNamesGenerator

This will still work. Invoking the `uniqueNamesGenerator` function, will continue work as before :tada:

```typescript
const { uniqueNamesGenerator } = require('unique-names-generator');

const randomName = uniqueNamesGenerator(); // big_red_donkey
```

### Separator

**v2**

```typescript
const shortName = uniqueNamesGenerator('-'); // big-red-donkey
```

**v3**

```typescript
const shortName = uniqueNamesGenerator({ separator: '-' }); // big-red-donkey
```

### Short

The `short` property has been replaced by `length` so you can specify as many word as you want

**v2**

```typescript
const shortName = uniqueNamesGenerator(true); // big-donkey
```

**v3**

```typescript
const shortName = uniqueNamesGenerator({ length: 2 }); // big-donkey
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## License

[MIT License](https://andreasonny.mit-license.org/2018) © Andrea SonnY

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://about.me/andreasonny83"><img src="https://avatars0.githubusercontent.com/u/8806300?v=4" width="100px;" alt="Andrea Z"/><br /><sub><b>Andrea Z</b></sub></a><br /><a href="#question-andreasonny83" title="Answering Questions">💬</a> <a href="https://github.com/andreasonny83/unique-names-generator/commits?author=andreasonny83" title="Code">💻</a> <a href="#projectManagement-andreasonny83" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/digibake"><img src="https://avatars1.githubusercontent.com/u/6882093?v=4" width="100px;" alt="Baker"/><br /><sub><b>Baker</b></sub></a><br /><a href="https://github.com/andreasonny83/unique-names-generator/issues?q=author%3Adigibake" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/ajainuary"><img src="https://avatars1.githubusercontent.com/u/30972152?v=4" width="100px;" alt="Anurag Jain"/><br /><sub><b>Anurag Jain</b></sub></a><br /><a href="#ideas-ajainuary" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/erdahuja"><img src="https://avatars3.githubusercontent.com/u/15168716?v=4" width="100px;" alt="Deepak"/><br /><sub><b>Deepak</b></sub></a><br /><a href="https://github.com/andreasonny83/unique-names-generator/commits?author=erdahuja" title="Documentation">📖</a> <a href="#ideas-erdahuja" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/abhijitmehta"><img src="https://avatars2.githubusercontent.com/u/5481869?v=4" width="100px;" alt="Abhijit Mehta"/><br /><sub><b>Abhijit Mehta</b></sub></a><br /><a href="#ideas-abhijitmehta" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!