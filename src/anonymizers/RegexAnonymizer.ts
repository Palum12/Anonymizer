import { Anonymizer } from "./Anonymizer";
import { AnonymizerDto } from "src/dtos/AnonymizerDto";

export class AsteriskAnonymizer implements Anonymizer {
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