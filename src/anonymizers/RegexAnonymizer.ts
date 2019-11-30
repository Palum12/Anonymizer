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
                result += "[A-Z]";
            } else if (/[a-z]/g.test(character)) {
                result += "[a-z]";
            } else if (/[0-9]/g.test(character)) {
                result += '[0-9]';
            } else {
                result += '.';
            }
        }
        result += '/g';
        return result;
    }
}