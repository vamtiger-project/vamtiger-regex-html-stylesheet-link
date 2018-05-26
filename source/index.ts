import * as XRegExp from 'xregexp';

const quote = `('|")`;
const spaceAnything = `\\s+.*?`
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
const regex = XRegExp(
    pattern, 
    flags
);

export default regex;

export interface IMatch {
    styleSheetLink?: string;
}

export type Match = RegExpExecArray & IMatch;