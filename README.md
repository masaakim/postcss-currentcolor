# postcss-currentcolor [![Build Status](https://travis-ci.org/morishitter/postcss-currentcolor.svg)](https://travis-ci.org/morishitter/postcss-currentcolor)

PostCSS plugin to transform (`currentcolor`|`current-color`) to `currentColor`

## Installation

```shell
$ npm install postcss-currentcolor
```

## Example

Input:

```
.foo {
  color: currentcolor;
}

.bar {
  fill: current-color;
}
```

Yield:

```
.foo {
  color: currentColor;
}

.bar {
  fill: currentColor;
}
```

## Usage

```
// dependencies
var fs = require("fs")
var postcss = require("postcss")
var currentcolor = require("postcss-currentcolor")

// css to be processed
var css = fs.readFileSync("input.css", "utf8")

// process css
var output = postcss()
  .use(currentcolor())
  .process(css)
  .css
```

## License

The MIT License (MIT)

Copyright (c) 2016 Masaaki Morishita
