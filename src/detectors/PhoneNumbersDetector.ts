import { AnonymizerDto } from '../../src/models/AnonymizerDto';
import { Detector }  from './Detector';
import { PhraseType } from '../../src/models/PhraseType';

export class PhoneNumbersDetector implements Detector {
    
    detectMatchingWords(words: string[]): AnonymizerDto[] {
        const phoneNumbers = [];
        for(let i = 0; i < words.length; i++) {
            let currentWord = words[i];
            let result;
            if(this.hasAreaCode(currentWord)) {
                result = this.tryFindPhoneNumber([currentWord.substr(3)].concat(words.slice(i + 1, i + 3)));
            } else {
                result = this.tryFindPhoneNumber(words.slice(i, i + 3));
            }
            if(result) {
                phoneNumbers.push(result);
            }
        }
        return phoneNumbers.map(word => Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.phoneNumber}));
    }

    private tryFindPhoneNumber(words: string[]): string {
        const firstItem = words[0];
        if(this.isNumber(firstItem)) {
            if (firstItem.length == 9) {
                return firstItem;
            }
            if (firstItem.length == 3 && this.isNumber(words[1]) && this.isNumber(words[2])) {
                return words.slice(0, 3).join(' ');
            }
        } else if(firstItem && firstItem.split('-').length === 3) { // remove dashes and try again
            if(this.tryFindPhoneNumber(firstItem.split('-'))) {
                return firstItem;
            }
        }
        return null;
    }

    private isNumber(valueToCheck: string): boolean {
        if(valueToCheck) {
            return !isNaN(Number(valueToCheck));
        }
        return false;
    }

    private hasAreaCode(valueToCheck: string): boolean {
        return valueToCheck.substr(0, 3) === '+48';
    }

}