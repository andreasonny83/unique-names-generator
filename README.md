# Unique Names Generator

> More than 28,000,000 name combinations

[![](https://img.shields.io/npm/v/unique-names-generator.svg)](https://npmjs.org/package/unique-names-generator)
[![](https://img.shields.io/npm/l/unique-names-generator.svg)](https://github.com/andreasonny83/unique-names-generator/blob/master/LICENSE)
[![](https://img.shields.io/npm/dt/unique-names-generator.svg)](https://npmjs.org/package/unique-names-generator)

[![NPM](https://nodei.co/npm/unique-names-generator.png)](https://npmjs.org/package/unique-names-generator)

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
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Typescript support](#typescript-support)
  - [API](#api)
    - [uniqueNamesGenerator(separator?: string, short?: boolean)](#uniquenamesgeneratorseparator-string-short-boolean)
      - [separator](#separator)
    - [short](#short)
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

const shortName = uniqueNamesGenerator('-', true); // big-donkey
```

### Typescript support

This package export a type definition file so you can use it out of the box
inside your typescript project.

```ts
import { uniqueNamesGenerator } from 'unique-names-generator';

const randomName: string = uniqueNamesGenerator(); // big_red_donkey

const shortName: string = uniqueNamesGenerator('-', true); // big-donkey
```

## API

### uniqueNamesGenerator(separator?: string, short?: boolean)

Returns a `string` with a random generated name

#### separator

Type: `string`
Default: `_`

A string separator to be used for separate the words generated.
The default separator is set to `_`.

### short

Type: `boolean`
Default: `false`

If set, it will return a random word composed by 2 words.
The default value is set tu true and it will return a name composed by 3 words.

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