# match-media-range [<img src="https://resources.whatwg.org/logo-dom.svg" alt="DOM Logo" width="90" height="90" align="right">][match-media-range]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Tweet About This][soc-img]][soc-url]

[match-media-range] is a polyfill that lets you use media query ranges in
[`window.matchMedia`], following the [Media Queries Level 4 specification].

```js
matchMedia('(20em < width < 50em)');
```

**[Try it right now using CodePen]**

---

## Usage

Add [match-media-range] to your build tool:

```bash
npm install match-media-range --save-dev
```

Import [match-media-range] as a resource.

```js
import matchMedia from 'match-media-range';
```

---

[match-media-range] is 327 bytes when ES5 transpiled, minified, and gzipped.

[npm-url]: https://www.npmjs.com/package/match-media-range
[npm-img]: https://img.shields.io/npm/v/match-media-range.svg
[cli-url]: https://travis-ci.org/jonathantneal/match-media-range
[cli-img]: https://img.shields.io/travis/jonathantneal/match-media-range.svg
[soc-url]: https://twitter.com/intent/tweet?text=Use%20media%20query%20ranges%20in%20window.matchMedia%20https%3A%2F%2Fgithub.com%2Fjonathantneal%2Fmatch-media-range
[soc-img]: https://img.shields.io/twitter/url/http/shields.io.svg?style=social

[match-media-range]: https://github.com/jonathantneal/match-media-range
[`window.matchMedia`]: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
[Media Queries Level 4 specification]: https://drafts.csswg.org/mediaqueries/#mq-range-context
[Try it right now using CodePen]: https://jonathantneal.github.io/match-media-range/
