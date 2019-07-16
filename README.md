# Polenta

![Build status](https://travis-ci.org/caonUlisses/polenta.svg?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/polenta.svg)
![GitHub](https://img.shields.io/github/license/caonUlisses/polenta.svg)
![GitHub stars](https://img.shields.io/github/stars/caonUlisses/polenta.svg?style=social)

A tool **with** modern JS in mind

## Polenta?

> [Polenta](https://en.wikipedia.org/wiki/Polenta) (/pəˈlɛntə, poʊˈ-/, Italian: [poˈlɛnta]) is a dish of boiled cornmeal that was historically made from other grains. It may be served as a hot porridge, or it may be allowed to cool and solidify into a loaf that can be baked, fried, or grilled.

Polenta is a simple dish, that may have a simple flavor, but when combined with the right stuff, becomes incredible.

This package exposes functions for each html tag and a render function to
generate elements using either [Shadow
DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
or regular DOM. Nothing else.

## Installation

Just run ``` yarn add polenta ``` or ``` npm install polenta ``` if you have a module bundler set up

## Usage

A simple use case would be:

In your index.html file:

```html
...
<div id="root"></div>
<script type="module" src="./path/to/yourFile.js">
```

And on yourFile.js:

```javascript
import * as polenta from 'https://www.unpkg.com/polenta@1.0.4/index.js' //
assuming no webpack is to be found

const content = polenta.div('id="my-div" class="blue big"',
  polenta.p('class="my-text"', "Hello World"))

polenta.render(content, 'root')
```

Just functions, no boilerplate, no dependencies, 1.56KB.
