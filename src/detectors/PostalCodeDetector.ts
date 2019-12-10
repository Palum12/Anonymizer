import { Detector } from './Detector';
import { AnonymizerDto } from '../../src/models/AnonymizerDto';
import { PhraseType } from '../../src/models/PhraseType';

export class PostalCodeDetector implements Detector {
    detectMatchingWords(words: string[]): AnonymizerDto[] {
        return words.filter(word => this.validatePostalCode(word))
            .map(word => Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.postalCode})); 
    }

    private validatePostalCode(word: string): boolean {
        return word.length === 6 && word.indexOf('-') == 2;
    }
}