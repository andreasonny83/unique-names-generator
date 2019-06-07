# Unique Names Generator

> More than 28,000,000 name combinations

[![Build Status](https://travis-ci.com/andreasonny83/unique-names-generator.svg?branch=master)](https://travis-ci.com/andreasonny83/unique-names-generator)
[![](https://img.shields.io/npm/v/unique-names-generator.svg)](https://npmjs.org/package/unique-names-generator)
[![](https://img.shields.io/npm/l/unique-names-generator.svg)](https://github.com/andreasonny83/unique-names-generator/blob/master/LICENSE)
[![Greenkeeper badge](https://badges.greenkeeper.io/andreasonny83/unique-names-generator.svg)](https://greenkeeper.io/)
[![](https://img.shields.io/npm/dt/unique-names-generator.svg)](https://npmjs.org/package/unique-names-generator)
[![dependencies Status](https://david-dm.org/andreasonny83/unique-names-generator/status.svg)](https://david-dm.org/andreasonny83/unique-names-generator)

[![NPM](https://nodei.co/npm/unique-names-generator.png)](https://npmjs.org/package/unique-names-generator)

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

### length

Type: `number`

Default: `3`

The default value is set to `3` and it will return a name composed of 3 words.
This values must be equal or minor to the number of [dictionaries](#dictionaries) defined (3 by default)

### dictionaries

Type: `array`

Default: `[adjectives, colors, animals]`

This is an array of dictionaries. Each dictionary is an array of strings containing the words to use for generating the string.

The default dictionaries are provided in the following order: `adjectives, colors and animals`. If you don't like them in this order you can still manually import them from the library, then overwrite the dictionaries with your custom order

```typescript
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

const shortName: string = uniqueNamesGenerator({
  dictionaries: [color, adjectives, animal]
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
  space: ' '
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
  space: '-'
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
