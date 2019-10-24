import Detector from './Detector';

export class PhoneNumbersDetector implements Detector {
    
    detectMatchingWords(words: string[]): string[] {
        // throw new Error("Method not implemented.");
        let phoneNumbers = [];
        for(let i = 0; i < words.length; i++) {
            let currentWord = words[i];
            if (!this.isNumber(currentWord)) {
                if(this.hasAreaCode(currentWord)) {
                    let restOfNumber = currentWord.substr(3);
                    // if(restOfNumber.length === 9 &&  this.isNumber(restOfNumber))
                }
                continue;
            }

        }
        return phoneNumbers;
    }

    private isNumber(valueToCheck: string): boolean {
        return !isNaN(parseInt(valueToCheck));
    }

    private hasAreaCode(valueToCheck: string): boolean {
        return valueToCheck.substr(0, 3) === '+48';
    }
}