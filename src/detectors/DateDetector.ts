import {Detector} from "./Detector";

export class DateDetector implements Detector {
    detectMatchingWords(words: string[]): string[] {
        return words.filter(word => this.validateDate(word)); 
    }

    private validateDate(word: string): boolean {
        var re = /^ (0 ? [1 - 9] | 1[0 - 2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/;
        return re.test(word);
    }
}