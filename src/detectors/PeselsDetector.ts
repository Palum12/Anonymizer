import {Detector} from "./Detector";

export class PeselsDetector implements Detector {
    detectMatchingWords(words: string[]): string[] {
        return words.filter(word => this.validatePesel(word)); 
    }

    private validatePesel(word: string): boolean {
        if (typeof word !== 'string') {
            return false;
        }
    
        let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
        let sum = 0;
        let controlNumber = parseInt(word.substring(10, 11));
        for (let i = 0; i < weight.length; i++) {
            sum += (parseInt(word.substring(i, i + 1)) * weight[i]);
        }
        sum = sum % 10;
        return 10 - sum === controlNumber;
    }
}