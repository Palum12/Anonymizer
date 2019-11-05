import {Detector} from "./Detector";

export class PeselsDetector implements Detector {

    detectMatchingWords(words: string[]): string[] {
        const pesels = [];

        words.forEach(word => {
            let result = this.validatePesel(word);
            if(result[0]) {
                pesels.push(word);
            } else if(result[1].length === 1) {
                const canPeselBeFixed = this.canPeselBeFixed(word, result[1]);
                if(canPeselBeFixed) {
                    pesels.push(word);
                }
            }
        });

        return pesels;
    }
    // pass empty array as faulty indexes 
    private validatePesel(word: string): [boolean, number[]] {
        if (typeof word !== 'string' || word.length !== 11) {
            return [false, []];
        }
        let faultyIndexes = [];
        let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
        let sum = 0;
        let controlNumber = parseInt(word.substring(10, 11));
        for (let i = 0; i < weight.length; i++) {
            let currentDigit = parseInt(word.substring(i, i + 1));
            if(isNaN(currentDigit)) {
                faultyIndexes.push(i);
            } else {
                sum += (currentDigit * weight[i]);
            }
        }
        sum = sum % 10;
        if(faultyIndexes.length === 0 ){
            return [10 - sum === controlNumber, []];
        } else {
            return [false, faultyIndexes];
        }
    }

    private canPeselBeFixed(faultyPesel: string, indexes: number[]): boolean {
        if (typeof faultyPesel !== 'string' || faultyPesel.length !== 11) {
            return false;
        }
        let index = indexes[0];
        for(let i = 0; i < 10; i++) {
            const possiblePesel = faultyPesel.substr(0,index) + i.toString() + faultyPesel.substr(index+1);
            if (this.validatePesel(possiblePesel)[0]) {
                return true;
            }
        }
    }
}