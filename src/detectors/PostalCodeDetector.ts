import { Detector } from './Detector';

export class PostalCodeDetector implements Detector {
    detectMatchingWords(words: string[]): string[] {
        return words.filter(word => this.validatePostalCode(word)); 
    }

    private validatePostalCode(word: string): boolean {
        return word.indexOf('-') == 2;
    }
}