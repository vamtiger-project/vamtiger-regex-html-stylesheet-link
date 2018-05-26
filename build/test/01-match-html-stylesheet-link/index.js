"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const XRegExp = require("xregexp");
const index_1 = require("../../index");
const mock_data_1 = require("./mock-data");
describe("vamtiger-regex-html-body-inner-html: should match", function () {
    it("HTML body inner HTML", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const input = mock_data_1.default;
            const expected = '<link href="some/stylesheet/link/index.css" rel="stylesheet">';
            const match = input.match(index_1.default);
            const xMatch = XRegExp.exec(input, index_1.default);
            chai_1.expect(match).to.be.ok;
            chai_1.expect(match.length).to.be.gt(0);
            chai_1.expect(match[1]).to.equal(expected);
            chai_1.expect(xMatch).to.be.ok;
            chai_1.expect(xMatch.length).to.be.gt(0);
            chai_1.expect(xMatch[1]).to.equal(expected);
            chai_1.expect(xMatch.styleSheetLink).to.equal(expected);
        });
    });
});
//# sourceMappingURL=index.js.map