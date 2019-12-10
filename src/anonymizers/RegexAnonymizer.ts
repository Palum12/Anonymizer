import { Anonymizer } from "./Anonymizer";
import { AnonymizerDto } from "../../src/models/AnonymizerDto";
/* global document*/

export class RegexAnonymizer extends Anonymizer {

    protected parseText(text: AnonymizerDto) {
        let result = "/";
        const characters = text.originalText.split('');
        for (let character of characters) {
            if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g.test(character)) {
                result += `[\\${character}]`;
                
            } else {
                result += `[${character}]`;
            }
        }
        result += '/g';
        text.anonymizedText = result;
    }
}