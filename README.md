# is-existing-folder

[![NPM version][npm-image]][npm-url]

> Check if a certain path exists and is a folder (i.e. not a file)

## Installation

Install `is-existing-folder` using [npm](https://www.npmjs.com/):

```bash
npm install --save is-existing-folder
```

## Usage

### Module usage

```javascript
var isExistingFolder = require('is-existing-folder');

isExistingFolder('/a/file/path', function (result) {
  // ...
});
```

## API

### `isExistingFolder(filepath, cb)`

| Name | Type | Description |
|------|------|-------------|
| filepath | `String` | File path to check |
| cb | `Function` | Callback function |


## License

MIT

[npm-url]: https://npmjs.org/package/is-existing-folder
[npm-image]: https://badge.fury.io/js/is-existing-folder.svg

