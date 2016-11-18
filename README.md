# cssbag [![NPM version](https://img.shields.io/npm/v/cssbag.svg?style=flat-square)](https://npmjs.com/package/cssbag) [![NPM downloads](https://img.shields.io/npm/dm/cssbag.svg?style=flat-square)](https://npmjs.com/package/cssbag) [![Build Status](https://img.shields.io/circleci/project/egoist/cssbag/master.svg?style=flat-square)](https://circleci.com/gh/egoist/cssbag)

cssbag is a collection of PostCSS plugins I use, it's similar to [precss](https://github.com/jonathantneal/precss).

## Install

```bash
$ npm install -D cssbag
```

## Usage

```js
const cssbag = require('cssbag')

postcss([cssbag(options)]).process(css) //...
```

## API

### cssbag([options])

Each plugin has its own option namespace. For example, if you want to set options for `postcss-smart-import`, simply:

```js
postcss([
  cssbag({
    'smart-import': {},
    // or use camelCase
    smartImport: {}
  })
])
```

## Plugins

### [postcss-nested](https://github.com/postcss/postcss-nested)

Unwrap nested rules like how Sass does it.

### [postcss-advanced-variables](https://github.com/jonathantneal/postcss-advanced-variables)

Sass-like variables, conditionals, and iteratives.

### [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)

Transform W3C CSS Custom Properties for cascading variables.

### [postcss-smart-import](https://github.com/sebastian-software/postcss-smart-import)

Loading/including other files (transform @import rules by inlining content) and quering/referring assets (referred in url() functions). Think of postcss-import + postcss-url + postcss-assets.

### [postcss-mixins](https://github.com/postcss/postcss-mixins)

PostCSS plugin for mixins.

### [postcss-calc](https://github.com/postcss/postcss-calc)

PostCSS plugin to reduce calc()

### [postcss-media-minmax](https://github.com/postcss/postcss-media-minmax)

Writing simple and graceful Media Queries!

### [postcss-custom-selectors](https://github.com/postcss/postcss-custom-selectors)

Transform W3C CSS Extensions(Custom Selectors) to more compatible CSS.

### [postcss-custom-media](https://github.com/postcss/postcss-custom-media)

Transform W3C CSS Custom Media Queries to more compatible CSS

### [postcss-property-lookup](https://github.com/simonsmith/postcss-property-lookup)

PostCSS plugin for property lookups, similar to Stylus.

### [postcss-selector-matches](https://github.com/postcss/postcss-selector-matches)

Transform :matches() W3C CSS pseudo class to more compatible CSS (simpler selectors).

### [postcss-selector-not](https://github.com/postcss/postcss-selector-not)

Transform :not() W3C CSS level 4 pseudo class to more compatible CSS (multiple css3 :not() selectors).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
