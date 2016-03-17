# base-project [![NPM version](https://img.shields.io/npm/v/base-project.svg)](https://www.npmjs.com/package/base-project) [![Build Status](https://img.shields.io/travis/jonschlinkert/base-project.svg)](https://travis-ci.org/jonschlinkert/base-project)

> Base plugin that adds a `project` getter to the instance for getting the name of a project. Gets the project name for new (empty) projects, projects with only a .git repository, and/or projects with a package.json.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install base-project --save
```

## Usage

```js
var project = require('base-project');
var Base = require('base');
var base = new Base();

base.use(project());
```

## Related projects

* [base-cli](https://www.npmjs.com/package/base-cli): Plugin for base-methods that maps built-in methods to CLI args (also supports methods from a… [more](https://www.npmjs.com/package/base-cli) | [homepage](https://github.com/jonschlinkert/base-cli)
* [base-cwd](https://www.npmjs.com/package/base-cwd): Base plugin that adds a getter/setter for the current working directory. | [homepage](https://github.com/jonschlinkert/base-cwd)
* [base-data](https://www.npmjs.com/package/base-data): adds a `data` method to base-methods. | [homepage](https://github.com/jonschlinkert/base-data)
* [base-fs](https://www.npmjs.com/package/base-fs): base-methods plugin that adds vinyl-fs methods to your 'base' application for working with the file… [more](https://www.npmjs.com/package/base-fs) | [homepage](https://github.com/jonschlinkert/base-fs)
* [base-option](https://www.npmjs.com/package/base-option): Adds a few options methods to base, like `option`, `enable` and `disable`. See the readme… [more](https://www.npmjs.com/package/base-option) | [homepage](https://github.com/node-base/base-option)
* [base-pkg](https://www.npmjs.com/package/base-pkg): Base plugin for adding a `pkg` object with get/set methods for getting data from package.json… [more](https://www.npmjs.com/package/base-pkg) | [homepage](https://github.com/jonschlinkert/base-pkg)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/base-project/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the [MIT license](https://github.com/jonschlinkert/base-project/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on March 17, 2016._