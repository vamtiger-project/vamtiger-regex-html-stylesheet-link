import {expect} from 'chai';
import * as XRegExp from 'xregexp';
import {default as regex, Match} from '../../index';
import html from './mock-data';

describe("vamtiger-regex-html-body-inner-html: should match", function () {
    it("HTML body inner HTML", async function () {
        const input = html;
        const expected = '<link href="some/stylesheet/link/index.css" rel="stylesheet">';
        const match = input.match(regex) as RegExpExecArray;
        const xMatch = XRegExp.exec(input, regex) as Match;

        expect(match).to.be.ok;
        expect(match.length).to.be.gt(0);
        expect(match[1]).to.equal(expected);

        expect(xMatch).to.be.ok;
        expect(xMatch.length).to.be.gt(0);
        expect(xMatch[1]).to.equal(expected);
        expect(xMatch.styleSheetLink).to.equal(expected);
    })
})