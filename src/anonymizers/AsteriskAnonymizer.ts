import { Anonymizer } from "./Anonymizer";
import { AnonymizerDto } from "../dtos/AnonymizerDTO";

export class AsteriskAnonymizer implements Anonymizer {
    anonymizeTexts(texts: string[]): AnonymizerDto[] {
        const result = [];
        texts.forEach(text => {
            const anonymizedText = '*'.repeat(text.length);
            result.push(Object.assign(new AnonymizerDto, {
                originalText: text,
                anonymizedText: anonymizedText
            }));
        });
        return result;
    }
}