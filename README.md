# VAMTIGER Regex HTML Stylesheet Link
A [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to match a HTML stylesheet link for defined HTML document text.

## Installation
[VAMTIGER Regex HTML Stylesheet Link](https://github.com/vamtiger-project/vamtiger-regex-html-stylesheet-link) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-regex-html-stylesheet-link
```
or
```bash
yarn add vamtiger-regex-html-stylesheet-link
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Regex HTML Stylesheet Link](https://github.com/vamtiger-project/vamtiger-regex-html-stylesheet-link):
```javascript
import regex from 'vamtiger-regex-html-stylesheet-link';
```
or
```javascript
const regex = require('vamtiger-regex-html-stylesheet-link').default;
```

[VAMTIGER Regex HTML Stylesheet Link](https://github.com/vamtiger-project/vamtiger-regex-html-stylesheet-link) can be used to match a HTML stylesheet link for defined HTML document text:
```javascript
const regex = require('vamtiger-regex-html-stylesheet-link').default;

const input = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
    <link href="some/stylesheet/link/index.css" rel="stylesheet">
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>`;
const match = input.match(regex);

/**
 * if (match) {
 *     // Yep, the input string has a HTML title
 *     match[1] === '<link href="some/stylesheet/link/index.css" rel="stylesheet">'
 * }
 **/
```

Named capture groups can be referenced when used together with [XRegExp](https://www.npmjs.com/package/xregexp):
```javascript
const XRegExp = require('xregexp');
const regex = require('vamtiger-regex-html-stylesheet-link').default;
const input = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
    <link href="some/stylesheet/link/index.css" rel="stylesheet">
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>`;
const match = XRegExp.exec(input, regex);
// const match: Match = XRegExp.exec(input, regex); // Typescript

/**
 * if (match) {
 *     // Yep, the input string has a HTML title
 *     match.styleSheetLink === '<link href="some/stylesheet/link/index.css" rel="stylesheet">'
 * }
 **/
```
