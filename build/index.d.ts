declare const regex: RegExp;
export default regex;
export interface IMatch {
    styleSheetLink?: string;
}
export declare type Match = RegExpExecArray & IMatch;
