# Contribution guide

We love pull requests from everyone.
By participating in this project, you agree to abide by the [code of conduct].

## How to Contribute

Fork, then clone the repo:

```
git clone git@github.com:your-username/unique-names-generator.git
```

Set up your machine:

```
npm install
```

Make sure the tests pass:

```
npm test
```

Make your change. Add tests for your change. Make the tests pass:

```
npm test
```

## Semantic Versioning

We follow [semantic versioning](https://semver.org). We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes. When we make breaking changes, we also introduce deprecation warnings in a minor version so that our users learn about the upcoming changes and migrate their code in advance.

Every significant change is documented in the [release notes](https://github.com/andreasonny83/unique-names-generator/releases/latest).

## Style Guide

We use an automatic code formatter called [Prettier](https://prettier.io).
Run `npm run format` after making any changes to the code.

Then, our linter will catch most issues that may exist in your code. You can check the status of your code styling by simply running `npm run lint`.

## Sending a Pull Request

Please consider these guidelines when filing a pull request:

*  Commits follow the [Angular commit convention](https://github.com/angular/angular.js/blob/main/DEVELOPERS.md#-git-commit-guidelines)
*  Typescript code follows the rules set in the `.prettierrc` file. Run `npm run format` to automatically format all the documents with [Prettier](https://prettier.io).
*  Features and bug fixes should be covered by test cases

Push to your fork and [submit a pull request][pr].

[pr]: https://github.com/andreasonny83/unique-names-generator/compare/

At this point you're waiting on us.
We may suggest some changes or improvements or alternatives.

Some things that will increase the chance that your pull request is accepted:

* Write tests.
* Write a [good commit message][commit].

[commit]: https://github.com/angular/angular.js/blob/main/DEVELOPERS.md#-git-commit-guidelines
