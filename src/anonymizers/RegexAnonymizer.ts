import { Anonymizer } from "./Anonymizer";
import { AnonymizerDto } from "src/dtos/AnonymizerDto";
/* global document*/

export class RegexAnonymizer extends Anonymizer {
    private regexRange: number;

    public anonymizeTexts(texts: string[]): AnonymizerDto[] {
        this.regexRange = new Number((<HTMLInputElement>document.getElementById('regexNumberParam')).value) as number;
        return super.anonymizeTexts(texts);
    }

    protected parseText(text: string): string {
        let result = "/";
        const characters = text.split('');
        // here you can use this.regexRange now
        for (let character of characters) {
            if (/[A-Z]/g.test(character)) {
                if (this.regexRange != 0) {
                    result += this.generateRange(character, this.regexRange, 60, 90);
                } else {
                    result += '[A-Z]'
                }
            } else if (/[a-z]/g.test(character)) {
                if (this.regexRange != 0) {
                    result += this.generateRange(character, this.regexRange, 97, 122);
                } else {
                    result += '[a-z]'
                }
            } else if (/[0-9]/g.test(character)) {
                if (this.regexRange != 0) {
                    result += this.generateRange(character, this.regexRange, 48, 57);
                } else {
                    result += '[0-9]'
                }
            } else {
                result += '.';
            }
        }
        result += '/g';
        return result;
    }

    private generateRange(character: string, range: number, minCode: number, maxCode: number): string{
        const lowerChar = String.fromCharCode(this.circularIterator(character.charCodeAt(0), (-1 * range), minCode, maxCode))
        const upperChar = String.fromCharCode(this.circularIterator(character.charCodeAt(0), (range), minCode, maxCode))
        return '['+lowerChar+'-'+upperChar+']'
    }

    private circularIterator(middle: number, offset: number, min: number, max: number) {
        const tempCalc = middle + offset
        if (tempCalc > max) {
            return max
        } else if (tempCalc < min) {
            return min
        } else {
            return tempCalc
        }
    }
}
