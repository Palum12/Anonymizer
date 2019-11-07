import {Detector} from "./Detector";

export class DateDetector implements Detector {
    detectMatchingWords(words: string[]): string[] {
        return words.filter(word => this.validateSimpleDate(word));
    }

    private validateSimpleDate(word: string): boolean {
        var dashRegex = /^ (0 ? [1 - 9] | 1[0 - 2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/;
        var stripeRegex = /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/
        return dashRegex.test(word) || lineRegex.test(word);
    }
}