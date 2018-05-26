"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XRegExp = require("xregexp");
const quote = `('|")`;
const spaceAnything = `\\s+.*`;
const pattern = `
    (?<styleSheetLink>
        <link
        ${spaceAnything}
        rel=
            ${quote}?
            .*?
            ${quote}?
        .*?
        >
    )
`;
const flags = 'xmnsi';
const regex = XRegExp(pattern, flags);
exports.default = regex;
//# sourceMappingURL=index.js.map