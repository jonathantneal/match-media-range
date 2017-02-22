# match-media-range [<img src="https://resources.whatwg.org/logo-dom.svg" alt="DOM Logo" width="90" height="90" align="right">][match-media-range]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[match-media-range] lets you use ranges in media queries passed to [`window.matchMedia`], following the [Media Queries Level 4 specification].

```js
matchMedia('(20em < width < 50em)');
```

Play with [match-media-range] in your browser right now at [CodePen].

## Usage

Install [match-media-range] to your project.

```sh
npm install match-media-range
```

Import [match-media-range] as a resource.

```js
import matchMedia from 'match-media-range';
```

Use the `matchMedia` method as a replacement for `window.matchMedia`.

```js
matchMedia('(20em < width) and (width < 50em)');
```

---

This library is 327 bytes.

[npm-url]: https://www.npmjs.com/package/match-media-range
[npm-img]: https://img.shields.io/npm/v/match-media-range.svg
[cli-url]: https://travis-ci.org/jonathantneal/match-media-range
[cli-img]: https://img.shields.io/travis/jonathantneal/match-media-range.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/match-media-range.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[`window.matchMedia`]: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
[CodePen]: http://codepen.io/jonneal/pen/WRgjqG
[Media Queries Level 4 specification]: https://drafts.csswg.org/mediaqueries/#mq-range-context
[match-media-range]: https://github.com/jonathantneal/match-media-range
