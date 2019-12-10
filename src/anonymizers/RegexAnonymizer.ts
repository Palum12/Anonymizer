import { ObscureRegexCreator } from './../regex-creators/ObscureRegexCreator';
import { Anonymizer } from "./Anonymizer";
import { AnonymizerDto } from "../../src/models/AnonymizerDto";
/* global document*/

export class RegexAnonymizer extends Anonymizer {

    protected parseText(text: AnonymizerDto) {
        const myRegexCreator = new ObscureRegexCreator();

        let result = "/";
        // const characters = text.originalText.split('');
        // for (let character of characters) {
        //     if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g.test(character)) {
        //         result += `[\\${character}]`;
                
        //     } else {
        //         result += `[${character}]`;
        //     }
        // }
        result += myRegexCreator.createRegex(text.originalText);
        result += '/g';
        text.anonymizedText = result;
    }
}