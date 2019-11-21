import { Anonymizer } from "./Anonymizer";
import { AnonymizerDto } from "src/dtos/AnonymizerDto";

export class AsteriskAnonymizer implements Anonymizer {
    AnonymizeTexts(texts: string[]): AnonymizerDto[] {
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