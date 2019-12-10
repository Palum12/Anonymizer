import { PhraseType } from './../models/PhraseType';
import { Detector } from "./Detector";
import { AnonymizerDto } from './../models/AnonymizerDto';

export class DateDetector implements Detector {
    detectMatchingWords(words: string[]): AnonymizerDto[] {
        return words
        .filter(word => this.validateSimpleDate(word))
        .map(word => Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.date}));
    }

    private validateSimpleDate(word: string): boolean {
        var dashRegex = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/g;
        var stripeRegex = /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/g
        var dottedRegex = /^(0[1-9]|[12]\d|3[01]).(0[1-9]|1[0-2]).(19|20)\d{2}$/g
        return dashRegex.test(word) || stripeRegex.test(word) || dottedRegex.test(word);
    }
}