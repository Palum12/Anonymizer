import {Detector}  from './Detector';
import { PhraseType } from '../../src/models/PhraseType';
import { AnonymizerDto } from '../../src/models/AnonymizerDto';

export class StreetsDetector implements Detector {
    
    detectMatchingWords(words: string[]): AnonymizerDto[] {
        const streets = [];

        const triggers = ["ulica", "ul.", "ul", "ulicy"]


        let length = words.length
        for (let i = 0; i < words.length; i++) {
            if (triggers.indexOf(words[i]) !== -1) {
                let isFinished = false
                let x = 1
                while (x < length && !isFinished) {
                    if (i + x < length) {
                        let word = words[i + x]
                        if (this.isCaption(word)) { 
                            streets.push(words[i + x])
                        } else if (this.startsWithNumber(word)) {
                            streets.push(words[i + x])
                            isFinished = true
                        } else {
                            isFinished = true
                        }
                    }
                    x++
                }
            }
        }

        return streets.map(word => Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.street}));
    }

    private isCaption(text: string): boolean {
         return this.capitalizeFirstLetter(text) == text && !this.startsWithNumber(text)
    }

    private startsWithNumber(text: string) {
        return !isNaN(parseInt(text.charAt(0)))
    }

    private capitalizeFirstLetter(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}