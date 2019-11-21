import {Detector}  from './Detector';

export class StreetsDetector implements Detector {
    
    detectMatchingWords(words: string[]): string[] {
        const streets = [];

        const triggers = ["ulica", "ul.", "ul", "ulicy"]


        let length = words.length
        for (let i = 0; i < words.length; i++) {
            if (triggers.indexOf(words[i]) !== -1) {
                console.log(words[i])
                let isFinished = false
                let x = 1
                while (x < length && !isFinished) {
                    if (i + x < length) {
                        let word = words[i + x]
                        if (this.isCaption(word) || this.startsWithNumber(word)) {
                            streets.push(words[i + x])
                        } else {
                            isFinished = true
                        }
                    }
                    x++
                }
            }
        }

        return streets;
    }

    private isCaption(text: string): boolean {
         return this.capitalizeFirstLetter(text) == text
    }

    private startsWithNumber(text: string) {
        return !isNaN(parseInt(text.charAt(0)))
    }

    private capitalizeFirstLetter(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}