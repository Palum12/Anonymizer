import { ObscureRegexCreator } from './../regex-creators/ObscureRegexCreator';
import { Anonymizer } from "./Anonymizer";
import { AnonymizerDto } from "../../src/models/AnonymizerDto";

export class RegexAnonymizer extends Anonymizer {

    protected parseText(text: AnonymizerDto) {
        const myRegexCreator = new ObscureRegexCreator();
        let result = "/";
        result += myRegexCreator.createRegex(text.originalText);
        result += '/g';
        text.anonymizedText = result;
    }
}
