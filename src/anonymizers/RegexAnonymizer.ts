import { Anonymizer } from "./Anonymizer";
import { AnonymizerDto } from "../dtos/AnonymizerDTO";

export class RegexAnonymizer implements Anonymizer {
    anonymizeTexts(texts: string[]): AnonymizerDto[] {
        const result = [];
        texts.forEach(text => {
            const anonymizedText = 'HERE WILL BE REGEX'; // todo
            result.push(Object.assign(new AnonymizerDto, {
                originalText: text,
                anonymizedText: anonymizedText
            }));
        });
        return result;
    }
}